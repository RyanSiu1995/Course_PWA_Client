from django.db import models

class TutorialNote(models.Model):

    class Meta:
        db_table = "tutorial_note"