from django.shortcuts import render, redirect
from . import models
from django.contrib.auth.decorators import login_required
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import  authenticate, login

class DesppForm(forms.ModelForm):
     class meta:
          model = models
          fields = (
               'usarname','password'
          )

def calculo(request):
        
        

        
     return render(request, 'sitedesp/calculo.html')

   
def despesa(request):
     
     return render(request, 'sitedesp/despdiaria.html',) 

def loginn(request):
     
        
        if request.method == "POST":
              username=request.POST.get("username")
              password=request.POST.get("password")

              user = authenticate(request, username=username, password=password)
              if user is not None:
                login(request, user)
                return redirect("desp2")

        # Após salvar, você pode redirecionar ou retornar uma resposta
        return render(request, 'sitedesp/login.html')

def registro(request):
        form = UserCreationForm(request.POST or None)
        if request.method == "POST":
            
            if form.is_valid():
                 form.save()
                 return redirect("loginn")
           
                 
        # Após salvar, você pode redirecionar ou retornar uma resposta
        return render(request, 'sitedesp/registro.html', {"form": form})
@login_required
def calcu2(request):
        
  

        # Após salvar, você pode redirecionar ou retornar uma resposta
     return render(request, 'sitedesp/calcu2.html')
@login_required
def desp2(request):
        
  

        # Após salvar, você pode redirecionar ou retornar uma resposta
     return render(request, 'sitedesp/desp2.html')