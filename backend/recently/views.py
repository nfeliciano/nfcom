from django.contrib.auth.models import User
from recently.models import Music, Games
from recently.serializers import UserSerializer, MusicSerializer, GamesSerializer
from rest_framework import generics
from rest_framework import permissions

class UserList(generics.ListAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = User.objects.all()
    serializer_class = UserSerializer

class MusicList(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Music.objects.all()
    serializer_class = MusicSerializer

class GamesList(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Games.objects.all()
    serializer_class = GamesSerializer
