from django.db import models

# Create your models here.

class Card(models.Model):
    title = models.CharField(max_length = 256, default = "null")
    text = models.CharField(max_length = 256, default = "null")