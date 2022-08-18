from django.shortcuts import render
from django_nextjs.render import render_nextjs_page_sync
from django.http import HttpResponse

# def index(request):
#     return HttpResponse("Hello world!")


def index(request):
    return render_nextjs_page_sync(request)

def sign_in(request):
    return render_nextjs_page_sync(request)

def sign_up(request):
    return render_nextjs_page_sync(request)


