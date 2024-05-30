from django.shortcuts import render

# Create your views here.
# crm/views.py

from rest_framework import viewsets
from . import models
from . import serializers

# class ContactViewSet(viewsets.ModelViewSet):
#     queryset = Contact.objects.all()
#     serializer_class = ContactSerializer

# class InvoiceViewSet(viewsets.ModelViewSet):
#     queryset = Invoice.objects.all()
#     serializer_class = InvoiceSerializer

# class InvoiceItemViewSet(viewsets.ModelViewSet):
#     queryset = InvoiceItem.objects.all()
#     serializer_class = InvoiceItemSerializer



class crmViewSet(viewsets.ModelViewSet):
    queryset = models.crm.objects.all()
    serializer_class = serializers.crmSerializers