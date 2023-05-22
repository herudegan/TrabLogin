from rest_framework import serializers
from trabsonBLogin.models import Pessoas

class PessoasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pessoas
        fields = ('id','nome','cpf', 'email',)
        
