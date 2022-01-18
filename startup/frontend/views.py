from django import forms, http
from django.db.models import fields
from django.http import response
from django.http.request import HttpHeaders
from django.http.response import HttpResponse
from django.shortcuts import  render, redirect
from .forms import NewUserForm
from django.contrib.auth import login, authenticate
from django.contrib import messages
import rest_framework
from api.models import User, UserProfile, Anexo2
import json
import difflib
import requests
from pymongo import MongoClient
client = MongoClient('mongodb+srv://georgepovoa12:asdasd12@cluster0.y0ias.mongodb.net/cluster0?retryWrites=true&w=majority')
db = client['CF88']
col = db["Lei"]





# Create your views here.

jsonDec = json.decoder.JSONDecoder()


class PostResposta(forms.Form):
    CHOICES = [('Certo', 'Certo'),
               ('Errado', 'Errado')]

    resposta_user = forms.ChoiceField(
        choices=CHOICES, widget=forms.RadioSelect,label="")





class AnexoForm(forms.ModelForm):
    titulo = forms.CharField(required=False)
    grupo = forms.CharField(required=False,widget=forms.HiddenInput())
    photo = forms.FileField(required=False)
    
    class Meta:
        model = Anexo2
        fields=['photo']
        


def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')



def submit_q_e(request, *args, **kwargs):
    def negritar(antes,depois):
        if antes == depois:
            return depois.split()
        a = antes.split()
        b = depois.split()
        e = []
        d = []
        c = difflib.context_diff(a, b,lineterm="",n=200)
        passou_ast = False
        pode = False

        for i in c:
            if "----" in i:
                pode = True
            elif pode:
                
                if "!" in i:
                    i = i.replace("!", "@@@") + " @@@"
                    
                elif "+" in i:
                    i = i.replace("+","@@@") + " @@@"
                d.append(i)
        if len(d)<1:
            return depois.split()
        return d
    # o submit_q_e é o form que aparece depois do usuário responder 
    # Só as questões falsas pq precisam de correção do usuário
    usuario = UserProfile.objects.get(user = request.user)
    usuario_para_anexo = User.objects.get(email = request.user).id
    form = AnexoForm(request.POST, request.FILES)
    if form.is_valid() and request.FILES:
        print(request.FILES, "REQUESTFILES")
        new_anex = Anexo2(user = request.user,titulo =form.cleaned_data['titulo'],show_name=form.cleaned_data['titulo'],grupo = "filho",photo = request.FILES['photo'],endereco = "cf88,0,,,,0,,,")
        new_anex.save()
        print(new_anex)
    else :
        print("ERRO"*30)
        print(form.errors )
    #recebe correcao e separa em uma lista para colocar em Maiúsculo as palavras alteradas0
    correcao = request.POST["campo_texto"]

    id = int(request.POST["user_id"])
    cargo = request.POST["cargo"]
    banca = request.POST["banca"]
    ano = request.POST["ano"]
    orgao = request.POST["orgao"]
    loc_lei = request.POST["loc_lei"]

    resultado = bool(request.POST["resultado"])

    texto_item = request.POST["texto_item"]
    
    # esse for é para colocar em maiusculo as palavras que não existiam antes
    # Necessário aprimorar para não perceber só palavras novas
    correcao = negritar(texto_item,correcao)

    # Salva ou caso não exista, cria uma nova.
    

    # Salva no data_q.JSON
    y={}
    y = {
    "user":str(request.user),
    "id_questao": id,
    "id_lei":loc_lei,
    "correcao":' '.join(correcao),
    
    }
    requests.put("http://localhost:3000/adicionarquestao",params=y)
    


    return redirect('questao')


def questao(request, *args, **kwargs):

    user = request.user
