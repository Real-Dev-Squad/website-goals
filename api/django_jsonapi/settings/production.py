from .base import *

# Over writing settings from base with production settings

SECRET_KEY = env('SECRET_KEY')

PORT = env('PORT')

DEBUG = True

ALLOWED_HOSTS = ['.realdevsquad.com']

DATABASES = {
    'default': {
        'ENGINE': env('DB_ENGINE', default='django.db.backends.sqlite3'),
        'NAME': env('DB_NAME', default=BASE_DIR / 'db.sqlite3'),
    }
}
