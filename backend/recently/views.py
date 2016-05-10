from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from recently.models import Music, Games
from recently.serializers import MusicSerializer

# Create your views here.
class JSONResponse(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)

def music(request):
    if request.method == 'GET':
        music = Music.objects.all()
        current_music = list(music[:1])
        if (current_music):
            serializer = MusicSerializer(current_music, many=True)
            return JSONResponse(serializer.data)

def games(request):
    if request.method == 'GET':
        games = Games.objects.all()
        serializer = GamesSerializer(games, many=True)
        return JSONResponse(serializer.data)
