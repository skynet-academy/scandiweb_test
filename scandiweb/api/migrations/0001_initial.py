# Generated by Django 4.0.1 on 2022-01-24 20:08

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('sku', models.CharField(max_length=200, unique=True)),
                ('name', models.CharField(max_length=200)),
                ('price', models.IntegerField()),
                ('product_details', models.CharField(max_length=200)),
            ],
        ),
    ]
