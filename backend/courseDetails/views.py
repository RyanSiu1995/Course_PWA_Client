from courseDetails.models import *
from courseDetails.serializers import *

from rest_framework import viewsets

# Create your views here.
class AssignmentViewSet(viewsets.ModelViewSet):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class LTNoteViewSet(viewsets.ModelViewSet):
    queryset = LTNote.objects.all()
    serializer_class = LTNoteSerializer

class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer

class PeopleViewSet(viewsets.ModelViewSet):
    queryset = People.objects.all()
    serializer_class = PeopleSerializer

class TutorialNoteViewSet(viewsets.ModelViewSet):
    queryset = TutorialNote.objects.all()
    serializer_class = TutorialNoteSerializer
