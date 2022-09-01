import imp
import json
from math import ceil
from django.shortcuts import render, redirect
from django_nextjs.render import render_nextjs_page_sync
from django.http import HttpResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User, auth
from adminportal.models import event, adminUser
# from rest_framework.decorators import api_view
from django.http import JsonResponse
from math import ceil
from django.db.models import Q
# Create your views here.


@csrf_exempt
# @api_view(['GET', 'POST', 'DELETE'])
def newAdmin(request):
    if request.method == 'POST':
        
        organization_name = request.POST["organization_name"]
        organizer_name = request.POST['organizer_name']
        email = request.POST['email']
        contact_no = request.POST['contact_no']
        address = request.POST['address']
        password = request.POST['password']
        authorized = False

        user = User.objects.create_user(password = password, username = email)
        user.save()
        user_model = adminUser(organization_name = organization_name, 
                                organizer_name = organizer_name, 
                                contact_no = contact_no, 
                                address = address, 
                                email = email, 
                                password = password,
                                authorized = authorized).save()
        return redirect('login')

    else:
        return redirect('sign_up')


@csrf_exempt
# @api_view(['GET', 'POST', 'DELETE'])
def newEvent(request):
    if request.method == 'POST':
        
        # username = username.POST["username"]
        event_name = request.POST["event_name"]
        event_photo = request.POST['event_photo']
        stime = request.POST['stime']
        etime = request.POST['etime']
        date = request.POST['date']
        location = request.POST['location']
        venue = request.POST['venue']
        seats = request.POST['seats']
        description = request.POST['description']
        contact_person = request.POST['contact_person']
        contact_no = request.POST['contact_no']
        fees = request.POST['fees']
        last_day = request.POST['last_day']

        user_model = event(     event_name = event_name, 
                                event_photo = event_photo, 
                                stime = stime, 
                                etime = etime, 
                                date = date, 
                                location = location,
                                venue = venue,
                                seats = seats,
                                description = description,
                                contact_person = contact_person,
                                contact_no = contact_no,
                                fees = fees,
                                last_day = last_day ).save()
        return redirect('new_event')
    else:
        return redirect('new_event')


@csrf_exempt
def showEvent(request, id):
    if request.method == 'GET':
        criterion1 = Q(id=id) #any query you want
        getData = event.objects.filter(criterion1).values()
        print(getData)
    return HttpResponse('success')

        # return JsonResponse(event_name, safe=False)
        # getData = list(event.objects.filter((Q(event_name = event_name))).values())
        # # getData = list(files.objects.filter(Q(userid = userId)).values())
        # # getData = list(files.objects.all().values())
        # print(getData)
        # getData = json.dumps(getData)
        # return JsonResponse(getData, safe=False)

# @csrf_exempt
# def showEvent(request):
#     if request.method == "GET":
#         getData = list(event.objects.all().values())
#         print(getData)
#         return HttpResponse('success')
        # getdata = json.dumps(getData)
        # return JsonResponse(getdata, safe=False)






def sign_up(request):
    return render_nextjs_page_sync(request)


def login(request):
    return render_nextjs_page_sync(request)

def new_event(request):
    return render_nextjs_page_sync(request)

def index(request):
    return render_nextjs_page_sync(request)


@csrf_exempt
def log_in(request):
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
            return redirect('login')
    else:
        return redirect('login')