from django.db import models
from email.policy import default

# Create your models here.
class adminUser(models.Model):
    organization_name = models.CharField(max_length=30)
    organizer_name = models.CharField(max_length=30)
    email = models.EmailField()
    contact_no = models.IntegerField()
    address = models.CharField(max_length=200,default="null")
    password = models.CharField(max_length=30)
    authorized = models.BooleanField(default=0)

    def str(self):
        return (self.organizer_name)

class event(models.Model):
    event_name = models.CharField(max_length=30)
    event_photo = models.ImageField(default="")
    stime = models.TimeField()
    etime = models.TimeField()
    date = models.DateField()
    location = models.URLField()
    venue = models.CharField(max_length=50,default="null")
    seats = models.IntegerField()
    description = models.TextField()
    contact_person = models.CharField(max_length=30)
    contact_no = models.IntegerField()
    fees = models.IntegerField()
    last_day = models.DateField()

    def str(self):
        return (self.event_name)
# Create your models here.
