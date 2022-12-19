from django.urls import include, path
from rest_framework import routers
from goals import views as goal_views


router = routers.DefaultRouter()
router.register(r'goal', goal_views.GoalViewSet)
router.register(r'usergoal', goal_views.UserGoalViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path("authToken/", include('authCustom.urls')),
]
