from django.contrib.auth import get_user_model
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import (IsAuthenticated,
                                        IsAuthenticatedOrReadOnly)
from rest_framework.generics import get_object_or_404

from api.models import (Chat, Comment, Company, Complaint, Event, House,
                        Message, Post, Theme, Activity, Level)
from api.serializers import (ChatSerializer, CommentSerializer,
                             CompanySerializer, ComplaintSerializer,
                             EventSerializer, HouseSerializer,
                             MessageSerializer, PostSerializer,
                             ThemeSerializer, ActivitySerializer,
                             LevelSerializer)

User = get_user_model()


class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    http_method_names = ['get', 'post']

    def get_queryset(self):
        chat = get_object_or_404(Chat, id=self.kwargs.get('chat_id'))
        return chat.messages.all()

    def perform_create(self, serializer):
        chat = get_object_or_404(Chat, id=self.kwargs.get('chat_id'))
        serializer.save(author=self.request.user, chat=chat)

    @action(detail=True, methods=['post'])
    def read_message(self, request, pk=None):
        chat = self.get_object()
        message_id = request.data.get('message_id')
        try:
            message = Message.objects.get(id=message_id, chat=chat)
            message.users_read.add(request.user)
        finally:
            return Response(status=status.HTTP_200_OK)


class ActivityViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer


class LevelViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Level.objects.all()
    serializer_class = LevelSerializer


class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    http_method_names = ['get', 'post', 'patch']

    @action(detail=True, methods=['post'])
    def get_or_create_chat(self, request, pk=None):
        company = self.get_object()
        user = request.user
        chats = (
            Chat.objects
            .filter(
                users__id__exact=user.pk,
            )
            .filter(
                users__id__exact=company.account.pk,
            )
        )
        if len(chats) > 0:
            chat = chats[0]
        else:
            chat = Chat.objects.create(name=company.name)
            chat.users.add(user)
            chat.users.add(company.account)
            chat.save()
        return Response({"chat_id": chat.pk})


class ChatViewSet(viewsets.ModelViewSet):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer
    permission_classes = (IsAuthenticated, )
    http_method_names = ['get', 'post']

    def get_queryset(self):
        user = self.request.user
        return Chat.objects.filter(users=user)

    @action(detail=True, methods=['post'])
    def join(self, request, pk=None):
        chat = self.get_object()
        user = request.user

        if user not in chat.users.all():
            chat.users.add(user)
        return Response(status=status.HTTP_200_OK)

    @action(detail=True, methods=['post'])
    def leave(self, request, pk=None):
        chat = self.get_object()
        user = request.user

        if user in chat.users.all():
            chat.users.remove(user)
        return Response(status=status.HTTP_200_OK)


class HouseViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = House.objects.all()
    serializer_class = HouseSerializer


class ThemeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Theme.objects.all()
    serializer_class = ThemeSerializer
    pagination_class = None


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, )
    http_method_names = ['get', 'post']

    def get_queryset(self):
        queryset = self.queryset
        params = self.request.query_params.get('theme', None)

        if params:
            themes = params.split(',')
            queryset = queryset.filter(theme__name__in=themes)

        return queryset

    def perform_create(self, serializer):
        serializer.save(company=self.request.user.company)


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    http_method_names = ['get', 'post']

    def get_queryset(self):
        post = get_object_or_404(Post, id=self.kwargs.get('post_id'))
        return post.comments.all()

    def perform_create(self, serializer):
        post = get_object_or_404(Post, id=self.kwargs.get('post_id'))
        serializer.save(author=self.request.user, post=post)


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, )
    http_method_names = ['get', 'post']

    def perform_create(self, serializer):
        serializer.save(company=self.request.user.company)

    @action(detail=True, methods=['post'])
    def sign_up(self, request, pk=None):
        event = self.get_object()
        user = request.user

        if user not in event.users_sign_up.all():
            user.events_done.remove(event)
            user.events_skip.remove(event)

            event.users_sign_up.add(user)
        return Response(status=status.HTTP_200_OK)

    @action(detail=True, methods=['post'])
    def participate(self, request, pk=None):
        event = self.get_object()
        user = request.user

        if user in event.users_sign_up.all():
            user.events_done.remove(event)
            user.events_skip.remove(event)

            event.users_done.add(user)
        return Response(status=status.HTTP_200_OK)

    @action(detail=True, methods=['post'])
    def skip(self, request, pk=None):
        event = self.get_object()
        user = request.user

        if user in event.users_sign_up.all():
            user.events_done.remove(event)
            user.events_skip.remove(event)

            event.users_skip.add(user)
        return Response(status=status.HTTP_200_OK)


class ComplaintViewSet(viewsets.ModelViewSet):
    queryset = Complaint.objects.all()
    serializer_class = ComplaintSerializer
    permission_classes = (IsAuthenticated, )
    http_method_names = ['post']
