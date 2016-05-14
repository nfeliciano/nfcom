from rest_framework import serializers
from django.contrib.auth.models import User
from recently.models import Music, Games

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')

class MusicSerializer(serializers.ModelSerializer):
    primkey = serializers.IntegerField(read_only=True)
    music_text = serializers.CharField(max_length=100)
    link = serializers.CharField(max_length=100, default='#')
    review = serializers.CharField(max_length=255)
    rating = serializers.IntegerField()

    class Meta:
        model = Music
        ordering = 'add_date'
        fields = ('primkey', 'music_text', 'link', 'review', 'rating')

    def create(self, validated_data):
        return Music.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.music_text = validated_data.get('music_text', instance.music_text)
        instance.link = validated_data.get('link', instance.link)
        instance.save()
        return instance

class GamesSerializer(serializers.ModelSerializer):
    primkey = serializers.IntegerField(read_only=True)
    games_text = serializers.CharField(max_length=100)
    link = serializers.CharField(max_length=100, default='#')
    review = serializers.CharField(max_length=255)
    rating = serializers.IntegerField()

    class Meta:
        model = Games
        ordering = 'add_date'
        fields = ('primkey', 'games_text', 'link', 'review', 'rating')

    def create(self, validated_data):
        return Music.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.games_text = validated_data.get('games_text', instance.games_text)
        instance.link = validated_data.get('link', instance.link)
        instance.save()
        return instance
