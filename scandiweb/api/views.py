from django.shortcuts import render
from .models import Product 

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import ProductSerializer

# Create your views here.

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
            'List': 'list-products/',
            'Add': 'add-product/',
            'Update': 'update-product/<str:pk>',
            'Delete': 'update-product/<str:pk>',
            }

    return Response(api_urls)

@api_view(['GET'])
def index(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)

    return Response(serializer.data)

@api_view(['POST'])
def addProduct(request):
    serializer = ProductSerializer(data=request.data)
    if(serializer.is_valid()):
        serializer.save()
        return Response(serializer.data, status=201)
    else:
        print(serializer.errors)
        return Response({'errors': serializer.errors}, status=400)

@api_view(['POST'])
def updateProduct(request, pk):
    product = Product.objects.get(id=pk)
    serializer = ProductSerializer(instance=product, data=request.data)
    if(serializer.is_valid()):
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def deleteProduct(request, pk):
    print(pk)
    product = Product.objects.get(id=pk)
    product.delete()

    return Response("The product was successfully deleted")

