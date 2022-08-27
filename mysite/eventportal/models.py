from django.db import models
from django.contrib.auth.models import User

# Create your models here.
from turtle import mode



class newUser(models.Model):
    username = models.CharField(max_length=20)
    email = models.CharField(primary_key = True, max_length=20)
    password = models.CharField(max_length=20)
