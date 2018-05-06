from django.db import models

class Assignment(models.Model):
    
    class Meta:
        db_table = "assignment"