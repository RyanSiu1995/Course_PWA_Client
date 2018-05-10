from rest_framework import serializers
from notification.models import *

class NotificationSubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = NotificationSubscription
        fields = '__all__'
