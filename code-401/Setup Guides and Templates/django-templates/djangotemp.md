# Simple django

```
mkdir django-things
python3.11 -m venv .venv
source .venv/bin/activate
pip install django djangorestframework
django-admin startproject snacks_api_permissions_project .
python manage.py startapp things

```
Add app to settings.py, add `BASE_DIR/'templates'` to DIRS
Add urls.py to app
Add templates folder with base.html, home.html

`python manage.py runserver`
Define models, views, serializers, and URLs as needed for your Django app.
$ python manage.py makemigrations snacks
$ python manage.py migrate

Add docker files 
docker 




# create superuser inside container
# docker compose run or exec (if already running to execute) web python manage.py migrate 
# docker compose exec web python manage.py createsuperuser
# docker compose exec web pip install django
# docker compose exec web pip freeze > requirements.txt
# docker compose exec web pip install psycopg2-binary
# docker compose exec web pip freeze > requirements.txt
# docker compose run web pip freeze > requirements.txt

Tailwind

```
python -m pip install django-compressor
npm install -D tailwindcss
npx tailwindcss init
npx tailwindcss -i ./static/src/input.css -o ./static/src/output.css --watch


```

add it to installed apps in `settings.py` as a string 'compressor'
make sure `node_modules` is in .gitignore



inside the app, `tests.py`

from django.urls import reverse
from djano.test import SimpleTestCase

python manage.py test

python manage.py createsuperuser

register your `models.py` into `admin.py`

python manage.py makemigrations
python manage.py migrate


# model admin steps

add to settings

COMPRESS_ROOT = BASE_DIR / 'static'
COMPRESS_ENABLED = True
STATICFILES_FINDERS = ('django.contrib.staticfiles.finders.AppDirectoriesFinder',
    'compressor.finders.CompressorFinder',)








# Permissions/postgres

Certainly! Here's a comprehensive step-by-step guide to building a Django REST Framework (DRF) app with Docker:

### 1. Create a Django Project
1. Set up the project directory.
   ```bash
   mkdir my_drf_project
   cd my_drf_project
   ```

2. Create a virtual environment and activate it.
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate  # For Unix-based systems
   ```

3. Install Django and Django REST Framework.
   ```bash
   pip install django djangorestframework
   ```

4. Create the Django project.
   ```bash
   django-admin startproject my_drf_project .
   ```

### 2. Create a Django App
1. Create a Django app within the project.
   ```bash
   python manage.py startapp my_app
   ```

2. Define models, views, serializers, and URLs as needed for your Django app.

### 3. Make and Apply Migrations
1. Generate database migrations for any changes to your models.
   ```bash
   python manage.py makemigrations
   ```

2. Apply database migrations to create/update the database schema.
   ```bash
   python manage.py migrate
   ```
MAKEMIGRATIONS AND MIGRATE BEFORE ADDING DOCKER THINGS AND CHANGING THE DATABASE IN SETTINGS. Deactiavte env

### 4. Implement Docker
1. Create a Dockerfile in the project root directory.
   - Define the Dockerfile with necessary configurations, including setting up the environment, installing dependencies, and copying the project files.

2. Optionally, create a docker-compose.yml file for managing multiple services (e.g., database).

3. Build the Docker image.
   ```bash
   docker build -t my_drf_app .
   ```

4. Run the Docker container.
   ```bash
   docker run -p 8000:8000 my_drf_app
   ```

5. Access the Django application via `http://localhost:8000`.

6. If needed, connect the Docker container to a database or other services as configured in `docker-compose.yml`.

### Additional Commands (Optional)
- **Create superuser inside container**:
   ```bash
   docker-compose exec web python manage.py createsuperuser
   ```

- **Update requirements.txt**:
   ```bash
   docker-compose exec web pip freeze > requirements.txt
   ```

- **Run migrations inside Docker container**: DO THIS FIRST
   ```bash
   docker-compose exec web python manage.py migrate
   ```

- **Install packages inside Docker container**:
   ```bash
   docker-compose exec web pip install package_name
   ```

1. Build app and project
2. Add all models, urls, views, templates
3. update setting with installed app
4. Add docker files
5. change database in settings from sqlite to db
6. makemigrations and migrate 
7. start docker on desk top
8. Deactivate from venv
9. docker compose up --build
10. create superuser inside container and migrate again
11. pip install psycopg, psycopg-binary, pyscopg2-binary

# create superuser inside container
# docker compose run or exec (if already running to execute) web python manage.py migrate 
# docker compose exec web python manage.py createsuperuser
# docker compose exec web pip install django
# docker compose exec web pip freeze > requirements.txt
# docker compose exec web pip install psycopg2-binary
# docker compose exec web pip freeze > requirements.txt
# docker compose run web pip freeze > requirements.txt