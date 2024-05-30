# crm/serializers.py

from rest_framework import serializers
from . import models

# from .models import Contact, Invoice, InvoiceItem

# class ContactSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Contact
#         fields = '__all__'

# class InvoiceItemSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = InvoiceItem
#         fields = '__all__'

# class InvoiceSerializer(serializers.ModelSerializer):
#     items = InvoiceItemSerializer(many=True)

#     class Meta:
#         model = Invoice
#         fields = '__all__'

#     def create(self, validated_data):
#         items_data = validated_data.pop('items')
#         invoice = Invoice.objects.create(**validated_data)
#         for item_data in items_data:
#             InvoiceItem.objects.create(invoice=invoice, **item_data)
#         return invoice


class crmSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.crm
        fields = '__all__'
