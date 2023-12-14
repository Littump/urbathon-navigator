from django.contrib import admin
from api.models import (Chat, Comment, Company, Complaint, Event, House,
                        Message, Post, Theme, Activity, Level, User,
                        EventHistory, Point, Image)


@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    ...


@admin.register(EventHistory)
class EventHistoryAdmin(admin.ModelAdmin):
    ...


@admin.register(Chat)
class ChatAdmin(admin.ModelAdmin):
    ...


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    ...


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    ...


@admin.register(Complaint)
class ComplaintAdmin(admin.ModelAdmin):
    ...


@admin.register(House)
class HouseAdmin(admin.ModelAdmin):
    ...


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    ...


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    ...


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    ...


@admin.register(Theme)
class ThemeAdmin(admin.ModelAdmin):
    ...


@admin.register(Activity)
class ActivityAdmin(admin.ModelAdmin):
    ...


@admin.register(Level)
class LevelAdmin(admin.ModelAdmin):
    ...


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    ...


@admin.register(Point)
class PointAdmin(admin.ModelAdmin):
    ...