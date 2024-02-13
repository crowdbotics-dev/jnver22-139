from django.conf import settings
from django.db import models


class Gbcmcm(models.Model):
    "Generated Model"
    vcbdb = models.BigIntegerField()
    reyey = models.BigIntegerField()
    rel_ihjvbf_1_1 = models.OneToOneField(
        "home.Ihjvbf",
        blank=True,
        null=True,
        on_delete=models.CASCADE,
        related_name="gbcmcm_rel_ihjvbf_1_1",
    )


class Ihjvbf(models.Model):
    "Generated Model"
    vcbcc = models.BigIntegerField()
    reyeue = models.BigIntegerField()
