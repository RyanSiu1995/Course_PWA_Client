from django.db import models

class People(models.Model):
    class Meta:
        db_table = "course_info"