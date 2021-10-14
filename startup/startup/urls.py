
from django import urls
from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from django.conf.urls import include, url


urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/', include('api.urls')),
    path('',include('frontend.urls')),
]
