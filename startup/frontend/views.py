from django import forms, http
from django.http.request import HttpHeaders
from django.http.response import HttpResponse
import json
from django.shortcuts import  render, redirect
from .forms import NewUserForm
from django.contrib.auth import login, authenticate
from django.contrib import messages
import rest_framework
from api.models import User, UserProfile, q_c_q, Anexo2

# Create your views here.

jsonDec = json.decoder.JSONDecoder()


class PostResposta(forms.Form):
    CHOICES = [('Certo', 'Certo'),
               ('Errado', 'Errado')]

    resposta_user = forms.ChoiceField(
        choices=CHOICES, widget=forms.RadioSelect)





class AnexoForm(forms.ModelForm):
  
    class Meta:
        model = Anexo2
        fields = ['titulo','grupo','photo']


def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')


def questoes_feitas(request, *args, **kwargs):
    usuario = UserProfile.objects.get(user = request.user)
    return render(request, 'frontend/questoes_feitas.html',{
        'current' : request.user,
        'questoes_feitas':jsonDec.decode(usuario.questoes_feitas)




    })


def submit_q_e(request, *args, **kwargs):
    # o submit_q_e é o form que aparece depois do usuário responder 
    # Só as questões falsas pq precisam de correção do usuário
    usuario = UserProfile.objects.get(user = request.user)
    usuario_para_anexo = User.objects.get(email = request.user).id
    form = AnexoForm(request.POST, request.FILES)
    if form.is_valid():
        new_anex = Anexo2(user = request.user,titulo =form.cleaned_data['titulo'],show_name=form.cleaned_data['titulo'],grupo = "filho",photo = request.FILES['photo'],endereco = "cf88,0,,,,0,,,")
        new_anex.save()
        print(new_anex)
    else :
        print("ERRO"*30)
        print(form.errors )
    #recebe correcao e separa em uma lista para colocar em Maiúsculo as palavras alteradas0
    correcao = request.POST["campo_texto"].split()

    id = int(request.POST["user_id"])

    resultado = bool(request.POST["resultado"])

    texto_item = request.POST["texto_item"].split()

    
    # esse for é para colocar em maiusculo as palavras que não existiam antes
    # Necessário aprimorar para não perceber só palavras novas
    for i in range(len(correcao)):

        if correcao[i] not in texto_item:
            
            correcao[i] = correcao[i].upper()

    # Salva ou caso não exista, cria uma nova.

    try:
        lista_antes = jsonDec.decode(usuario.questoes_feitas)
        listIWantToStore = [[id, resultado, correcao]] + lista_antes
    except:
        listIWantToStore = [[id, resultado, correcao]]

    usuario.questoes_feitas = json.dumps(listIWantToStore)
    usuario.save(update_fields=['questoes_feitas'])
    print(usuario.questoes_feitas)
    return redirect('questao')


def questao(request, *args, **kwargs):

    user = request.user
# verifica se existe user logado, e redireciona pq se não crasha
    if not user.is_authenticated:
        return redirect("/accounts/login")

    # Aqui pego as questões que o usuario já fez
    lista_do_usuario = []


    try:   
        usuario = UserProfile.objects.get(user = request.user)
        try:
            for i in jsonDec.decode(usuario.questoes_feitas):
                lista_do_usuario.append(i[0])

        except Exception as e:
            print(e)

    except Exception as e:
        print(e)
## Pegar infos da questão ##
    data_all = q_c_q.objects.all()

#e qui eu verifico se o usuário ainda não fez a questão
    for objeto in data_all:
        if objeto.id not in lista_do_usuario:
            data = objeto

    id = data.id
    assunto = data.assunto
    ano = data.ano
    banca = data.banca
    orgao = data.orgao
    cargo = data.cargo
    questao = data.questao
    tipo = data.tipo
    gabarito = data.gabarito
    comando = data.comando
    texto_item = data.texto_item
## Pegar infos da questão ##

#Primeiro if é só da resposta
    if request.method == 'POST':
        form = PostResposta(request.POST)
        if form.is_valid():
            resposta_user = form.cleaned_data["resposta_user"]
            print(resposta_user, request.user)
            resultado = resposta_user == gabarito
            print(resultado, resposta_user, gabarito)

## If para errado pq o forms é diferente
            if gabarito == "Errado":
                return render(request, 'frontend/questao.html',
                              {
                                  'current': request.user,
                                  'form': AnexoForm(),
                                  'id': id,
                                  'assunto': assunto,
                                  'ano': ano,
                                  'banca': banca,
                                  'orgao': orgao,
                                  'cargo': cargo,
                                  'questao': questao,
                                  'tipo': tipo,
                                  'gabarito': gabarito,
                                  'comando': comando,
                                  'texto_item': texto_item,
                                  'resultado': resultado,
                                  'respondido': True
                              }) 
# Esse else é para Adicionar a questao certa que não precisa de correção do aluno
# só o texto_item     
            else:
                #vai precisar mudar para encaixar o anexo caso necessário
                try:
                    # tenta puxar lista de questoes já feitas
                    
                    lista_antes = jsonDec.decode(usuario.questoes_feitas)
                    listIWantToStore = [[id, resultado, texto_item]] + lista_antes
                except:
                    #se não conseguir cria uma
                    listIWantToStore = [[id, resultado, texto_item]]
                #salvar as alterações no usuário
                usuario.questoes_feitas = json.dumps(listIWantToStore)
                usuario.save(update_fields=['questoes_feitas'])
                #renderiza página com possível anexo
                return render(request, 'frontend/questao.html',
                          {
                              'current': request.user,
                              'form': AnexoForm(),
                              'id': id,
                              'assunto': assunto,
                              'ano': ano,
                              'banca': banca,
                              'orgao': orgao,
                              'cargo': cargo,
                              'questao': questao,
                              'tipo': tipo,
                              'gabarito': gabarito,
                              'comando': comando,
                              'texto_item': texto_item,
                              'resultado': resultado,
                              'respondido': True

                          })
# ese return é o primeiro return, sem nenhum post
    return render(request, 'frontend/questao.html',
                  {
                      'current': request.user,
                      'form': PostResposta(),
                      'id': id,
                      'assunto': assunto,
                      'ano': ano,
                      'banca': banca,
                      'orgao': orgao,
                      'cargo': cargo,
                      'questao': questao,
                      'tipo': tipo,
                      'gabarito': gabarito,
                      'comando': comando,
                      'texto_item': texto_item,
                      'respondido': False
                  }
                  )

def register_request(request):
    if request.method == "POST":
        form = NewUserForm(request.POST)
        if form.is_valid():
            user = form.save()
            UserProfile.objects.create(user = user )
            user.save()
            login(request,user)
            messages.success(request,"Registration successful")
            return redirect("/accounts/login")
        messages.error(request,"Unsuccessful registration. Invalid information")
    form = NewUserForm()
    return render(request=request,template_name="registration/register.html",context={"register_form":form})


def display_Anexo2_images_by_user(request):
  
    if request.method == 'GET':
  
        # getting all the objects of hotel.
        Anexos = Anexo2.objects.all().filter(user = request.user) 
        return render(request=request,template_name = 'frontend/display_anexo2_images.html',context = {'anexos' : Anexos})