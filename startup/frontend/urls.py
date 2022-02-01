from django.urls import path
from django.urls.conf import include
from.views import create_caderno, index, questao, submit_q_e,register_request,display_Anexo2_images_by_user,home_user_view,homepage, tela_profile_picker

urlpatterns = [
    path('',homepage, name="homepage"),
    path('lei/<int:id>',index),
    path('homequestao',questao,name = "questao"),
    path('q_e',submit_q_e,name="q_e "),
    path("accounts/",include('django.contrib.auth.urls')),
    path("register", register_request, name="register"),
    path('anexos2', display_Anexo2_images_by_user, name = 'display_anexo2_images'),
    path("homeuser/<int:id_caderno>", home_user_view, name="homeuser"),
    path("profile-picker",tela_profile_picker,name = "profile_picker"),
    path("create-caderno",create_caderno,name = "create_caderno")
]
