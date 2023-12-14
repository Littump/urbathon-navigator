from rest_framework import serializers
from django.utils.text import slugify
from djoser.serializers import UserSerializer

from api.models import (Chat, Comment, Company, Complaint, Event, House,
                        Message, Post, Theme, Activity, Level, User,
                        EventHistory)


class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = '__all__'


class LevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Level
        fields = '__all__'


class CompanySerializer(serializers.ModelSerializer):
    level = LevelSerializer(read_only=True)
    activity = ActivitySerializer(read_only=True)

    def create(self, validated_data):
        name = validated_data['name']
        password = User.objects.make_random_password()
        user = User.objects.create(
            username=slugify(name),
            password=password,
        )
        company = Company.objects.create(
            account=user,
            password=password,
            **validated_data
        )
        user.id_company = company.pk
        user.save()
        return company

    class Meta:
        model = Company
        fields = '__all__'


class EventHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = EventHistory
        fields = '__all__'


class UserCustomSerializer(UserSerializer):
    history = EventHistorySerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'address', 'balance',
                  'history', 'first_name', 'last_name', 'logo', 'id_company']


class ChatSerializer(serializers.ModelSerializer):
    users = UserCustomSerializer(many=True, read_only=True)

    class Meta:
        model = Chat
        fields = '__all__'


class MessageSerializer(serializers.ModelSerializer):
    author = UserCustomSerializer(read_only=True)

    class Meta:
        model = Message
        fields = '__all__'


class HouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = House
        fields = '__all__'


class ThemeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Theme
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):
    company = CompanySerializer(read_only=True)
    theme = ThemeSerializer(read_only=True)

    class Meta:
        model = Post
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    author = UserCustomSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = '__all__'


class EventSerializer(serializers.ModelSerializer):
    company = CompanySerializer(read_only=True)

    class Meta:
        model = Event
        fields = '__all__'


class ComplaintSerializer(serializers.ModelSerializer):
    class Meta:
        model = Complaint
        fields = '__all__'
