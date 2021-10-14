from django.db.models import fields
from rest_framework import serializers
from .models import ApiTitulos,Artigo,Capitulos,Secao,Subsecao,Nivel2,Nivel3,Nivel4
from api.models import User, UserProfile



class TituloSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApiTitulos
        fields =('id','lei','texto')

class CapitulosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Capitulos
        fields =('id','lei','titulo','texto')

class SecaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Secao
        fields =('id','lei','titulo','capitulo','texto')

class SubsecaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subsecao
        fields =('id','lei','titulo','capitulo','sec','texto')

class ArtigoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artigo
        fields =('id','lei','titulo','capitulo','sec','subsec','texto','endereco')

class Nivel2Serializer(serializers.ModelSerializer):
    class Meta:
        model = Nivel2
        fields =('id','lei','titulo','capitulo','sec','subsec','artigo','texto','endereco')

class Nivel3Serializer(serializers.ModelSerializer):
    class Meta:
        model = Nivel3
        fields =('id','lei','titulo','capitulo','sec','subsec','artigo','nivel2','texto','endereco')

class Nivel4Serializer(serializers.ModelSerializer):
    class Meta:
        model = Nivel4
        fields =('id','lei','titulo','capitulo','sec','subsec','artigo','nivel2','nivel3','texto','endereco')



############################ USERS  #######################################
class UserProfileSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = UserProfile
        fields = ('title', 'dob', 'address', 'country', 'city', 'zip', 'photo')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    profile = UserProfileSerializer(required=True)

    class Meta:
        model = User
        fields = ('url', 'email', 'first_name', 'last_name', 'password', 'profile')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        profile_data = validated_data.pop('profile')
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        UserProfile.objects.create(user=user, **profile_data)
        return user

    def update(self, instance, validated_data):
        profile_data = validated_data.pop('profile')
        profile = instance.profile

        instance.email = validated_data.get('email', instance.email)
        instance.save()

        profile.title = profile_data.get('title', profile.title)
        profile.dob = profile_data.get('dob', profile.dob)
        profile.address = profile_data.get('address', profile.address)
        profile.country = profile_data.get('country', profile.country)
        profile.city = profile_data.get('city', profile.city)
        profile.zip = profile_data.get('zip', profile.zip)
        profile.photo = profile_data.get('photo', profile.photo)
        profile.save()

        return instance




############################ USERS  #######################################