# verifica se existe user logado, e redireciona pq se não crasha
    if not user.is_authenticated:
        return redirect("/accounts/login")

    # Aqui pego as questões que o usuario já fez
    
    api_usuario_questoes = requests.get("http://localhost:3000/user/{}".format(request.user)).json()
    lista_do_usuario = api_usuario_questoes["questoes_feitas"]
    lista_do_usuario = "&q=".join(str(x) for x in lista_do_usuario)
    print(lista_do_usuario)

## Pegar infos da questão ##
    

#e qui eu verifico se o usuário ainda não fez a questão
    
    data = requests.get("http://localhost:3000/questoes/cf88/uma?q="+lista_do_usuario).json()

    id = data["_id"]
    ano = data["ano"]
    banca = data["banca"]
    orgao = data["orgao"]
    cargo = data["cargo"]
    tipo = data["tipo_questao"]
    gabarito = data["gabarito"]
    comando = data["comando"]
    texto_item = data["texto_item"].strip()
    loc_lei = data["loc_lei"]

    lei_txt = requests.get("http://localhost:3000/{}".format(id)).json()[0]["texto"]
## Pegar infos da questão ##

#Primeiro if é só da resposta
    if request.method == 'POST':
        form = PostResposta(request.POST)
        if True:
            resposta_user = request.POST["select"]
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
                                  'ano': ano,
                                  'banca': banca,
                                  'orgao': orgao,
                                  'cargo': cargo,
                                  'tipo': tipo,
                                  'gabarito': gabarito,
                                  'comando': comando,
                                  'texto_item': texto_item,
                                  'resultado': resultado,
                                  "loc_lei":loc_lei,
                                  'respondido': True,
                                  "lei_txt":lei_txt
                              }) 
# Esse else é para Adicionar a questao certa que não precisa de correção do aluno
# só o texto_item     
            else:
                #vai precisar mudar para encaixar o anexo caso necessário
                
                #renderiza página com possível anexo
                return render(request, 'frontend/questao.html',
                          {
                              'current': request.user,
                              'form': AnexoForm(),
                              'id': id,
                              'ano': ano,
                              'banca': banca,
                              'orgao': orgao,
                              'cargo': cargo,
                              'questao': questao,
                              'tipo': tipo,
                              'gabarito': gabarito,
                              'comando': comando,
                              'texto_item': texto_item.strip(),
                              'resultado': resultado,
                              "loc_lei":loc_lei,
                              'respondido': True,
                              "lei_txt":lei_txt

                          })
