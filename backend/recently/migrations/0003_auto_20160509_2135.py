# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('recently', '0002_games'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='games',
            options={'ordering': ('add_date',)},
        ),
        migrations.AlterModelOptions(
            name='music',
            options={'ordering': ('add_date',)},
        ),
    ]
