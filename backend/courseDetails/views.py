from courseDetails.models import *
from courseDetails.serializers import *

from rest_framework import viewsets, status
from rest_framework.response import Response


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

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            cursor = Notification.objects.create(**serializer.validated_data)
            cursor.save()
            return Response(
                serializer.validated_data, status=status.HTTP_201_CREATED
            )
        return Response({
            'status': 'Bad request',
            'message': 'Account could not be created with received data.'
        }, status=status.HTTP_400_BAD_REQUEST)

class PeopleViewSet(viewsets.ModelViewSet):
    queryset = People.objects.all()
    serializer_class = PeopleSerializer

class TutorialNoteViewSet(viewsets.ModelViewSet):
    queryset = TutorialNote.objects.all()
    serializer_class = TutorialNoteSerializer
