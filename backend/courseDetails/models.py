from django.db import models

# Create your models here.

# The assignment data
class Assignment(models.Model):
    name = models.TextField()
    submissionDate = models.DateField()
    upload = models.FileField(upload_to = 'assignment/')
    last_upload = models.DateField(auto_now = True)
    
    class Meta:
        db_table = "assignment"

# The course infomation
class Course(models.Model):
    courseName = models.TextField()
    courseCode = models.TextField()
    description = models.TextField()
    assessment = models.TextField()

    class Meta:
        db_table = "course_info"

class LTNote(models.Model):
    name = models.TextField()
    date = models.DateField()
    upload = models.FileField(upload_to = 'ltNote/')
    last_upload = models.DateField(auto_now = True)

    class Meta:
        db_table = "lt_note"

class Notification(models.Model):
    message = models.TextField()
    created = models.DateField(auto_now_add = True)

    class Meta:
        db_table = "notification"

class People(models.Model):
    name = models.TextField()
    email = models.TextField()
    phone = models.TextField()
    location = models.TextField()
    lecturer = models.IntegerField()
    extra = models.TextField()

    class Meta:
        db_table = "teaching_staff"

class TutorialNote(models.Model):
    name = models.TextField()
    date = models.DateField()
    upload = models.FileField(upload_to = 'tutorialNote/')
    last_upload = models.DateField(auto_now = True)
    
    class Meta:
        db_table = "tutorial_note"