# Generated by Django 4.0.1 on 2022-01-24 21:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_product_product_details'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='product_details',
            field=models.CharField(max_length=200),
        ),
    ]
