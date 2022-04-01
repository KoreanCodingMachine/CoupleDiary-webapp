from rest_framework import viewsets

from .models import *
from .serializers import *

class CardViewSet(viewsets.ModelViewSet):

    queryset = Card.objects.all()
    serializer_class = CardSerializer