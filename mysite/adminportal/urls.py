from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login, name="login"),
    path("log_in", views.log_in, name="log_in"),
    path("sign_up",views.sign_up,name="sign_up"),
    path('newAdmin', (views.newAdmin), name='newAdmin'),
    path('newEvent', views.newEvent, name='newEvent'),
    path('new_event',views.new_event,name='new_event'),


    
]