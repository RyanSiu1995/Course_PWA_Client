from rest_framework import serializers
from courseDetails.models import *


class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class LTNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = LTNote
        fields = '__all__'


class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = '__all__'


class PeopleSerializer(serializers.ModelSerializer):
    class Meta:
        model = People
        fields = '__all__'


class TutorialNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = TutorialNote
        fields = '__all__'
