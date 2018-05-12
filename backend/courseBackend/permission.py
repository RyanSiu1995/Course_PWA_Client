from rest_framework import permissions

class CustomPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        # Change the data need to be an admin
        if (request.method == 'POST' or request.method == 'PUT' or request.method == 'DELETE'):
            if request.user and request.user.is_authenticated and request.user.is_superuser:
                return True
            else:
                return False

        # Otherwise, only allow authenticated requests
        return request.user and request.user.is_authenticated