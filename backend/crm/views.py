from django.shortcuts import render

# Create your views here.
# crm/views.py

from rest_framework import viewsets
from .models import Contact, Invoice, InvoiceItem
from .serializers import ContactSerializer, InvoiceSerializer, InvoiceItemSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

class InvoiceViewSet(viewsets.ModelViewSet):
    queryset = Invoice.objects.all()
    serializer_class = InvoiceSerializer

class InvoiceItemViewSet(viewsets.ModelViewSet):
    queryset = InvoiceItem.objects.all()
    serializer_class = InvoiceItemSerializer
