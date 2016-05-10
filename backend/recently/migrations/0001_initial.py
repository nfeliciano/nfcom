# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Music',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('music_text', models.CharField(max_length=100)),
                ('add_date', models.DateTimeField(auto_now_add=True)),
                ('link', models.CharField(default=b'#', max_length=100)),
                ('review', models.CharField(max_length=255)),
                ('rating', models.IntegerField()),
            ],
        ),
    ]
