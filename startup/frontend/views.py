from django import forms, http
from django.http.request import HttpHeaders
from django.http.response import HttpResponse

from django.shortcuts import render
import rest_framework
from api.models import User, q_c_q

# Create your views here.


class PostResposta(forms.Form):
    CHOICES = [('Certo', 'Certo'),
               ('Errado', 'Errado')]

    resposta_user = forms.ChoiceField(
        choices=CHOICES, widget=forms.RadioSelect)


class inserir_errado(forms.Form):
    campo_texto = forms.CharField(label="Inserir correção ", max_length=500)
    file = forms.FileField()


class inserir_certo(forms.Form):
    file = forms.FileField()


def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')


def questao(request, *args, **kwargs):
    lista_do_usuario = []
    data_all = q_c_q.objects.all()
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

    if request.method == 'POST':
        form = PostResposta(request.POST)
        if form.is_valid():
            resposta_user = form.cleaned_data["resposta_user"]
            print(resposta_user, request.user)
            resultado = resposta_user == gabarito
            print(resultado, resposta_user, gabarito)
            if gabarito == "Errado":
                return render(request, 'frontend/questao.html',
                              {
                                  'current': request.user,
                                  'form': inserir_errado(),
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
                                  'resultado' : resultado,
                                  'respondido' : True
                              })
            else:
                return render(request, 'frontend/questao.html',
                              {
                                 'current': request.user,
                                  'form': inserir_certo(),
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
                                  'resultado' : resultado,
                                  'respondido': True

                              })

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
