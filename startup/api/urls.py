from django.urls import path
from django.urls.conf import include 
from django.conf.urls import url, include
from rest_framework import routers

from api.models import User
from .views import UserViewSet,CurrentUserViewSet


router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'current', CurrentUserViewSet,basename="User")

urlpatterns = [
    
    url(r'^', include(router.urls)),
    
]
