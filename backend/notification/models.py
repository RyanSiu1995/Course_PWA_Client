from django.db import models

# Create your models here.
class NotificationSubscription(models.Model):
    endpoint = models.TextField()
    p256dh = models.TextField()
    auth = models.TextField()
    last_upload = models.DateField(auto_now_add = True)
    
    class Meta:
        db_table = "notification_token"