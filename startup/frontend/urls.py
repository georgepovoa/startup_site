from django.urls import path
from.views import index, questao

urlpatterns = [
    path('',index),
    path('join',index),
    path('lei',index),
    path('homequestao',questao,name = "questao")
]
