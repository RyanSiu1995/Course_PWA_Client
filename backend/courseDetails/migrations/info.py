from django.db import models

class Course(models.Model):
    courseName = models.TextField()
    courseCode = models.TextField()

    class Meta:
        db_table = "course_info"