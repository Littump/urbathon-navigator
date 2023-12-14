from django.urls import include, path
from rest_framework.routers import DefaultRouter

from api.views import (ChatViewSet, CompanyViewSet, ComplaintViewSet,
                       EventViewSet, HouseViewSet, PostViewSet, ThemeViewSet,
                       ActivityViewSet, LevelViewSet, MessageViewSet,
                       CommentViewSet)

app_name = 'api'

v1_router = DefaultRouter()
v1_router.register(r'companies', CompanyViewSet, basename='companies')
v1_router.register(r'chats', ChatViewSet, basename='chats')
v1_router.register(r'chats/(?P<chat_id>\d+)/messages', MessageViewSet, basename='messages')
v1_router.register(r'houses', HouseViewSet, basename='houses')
v1_router.register(r'themes', ThemeViewSet, basename='themes')
v1_router.register(r'posts', PostViewSet, basename='posts')
v1_router.register(r'posts/(?P<post_id>\d+)/comments', CommentViewSet, basename='comments')
v1_router.register(r'events', EventViewSet, basename='events')
v1_router.register(r'complaints', ComplaintViewSet, basename='complaints')
v1_router.register(r'activities', ActivityViewSet, basename='activities')
v1_router.register(r'levels', LevelViewSet, basename='levels')

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
    path('', include(v1_router.urls)),
]
