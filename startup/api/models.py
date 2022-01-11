from django.db import models

from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from django.conf import settings
import json


# Create your models here.


class q_c_q(models.Model):
    id = models.IntegerField(blank=True, primary_key=True)
    assunto = models.TextField(blank=True, null=True)
    ano = models.IntegerField(blank=True, null=True)
    banca = models.TextField(blank=True, null=True)
    orgao = models.TextField(blank=True, null=True)
    cargo = models.TextField(blank=True, null=True)
    questao = models.TextField(blank=True, null=True)
    tipo = models.TextField(blank=True, null=True)
    gabarito = models.TextField(blank=True, null=True)
    comando = models.TextField(blank=True, null=True)
    texto_item = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'q_c_q'



##########################################################################################
################################       USER   ####################################################
class User(AbstractUser):
    username = models.CharField(blank=True, null=True,max_length=20)
    email = models.EmailField(_('email address'), unique=True)
    


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']

    def __str__(self):
        return "{}".format(self.email)

class UserProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='profile')
    questoes_feitas = models.TextField(blank=True,null=True)
    photo = models.ImageField(upload_to='uploads', blank=True)

    





################################       USER   ####################################################



################################ ANEXO #################################################

# class Anexo(models.Model):
#     user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='anexo')
#     titulo = models.CharField(max_length=255)
#     show_name = models.CharField(max_length=255)
#     grupo = models.CharField(max_length=150)
#     photo = models.FileField(upload_to='anexo/')
#     endereco = models.CharField(max_length=50)
#     # futuramente um campo de endereço para mostrar onde vai questão
#     # Precisa fazer o migrations ainda



class Anexo2(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='anexo2')
    titulo = models.CharField(max_length=255)
    show_name = models.CharField(max_length=255)
    grupo = models.CharField(max_length=150)
    photo = models.FileField(upload_to='anexo/')
    endereco = models.CharField(max_length=50)
# ################################ ANEXO #################################################