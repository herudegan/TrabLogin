from django.contrib import admin
from trabsonBLogin.models import Pessoas

class Pessoa(admin.ModelAdmin):
    list_display = ('id', 'nome', 'cpf', 'email')
    list_display_links = ('id', 'nome')
    search_fields = ('nome', 'cpf',)
    
admin.site.register(Pessoas, Pessoa)