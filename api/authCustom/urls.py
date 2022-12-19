from django.urls import path
from .views import goal_auth_token, Authenticated

urlpatterns = [
    path('get_token/<str:userId>', goal_auth_token),
    path('auth', Authenticated),
]
