from django.urls import include, path
from rest_framework import routers
from goals import views

router = routers.DefaultRouter()
router.register(r'goal', views.GoalViewSet)
router.register(r'usergoal', views.UserGoalViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
