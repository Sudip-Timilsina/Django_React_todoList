
from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from todo import views

routers = routers.DefaultRouter()
routers.register(r'todos',views.TodoItemViewSet,basename='todo')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(routers.urls)),
]
