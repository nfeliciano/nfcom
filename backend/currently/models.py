from __future__ import unicode_literals

from django.db import models
from django.utils.encoding import python_2_unicode_compatible

# Create your models here.

class Music(models.Model):
    music_text = models.CharField(max_length=100)
    add_date = models.DateTimeField('date added')
    link = models.CharField(max_length=100, default="#")

    def __str__(self):
        return self.music_text

class Games(models.Model):
    games_text = models.CharField(max_length=100)
    add_date = models.DateTimeField('date added')
    link = models.CharField(max_length=100, default="#")

    def __str__(self):
        return self.games_text

#class Books(models.Model):

#class Movies(models.Model):

#class TV Show(models.Model):
