from django.db import models
import uuid
# Create your models here.

class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    sku =  models.CharField(unique=True, max_length=200, null=False, blank=False)
    name = models.CharField(max_length=200, null=False, blank=False)
    price = models.IntegerField(null=False, blank=False)
    #product_details = models.JSONField(default=dict)
    product_details = models.CharField(max_length=200, null=False, blank=False)

    def __str__(self):
        return self.sku

