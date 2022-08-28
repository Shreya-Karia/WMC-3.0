# Generated by Django 4.1 on 2022-08-28 08:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='adminUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('organization_name', models.CharField(max_length=30)),
                ('organizer_name', models.CharField(max_length=30)),
                ('email', models.EmailField(max_length=254)),
                ('contact_no', models.IntegerField()),
                ('address', models.CharField(default='null', max_length=200)),
                ('password', models.CharField(max_length=30)),
                ('authorized', models.BooleanField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_name', models.CharField(max_length=30)),
                ('event_photo', models.ImageField(default='', upload_to='')),
                ('stime', models.TimeField()),
                ('etime', models.TimeField()),
                ('date', models.DateField()),
                ('location', models.URLField()),
                ('venue', models.CharField(default='null', max_length=50)),
                ('seats', models.IntegerField()),
                ('description', models.TextField()),
                ('contact_person', models.CharField(max_length=30)),
                ('contact_no', models.IntegerField()),
                ('fees', models.IntegerField()),
                ('last_day', models.DateField()),
            ],
        ),
    ]