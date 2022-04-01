from django.urls import path, include

from rest_framework.routers import DefaultRouter

from card import views

router = DefaultRouter()

router.register(r'card', views.CardViewSet)


urlpatterns = [
    path('',include(router.urls)),
]