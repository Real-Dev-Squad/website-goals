import binascii
import os
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.utils import timezone


class Token_Custom(models.Model):
    """
    The default authorization token model.
    """
    key = models.CharField(_("Key"), max_length=40)
    userId = models.CharField(primary_key=True, max_length=80)
    created = models.DateTimeField(_("Created"), auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.key:
            self.key = self.generate_key()
        return super().save(*args, **kwargs)

    @classmethod
    def is_invalid(self, createdTime):
        curr_time = timezone.now().timestamp()
        exp_time = createdTime + (60*60*24*30)
        if exp_time > curr_time:
            return False
        return True

    @classmethod
    def generate_key(cls):
        return binascii.hexlify(os.urandom(20)).decode()

    def __str__(self):
        return self.key
