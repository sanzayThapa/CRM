# crm/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContactViewSet, InvoiceViewSet, InvoiceItemViewSet

router = DefaultRouter()
router.register(r'contacts', ContactViewSet)
router.register(r'invoices', InvoiceViewSet)
router.register(r'invoice-items', InvoiceItemViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
