from django.conf.urls import url
from . import views
from recently import views

urlpatterns = [
    url(r'^music/$', views.music),
    url(r'^games/$', views.games),
]
