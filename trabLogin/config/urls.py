
from django.contrib import admin
from django.urls import path, include
from trabsonBLogin.views import PessoasViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'pessoas', PessoasViewSet, basename='/pessoas/')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
