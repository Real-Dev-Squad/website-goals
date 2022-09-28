#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
from django.conf import settings
from django.core.management.commands.runserver import Command as runserver
import os
import sys
import environ

env = environ.Env(
    # set casting, default value
    DJANGO_ENV=(str, 'DEVELOPMENT')
)

# Defining constants
DJANGO_ENV = 'DJANGO_ENV'
PRODUCTION = 'PRODUCTION'
TESTING = 'TESTING'
SETTINGS_PRODUCTION = 'django_jsonapi.settings.production'
SETTINGS_DEVELOPMENT = 'django_jsonapi.settings.development'
SETTINGS_TESTING = 'django_jsonapi.settings.testing'


def main():
    """Run administrative tasks."""

    django_env = env(DJANGO_ENV).upper()

    if (django_env == PRODUCTION):
        os.environ.setdefault('DJANGO_SETTINGS_MODULE',
                              SETTINGS_PRODUCTION)
    elif (django_env == TESTING):
        os.environ.setdefault('DJANGO_SETTINGS_MODULE',
                              SETTINGS_TESTING)
    else:
        os.environ.setdefault('DJANGO_SETTINGS_MODULE',
                              SETTINGS_DEVELOPMENT)

    # Changing DJANGO PORT
    runserver.default_port = settings.__getattr__('PORT')

    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
