# crm/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from rest_framework import routers

# router = DefaultRouter()
# router.register(r'contacts', ContactViewSet)
# router.register(r'invoices', InvoiceViewSet)
# router.register(r'invoice-items', InvoiceItemViewSet)

# urlpatterns = [
#     path('', include(router.urls)),
# ]
router = routers.DefaultRouter()
router.register('crm', views.crmViewSet, basename='crm')
router.register('vendor', views.VendorViewSet, basename='vendor')


urlpatterns = [
]
urlpatterns += router.urls

