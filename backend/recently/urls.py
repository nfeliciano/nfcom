from django.conf.urls import url
from . import views
from rest_framework.urlpatterns import format_suffix_patterns
from recently import views
from django.conf.urls import include

urlpatterns = [
    url(r'^users/$', views.UserList.as_view()),
    url(r'^music/$', views.MusicList.as_view()),
    url(r'^games/$', views.GamesList.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)

urlpatterns += [
    url(r'^api-auth/', include('rest_framework.urls',
                               namespace='rest_framework')),
]
