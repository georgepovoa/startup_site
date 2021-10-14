from django.db import models

from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from django.conf import settings
# Create your models here.


class ApiTitulos(models.Model):
    id = models.IntegerField(primary_key=True)
    lei = models.CharField(max_length=20)
    texto = models.TextField()

    class Meta:
        managed = False
        db_table = 'titulos'


class Capitulos(models.Model):
    id = models.IntegerField(blank=True, primary_key=True)
    lei = models.TextField(blank=True, null=True)
    titulo = models.IntegerField(blank=True, null=True)
    texto = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'capitulos'


class Secao(models.Model):
    id = models.IntegerField(blank=True, primary_key=True)
    lei = models.TextField(blank=True, null=True)
    titulo = models.IntegerField(blank=True, null=True)
    capitulo = models.IntegerField(blank=True, null=True)
    texto = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'secao'


class Subsecao(models.Model):
    id = models.IntegerField(blank=True, primary_key=True)
    lei = models.TextField(blank=True, null=True)
    titulo = models.IntegerField(blank=True, null=True)
    capitulo = models.IntegerField(blank=True, null=True)
    sec = models.IntegerField(blank=True, null=True)
    texto = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'subsecao'


class Artigo(models.Model):
    id = models.IntegerField(blank=True, primary_key=True)
    lei = models.TextField(blank=True, null=True)
    titulo = models.IntegerField(blank=True, null=True)
    capitulo = models.TextField(blank=True, null=True)
    sec = models.TextField(blank=True, null=True)
    subsec = models.TextField(blank=True, null=True)
    texto = models.TextField(blank=True, null=True)
    endereco = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'artigo'


class Nivel2(models.Model):
    id = models.IntegerField(blank=True, primary_key=True)
    lei = models.TextField(blank=True, null=True)
    titulo = models.IntegerField(blank=True, null=True)
    capitulo = models.TextField(blank=True, null=True)
    sec = models.TextField(blank=True, null=True)
    subsec = models.TextField(blank=True, null=True)
    artigo = models.TextField(blank=True, null=True)
    texto = models.TextField(blank=True, null=True)
    endereco = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'nivel2'


class Nivel3(models.Model):
    id = models.IntegerField(blank=True, primary_key=True)
    lei = models.TextField(blank=True, null=True)
    titulo = models.IntegerField(blank=True, null=True)
    capitulo = models.TextField(blank=True, null=True)
    sec = models.TextField(blank=True, null=True)
    subsec = models.TextField(blank=True, null=True)
    artigo = models.TextField(blank=True, null=True)
    nivel2 = models.TextField(blank=True, null=True)
    texto = models.TextField(blank=True, null=True)
    endereco = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'nivel3'


class Nivel4(models.Model):
    id = models.IntegerField(blank=True, primary_key=True)
    lei = models.TextField(blank=True, null=True)
    titulo = models.IntegerField(blank=True, null=True)
    capitulo = models.TextField(blank=True, null=True)
    sec = models.TextField(blank=True, null=True)
    subsec = models.TextField(blank=True, null=True)
    artigo = models.TextField(blank=True, null=True)
    nivel2 = models.TextField(blank=True, null=True)
    nivel3 = models.TextField(blank=True, null=True)
    texto = models.TextField(blank=True, null=True)
    endereco = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'nivel4'



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
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='profile',)
    title = models.CharField(max_length=5)
    dob = models.DateField()
    address = models.CharField(max_length=255)
    country = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    zip = models.CharField(max_length=5)
    photo = models.ImageField(upload_to='uploads', blank=True)





################################       USER   ####################################################
