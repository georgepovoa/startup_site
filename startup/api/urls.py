from django.urls import path
from django.urls.conf import include 
from django.conf.urls import url, include
from rest_framework import routers

from api.models import User
from .views import TituloView, CapituloView, SecaoView, SubsecView, ArtigoView, Nivel2View, Nivel3View, Nivel4View,UserViewSet,CurrentUserViewSet


router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'current', CurrentUserViewSet,basename="User")

urlpatterns = [

    path('titulos', TituloView.as_view()),
    path('capitulos', CapituloView.as_view()),
    path('secao', SecaoView.as_view()),
    path('subsecao', SubsecView.as_view()),
    path('artigo', ArtigoView.as_view()),
    path('nivel2', Nivel2View.as_view()),
    path('nivel3', Nivel3View.as_view()),
    path('nivel4', Nivel4View.as_view()),
    url(r'^', include(router.urls)),
    
]
