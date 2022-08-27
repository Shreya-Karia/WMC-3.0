# from django_nextjs.render import render_nextjs_page_sync
import json
from django.shortcuts import render
from django_nextjs.render import render_nextjs_page_sync
from django.http import HttpResponse
from eventportal.models import newUser
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
import json
from django.http import JsonResponse
from django.db.models import Q

# def index(request):
#     return HttpResponse("Hello world!")

# class UserViewSet(viewsets.ModelViewSet)


@csrf_exempt
@api_view(['GET', 'POST', 'DELETE'])
def saveUser(request):
    if request.method == 'POST':
        data_to_add = newUser(
            username = request.data["username"],
            email = request.data["email"],
            password = request.data["password"]
        )
        data_to_add.save()
    return HttpResponse('success')

@api_view(['GET', 'POST', 'DELETE'])
def printUser(request):
    message = ""
    
    if request.method == 'GET':
        criterion1 = Q(email =  request.data["email"]) #any query you want
        criterion2 = Q(password = request.data["password"]) #any query you want
        isalready = newUser.objects.filter(criterion1 & criterion2 ).values()
        values = list(isalready)
    
        if(len(values)==0):
            message = "This user is not registered"
            return JsonResponse(message, safe=False)
        else:
            message = "login successful"
            mainpage()
            

    # if request.method == 'GET':
    #     getData = list(newUser.objects.all().values())
    #     print(getData)
    #     getData = json.dumps(getData)
    #     return JsonResponse(getData, safe = False)
            
    

def index(request):
    return render_nextjs_page_sync(request)

def sign_in(request):
    return render_nextjs_page_sync(request)

def mainpage(request):
    return render_nextjs_page_sync(request)

def sign_up(request):
    return render_nextjs_page_sync(request)


