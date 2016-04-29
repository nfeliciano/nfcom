from django.conf.urls import url
from . import views
from currently import views

urlpatterns = [
    # url(r'^$', views.index, name='index'),
    url(r'^music/$', views.music_list),
]
