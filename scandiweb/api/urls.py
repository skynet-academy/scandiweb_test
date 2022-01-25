from django.contrib import admin
from django.urls import path, include

from . import views

app_name = 'api'

urlpatterns = [
    path('', views.apiOverview, name="api-overview"),
    path('list-products/', views.index, name="index"),
    path('add-product/', views.addProduct, name="add-product" ),
    path('update-product/<str:pk>', views.updateProduct, name="update-product" ),
    path('delete-product/<str:pk>', views.deleteProduct, name="delete-product" ),
]
