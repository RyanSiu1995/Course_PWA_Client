from django.shortcuts import render
from notification.models import *
from notification.serializers import *

# Create your views here.
class NotificationSubscriptionView(viewsets.ModelViewSet):
    queryset = NotificationSubscription.objects.all()
    serializer_class = NotificationSubscriptionSerializer