# Generated by Django 3.2 on 2023-11-25 20:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='logo',
            field=models.ImageField(null=True, upload_to='logo/'),
        ),
    ]
