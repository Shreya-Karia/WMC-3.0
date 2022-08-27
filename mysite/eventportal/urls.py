from django.urls import path
from . import views
urlpatterns = [
    path("", views.index, name="index"),
    path("sign_in", views.sign_in, name="sign_in"),
    path("sign_up",views.sign_up,name="sign_up"),
    path('register', (views.register), name='register'),
    path('login', views.login, name='login'),
]