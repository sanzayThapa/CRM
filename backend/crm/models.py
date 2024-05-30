# crm/models.py

from django.db import models

# class Contact(models.Model):
#     first_name = models.CharField(max_length=100)
#     last_name = models.CharField(max_length=100)
#     email = models.EmailField(unique=True)
#     phone = models.CharField(max_length=15, blank=True, null=True)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)

#     def __str__(self):
#         return f'{self.first_name} {self.last_name}'

# class Invoice(models.Model):
#     contact = models.ForeignKey(Contact, on_delete=models.CASCADE)
#     date = models.DateField(auto_now_add=True)
#     due_date = models.DateField()
#     total_amount = models.DecimalField(max_digits=10, decimal_places=2)
#     status = models.CharField(max_length=50, default='Pending')

#     def __str__(self):
#         return f'Invoice {self.id} for {self.contact}'

# class InvoiceItem(models.Model):
#     invoice = models.ForeignKey(Invoice, related_name='items', on_delete=models.CASCADE)
#     description = models.CharField(max_length=255)
#     quantity = models.PositiveIntegerField()
#     unit_price = models.DecimalField(max_digits=10, decimal_places=2)

#     def __str__(self):
#         return f'Item {self.description} for {self.invoice}'

class crm(models.Model):
    body = models.CharField(max_length=300)
    completed = models.BooleanField(default=False)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.body


from django.db import models

class Vendor(models.Model):
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('inactive', 'Inactive'),
        ('pending', 'Pending'),
    ]

    name = models.CharField(max_length=255)
    website = models.URLField(max_length=200, blank=True, null=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='active')
    link = models.URLField(max_length=200, blank=True, null=True)
    documents = models.URLField(max_length=200, blank=True, null=True)
    point_of_contact = models.CharField(max_length=255)
    contract_end = models.DateField(null=True, blank=True)
    contract = models.FileField(upload_to='contracts/', blank=True, null=True)
    service_type = models.CharField(max_length=255)
    last_maintained = models.DateField(null=True, blank=True)
    remarks = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name