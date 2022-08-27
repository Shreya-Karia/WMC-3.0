from turtle import mode
from django.db import models


class newUser(models.Model):
    username = models.CharField(max_length=20)
    email = models.CharField(primary_key = True, max_length=20)
    password = models.CharField(max_length=20)
    

# Create your models here.
