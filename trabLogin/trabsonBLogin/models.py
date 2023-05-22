from django.db import models

# Models == Table

class Pessoas(models.Model):
    nome  = models.CharField(max_length=50)
    cpf   = models.BigIntegerField()
    email = models.EmailField()

    def __srt__(self):
        return self.nome
    
    