from django.contrib.auth.models import AbstractUser
from django.db import models


class Level(models.Model):
    name = models.CharField(max_length=120)


class Activity(models.Model):
    name = models.CharField(max_length=120)


class EventHistory(models.Model):
    text = models.CharField(max_length=300)
    prize = models.IntegerField()
    date = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-date']


class User(AbstractUser):
    address = models.TextField(max_length=500, null=True, blank=True)
    balance = models.IntegerField(blank=True, default=0)
    logo = models.ImageField(upload_to='logo/', blank=True, null=True)
    id_company = models.IntegerField(blank=True, null=True)
    history = models.ManyToManyField(
        EventHistory,
        related_name='users',
        blank=True,
    )


class Company(models.Model):
    name = models.CharField(max_length=120)
    address = models.TextField(max_length=500)
    time_work = models.CharField(max_length=120, blank=True, null=True)
    phone = models.CharField(max_length=20)
    email = models.CharField(max_length=30)
    url = models.CharField(max_length=30, blank=True, null=True)
    description = models.TextField(max_length=4000, blank=True, null=True)
    logo = models.ImageField(upload_to='logo/')
    rating = models.FloatField(blank=True, default=0)
    password = models.CharField(max_length=30, blank=True, null=True)
    level = models.ForeignKey(
        Level,
        related_name='companies',
        on_delete=models.CASCADE,
    )
    activity = models.ForeignKey(
        Activity,
        related_name='companies',
        on_delete=models.CASCADE,
    )
    account = models.OneToOneField(
        User,
        related_name='company',
        blank=True,
        on_delete=models.CASCADE,
    )


class Chat(models.Model):
    name = models.CharField(max_length=120)
    users = models.ManyToManyField(
        User,
        related_name='chats',
    )


class Message(models.Model):
    author = models.ForeignKey(
        User,
        related_name='messages',
        blank=True,
        on_delete=models.CASCADE,
    )
    chat = models.ForeignKey(
        Chat,
        blank=True,
        related_name='messages',
        on_delete=models.CASCADE,
    )
    text = models.TextField(max_length=2000)
    date = models.DateTimeField(auto_now_add=True)
    users_read = models.ManyToManyField(
        User,
        blank=True,
    )

    class Meta:
        ordering = ['-date']


class House(models.Model):
    address = models.TextField(max_length=500, unique=True)
    chat = models.OneToOneField(
        Chat,
        related_name='house',
        on_delete=models.CASCADE
    )


class Theme(models.Model):
    name = models.CharField(max_length=120, unique=True)


class Image(models.Model):
    image = models.ImageField(upload_to='complaints/')


class Post(models.Model):
    company = models.ForeignKey(
        Company,
        related_name='posts',
        blank=True,
        on_delete=models.CASCADE,
    )
    text = models.TextField(max_length=4000)
    date = models.DateTimeField(auto_now_add=True)
    address = models.TextField(max_length=500, blank=True, null=True)
    theme = models.ForeignKey(
        Theme,
        related_name='posts',
        on_delete=models.CASCADE,
    )
    image = models.ImageField(
        upload_to='posts/',
        blank=True,
        null=True,
    )

    class Meta:
        ordering = ['-date']


class Comment(models.Model):
    post = models.ForeignKey(
        Post,
        related_name='comments',
        on_delete=models.CASCADE,
        blank=True,
    )
    author = models.ForeignKey(
        User,
        blank=True,
        on_delete=models.CASCADE,
    )
    text = models.TextField(max_length=4000)
    date = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-date']


class Event(models.Model):
    company = models.ForeignKey(
        Company,
        related_name='events',
        blank=True,
        on_delete=models.CASCADE,
    )
    text = models.TextField(max_length=4000)
    date = models.DateTimeField(auto_now_add=True)
    address = models.TextField(max_length=500, blank=True, null=True)
    prize = models.IntegerField()
    users_sign_up = models.ManyToManyField(
        User,
        related_name='events_sign_up',
        blank=True,
    )
    users_done = models.ManyToManyField(
        User,
        related_name='events_done',
        blank=True,
    )
    users_skip = models.ManyToManyField(
        User,
        related_name='events_skip',
        blank=True,
    )
    image = models.ImageField(upload_to='events/')

    class Meta:
        ordering = ['-date']


class Complaint(models.Model):
    author = models.ForeignKey(
        User,
        blank=True,
        on_delete=models.CASCADE,
    )
    text = models.TextField(max_length=4000)
    images = models.ManyToManyField(
        Image,
        blank=True,
    )


class Point(models.Model):
    company = models.ForeignKey(
        Company,
        related_name='points',
        null=True,
        blank=True,
        on_delete=models.CASCADE,
    )
    kod = models.IntegerField(blank=True, null=True)
    address = models.TextField(max_length=500, blank=True)
    city = models.TextField(max_length=500, blank=True)
    lat = models.FloatField(blank=True)
    lon = models.FloatField(blank=True)
    name = models.CharField(max_length=120)
    district = models.TextField(max_length=500, blank=True)