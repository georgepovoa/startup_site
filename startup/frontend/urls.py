from django.urls import path
from django.urls.conf import include
from.views import index, questao, questoes_feitas, submit_q_e,register_request,display_Anexo2_images_by_user,home_user_view,profile,homepage

urlpatterns = [
    path('',homepage, name="homepage"),
    path('join',index),
    path('lei/<int:id>',index),
    path('homequestao',questao,name = "questao"),
    path('feitas',questoes_feitas,name="questoes_feitas"),
    path('q_e',submit_q_e,name="q_e "),
    path("accounts/",include('django.contrib.auth.urls')),
    path("register", register_request, name="register"),
    path('anexos2', display_Anexo2_images_by_user, name = 'display_anexo2_images'),
    path("homeuser", home_user_view, name="homeuser"),
    path("profile", profile,name = "profile")
]
