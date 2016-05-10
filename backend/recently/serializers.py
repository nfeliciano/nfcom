from rest_framework import serializers
from recently.models import Music, Games

class MusicSerializer(serializers.ModelSerializer):
    primkey = serializers.IntegerField(read_only=True)
    music_text = serializers.CharField(max_length=100)
    add_date = serializers.DateTimeField()
    link = serializers.CharField(max_length=100, default='#')
    review = serializers.CharField(max_length=255)
    rating = serializers.IntegerField()

    class Meta:
        model = Music
        ordering = 'add_date'
        fields = ('primkey', 'music_text', 'add_date', 'link', 'review', 'rating')

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
    add_date = serializers.DateTimeField()
    link = serializers.CharField(max_length=100, default='#')
    review = serializers.CharField(max_length=255)
    rating = serializers.IntegerField()

    class Meta:
        model = Games
        ordering = 'add_date'
        fields = ('primkey', 'games_text', 'add_date', 'link', 'review', 'rating')

    def create(self, validated_data):
        return Music.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.games_text = validated_data.get('games_text', instance.games_text)
        instance.link = validated_data.get('link', instance.link)
        instance.save()
        return instance
