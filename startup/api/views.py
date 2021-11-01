from inspect import isgenerator
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.fields import HiddenField
from .serializers import TituloSerializer, CapitulosSerializer, SecaoSerializer, SubsecaoSerializer, ArtigoSerializer, Nivel2Serializer, Nivel3Serializer, Nivel4Serializer, UserSerializer, questaoSerializer
from .models import ApiTitulos, Capitulos, Secao, Subsecao, Artigo, Nivel2, Nivel3, Nivel4, User, q_c_q
from rest_framework.response import Response
from rest_framework import viewsets
# Create your views here.


class TituloView(generics.CreateAPIView):
    def get(self, request):
        queryset = ApiTitulos.objects.all()
        serializer_class = TituloSerializer(queryset, many=True)
        return Response(serializer_class.data)
    queryset = ApiTitulos.objects.all()
    serializer_class = TituloSerializer


class CapituloView(generics.CreateAPIView):
    def get(self, request):
        queryset = Capitulos.objects.all()
        serializer_class = CapitulosSerializer(queryset, many=True)
        return Response(serializer_class.data)
    queryset = Capitulos.objects.all()
    serializer_class = CapitulosSerializer


class SecaoView(generics.CreateAPIView):
    def get(self, request):
        queryset = Secao.objects.all()
        serializer_class = SecaoSerializer(queryset, many=True)
        return Response(serializer_class.data)
    queryset = Secao.objects.all()
    serializer_class = SecaoSerializer


class SubsecView(generics.CreateAPIView):
    def get(self, request):
        queryset = Subsecao.objects.all()
        serializer_class = SubsecaoSerializer(queryset, many=True)
        return Response(serializer_class.data)
    queryset = Subsecao.objects.all()
    serializer_class = SubsecaoSerializer


class ArtigoView(generics.CreateAPIView):
    def get(self, request):
        queryset = Artigo.objects.all()
        serializer_class = ArtigoSerializer(queryset, many=True)
        return Response(serializer_class.data)
    queryset = Artigo.objects.all()
    serializer_class = ArtigoSerializer


class Nivel2View(generics.CreateAPIView):
    def get(self, request):
        queryset = Nivel2.objects.all()
        serializer_class = Nivel2Serializer(queryset, many=True)
        return Response(serializer_class.data)
    queryset = Nivel2.objects.all()
    serializer_class = Nivel2Serializer


class Nivel3View(generics.CreateAPIView):
    def get(self, request):
        queryset = Nivel3.objects.all()
        serializer_class = Nivel3Serializer(queryset, many=True)
        return Response(serializer_class.data)
    queryset = Nivel3.objects.all()
    serializer_class = Nivel3Serializer


class Nivel4View(generics.CreateAPIView):
    def get(self, request):
        queryset = Nivel4.objects.all()
        serializer_class = Nivel4Serializer(queryset, many=True)
        return Response(serializer_class.data)
    queryset = Nivel4.objects.all()
    serializer_class = Nivel4Serializer


class QuestaoView(generics.CreateAPIView):
    def get(self, request):
        queryset = q_c_q.objects.all()
        serializer_class = questaoSerializer(queryset, many=True)
        return Response(serializer_class.data)
    queryset = q_c_q.objects.all()
    serializer_class = questaoSerializer




################################# USERS #########################

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    
    


class CurrentUserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    
    
    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        user = self.request.user
        print(user)
        return User.objects.filter(email=user)
    
    

    
    
################################# USERS #########################



################################# QUESTAO #######################
def get_name(request):
    if request.method == 'POST':
        print(request)

################################# QUESTAO #######################