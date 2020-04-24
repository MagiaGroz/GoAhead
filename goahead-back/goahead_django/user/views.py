from django.contrib.auth.models import User
from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import UserSerializer


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

@api_view(['POST'])
def logout(request):
    request.auth.delete()
    return Response(status=status.HTTP_200_OK)
