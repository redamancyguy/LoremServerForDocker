# Generated by Django 3.2.4 on 2021-06-25 09:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(default=None, max_length=32, unique=True)),
                ('password', models.CharField(default=None, max_length=128)),
                ('phone', models.CharField(default=None, max_length=16)),
                ('email', models.CharField(default=None, max_length=20, unique=True)),
                ('emailCode', models.CharField(default=None, max_length=8)),
            ],
        ),
    ]