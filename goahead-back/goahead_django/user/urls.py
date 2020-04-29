from django.urls import path
from .views import UserCreateView, UserDetail, logout
from rest_framework_jwt.views import obtain_jwt_token
urlpatterns = [
    path('login/',obtain_jwt_token),
    path('logout/',logout),
    path('users',UserCreateView.as_view()),
    path(r'users/<int:pk>', UserDetail.as_view())
    ]