# ese return é o primeiro return, sem nenhum post
    return render(request, 'frontend/questao.html',
                  {
                      'current': request.user,
                      'form': PostResposta(),
                      'id': id,
                      'ano': ano,
                      'banca': banca,
                      'orgao': orgao,
                      'cargo': cargo,
                      'tipo': tipo,
                      'gabarito': gabarito,
                      'comando': comando,
                      'texto_item': texto_item.strip(),
                      "loc_lei":loc_lei,
                      'respondido': False,
                      "lei_txt":lei_txt
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



### DEF para salvar questão na lei
def write_json_q(user,new_data, filename=r'/home/george/Documents/djreact/startup/frontend/src/components/leis/data_questoes.json'):
    with open(filename,'r+') as file:
          # First we load existing data into a dict.
        file_data = json.load(file)
        # Join new_data with file_data inside emp_details
        if user in file_data:
            print("já tem")
            file_data[user].update(new_data)
        else: 
            file_data[user] = new_data
        # Sets file's current position at offset.
        file.seek(0)
        # convert back to json.
        json.dump(file_data, file, indent =0)


def home_user_view(request,id_caderno):
  
    if request.method == 'GET':
        
        user = request.user
        if user.is_authenticated:
            response = requests.get("http://localhost:3000/cadernos/{}".format(user)).json()
            
            nome_caderno = response["cadernos"][str(id_caderno)]["nome_caderno"]
        else : 
            redirect("accounts/login")

  
        return render(request,template_name="frontend/homeuser.html",context={"id_caderno":id_caderno,"nome_caderno":nome_caderno})
    

def profile(request):
    usuario = UserProfile.objects.get(user = request.user)

    if request.method == "GET":
        return render(request,template_name="frontend/profile.html")

def homepage(request):
    if request.method == "POST":
        response = requests.get("http://localhost:3000/titulo")

        json_response = response.json()
        print(json_response)

        email = request.POST["email-user"]
        if User.objects.filter(email=email).exists():
            return redirect("accounts/login")
        else:
            return redirect("register")
    
    if request.user.is_authenticated:
        return redirect(tela_profile_picker)

    return render(request,template_name="frontend/homepage.html")

def todo(request):
    teste = col.find({'_id':10}).limit(3)
    for i in teste:
        print(i)
    return render(request,template_name="frontend/todo.html")



def tela_profile_picker(request):
    user = request.user
    if user.is_authenticated:
        response = requests.get("http://localhost:3000/cadernos/{}".format(user)).json()

        
        return render(request,template_name="frontend/profile_picker.html",context = {"cadernos":response["cadernos"]})
    else:
        return redirect("accounts/login")


def create_caderno(request):

    # Mas Esse vai para a próxima lista
    if request.method == "POST" and request.POST["submit"] == "Prosseguir":
        marcados = []
        marcados_anteriormente = request.POST["marcados_anteriormente"]
        recomendado = []
        recomendado_formatado = []
        recomendado_api = []
        is_ultimo = False

        subordinados = request.POST.getlist('t_marcados')
        for i in subordinados:
            marcados.append(i.split(":")[0])
            recomendado.append(i.split(":")[1])

        if list(recomendado) != ["sem_subordinado"] :
            
            for i in list(recomendado):
                if i != "sem_subordinado":
                
                    for j in json.loads(i):
                        recomendado_formatado.append(j)
        
        if recomendado_formatado == []:
            is_ultimo = True 

        
        
        payload = {"item_ids":recomendado_formatado}
        recomendado_api.append(requests.get("http://localhost:3000/lista/{lista_id}",params=payload).json())
        old_key = "_id"
        new_key = "id"
        for i in recomendado_api:
            for j in i:
                j[new_key]= j.pop(old_key)

        recomendado_api = [item for sublist in recomendado_api for item in sublist]

        marcados += marcados_anteriormente.split(',')

        return render(request,template_name="frontend/create_caderno.html",context={
            "marcados" : ",".join(marcados),
            "recomendados":recomendado_api,
            "ultimo":is_ultimo

        })
    
    if request.method == "POST" and request.POST["submit"] == "Criar caderno":
        print(request.user)
        cadernos_dict = requests.get("http://localhost:3000/cadernos/{}".format(request.user)).json()
        new_id = int(list(cadernos_dict["cadernos"])[-1]) + 1
        list_of_ids = request.POST["marcados_anteriormente"].split(",")
        while "" in list_of_ids:
            list_of_ids.remove("")
        bancas = []
        cargos = []
        list_of_ids = list(map(int, list_of_ids))
        ind_lei_str = '"indice_lei":{}'.format(list_of_ids)
        bancas_str = '"bancas":{}'.format(bancas)
        cargos_str = '"cargos":{}'.format(cargos)
        completo = "{" + ind_lei_str + ","+ bancas_str +","+cargos_str +"}"        
        requests.put("http://localhost:3000/cadernos?user={}&id={}&nome_caderno={}".format(request.user,new_id,request.POST["nome_caderno"]),data = completo)
        
        return redirect("create_caderno")


    user = request.user
    if user.is_authenticated:
        response =requests.get("http://localhost:3000/titulo").json()
        old_key = "_id"
        new_key = "id"
        for i in response:
            i[new_key]= i.pop(old_key)
        
        return render(request,template_name="frontend/create_caderno.html",context={
            "recomendados":response,
            
        })    
    else:
        return redirect("accounts/login")



