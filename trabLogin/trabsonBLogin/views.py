from rest_framework import viewsets
from trabsonBLogin.models import Pessoas
from trabsonBLogin.serializer import PessoasSerializer
from rest_framework.response import Response

class PessoasViewSet(viewsets.ModelViewSet):
    queryset = Pessoas.objects.all()
    serializer_class = PessoasSerializer
        
    def list(self, request):
        self.queryset = Pessoas.objects.all()
        serializer = PessoasSerializer(self.queryset, many=True)
        return Response(serializer.data)
    
    def delete(self, request, id=None):
        pessoas = Pessoas.objects.filter(id=id)
        pessoas.delete()
        return Response(pessoas.data)