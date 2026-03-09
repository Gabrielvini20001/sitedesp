from django.contrib import admin

from . import models


@admin.register(models.Despp)
class DesppAdmin(admin.ModelAdmin):
    ...