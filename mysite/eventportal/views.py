from django.shortcuts import render, redirect
from django_nextjs.render import render_nextjs_page_sync
from django.http import HttpResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User, auth
from eventportal.models import newUser

# def index(request):
#     return HttpResponse("Hello world!")


def index(request):
    return render_nextjs_page_sync(request)

def sign_in(request):
    return render_nextjs_page_sync(request)


def sign_up(request):
    return render_nextjs_page_sync(request)


@csrf_exempt
def register(request):
    if request.method == 'POST':

        name = request.POST['name']
        email = request.POST['email']
        password = request.POST['password']
        password2 = request.POST['password2']

        user = User.objects.create_user(username = email, password = password2, email = email)
        user.save()
        user_model = newUser(username=name, email= email, password=password2).save()
        print("Before User Created")

        print("User Created")
        return redirect('sign_in')

    else:
        return redirect('sign_up')
    
    

@csrf_exempt
def login(request):
    if request.method == 'POST':
        username = request.POST['email']
        # email = request.POST['email']
        password = request.POST['password']

        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user)
            flag = 1
            # print("flag at login is: ",flag)
            return redirect('index')
        else:
            # messages.info(request, 'Credentials Invalid')
            return redirect('sign_in')
    else:
        return redirect('sign_in')