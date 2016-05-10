from django.db import models

# Create your models here.
class Music(models.Model):
    music_text = models.CharField(max_length=100)
    add_date = models.DateTimeField(auto_now_add=True)
    link = models.CharField(max_length=100, default="#")
    review = models.CharField(max_length=255)
    rating = models.IntegerField()

    def __str__(self):
        return self.music_text

class Games(models.Model):
    games_text = models.CharField(max_length=100)
    add_date = models.DateTimeField(auto_now_add=True)
    link = models.CharField(max_length=100, default="#")
    review = models.CharField(max_length=255)
    rating = models.IntegerField()
