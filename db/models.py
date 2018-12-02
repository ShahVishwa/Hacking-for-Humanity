import os.path

from peewee import *

DATABASE = 'data\practice_database.db'
database = SqliteDatabase(DATABASE)

def is_db_initialized():
    return os.path.isfile(DATABASE)

def drop_tables():
    database.connect()
    database.drop_tables([Employer])
    database.close()

class BaseModel(Model):
    class Meta:
        database = database

class User(BaseModel):
    login = CharField(unique=True)
    password = CharField()
    role = IntegerField()

class JobSeeker(BaseModel):
    user_id = ForeignKeyField(User, backref='jobseekers')
    name = CharField()
    bio = TextField()
    objective = TextField()
    work_experience = TextField()

class Employer(BaseModel):
    user_id = ForeignKeyField(User, backref='employers')
    companyname = CharField()

class Volunteer(BaseModel):
    user_id = ForeignKeyField(User, backref='volunteers')
    name = CharField()
    bio = TextField()

class JobCategory(BaseModel):
    category = CharField()

class Job(BaseModel):
    employer_id = ForeignKeyField(Employer, backref='jobs')
    category_id = ForeignKeyField(JobCategory, backref='jobs')
    title = CharField()
    description = TextField()

class ApplicationStatus(BaseModel):
    status_name = CharField()

class JobApplied(BaseModel):
    job_seeker_id = ForeignKeyField(JobSeeker)
    job_id = ForeignKeyField(Job)
    status_id = ForeignKeyField(ApplicationStatus)

class Service(BaseModel):
    service_name = CharField(unique=True)

class VolunteerServices(BaseModel):
    volunteer_id = ForeignKeyField(Volunteer, backref='volunteers')
    service_id = ForeignKeyField(Service, backref='services')

class JobSeekerServices(BaseModel):
    job_seeker_id = ForeignKeyField(JobSeeker, backref='jobseekers')
    service_id = ForeignKeyField(Service, backref='services_needed')

class Skill(BaseModel):
    skill_name = CharField(unique=True)

class JobSkill(BaseModel):
    job_id = ForeignKeyField(Job, backref='jobs');
    skill_id = ForeignKeyField(Skill, backref='skills')

class JobSeekerSkill(BaseModel):
    job_seeker_id = ForeignKeyField(JobSeeker, backref="jobseekers")
    skill_id = ForeignKeyField(Skill, backref="skills")

class Message(BaseModel):
    user_from = ForeignKeyField(User)
    user_to = ForeignKeyField(User)
    message = TextField()
    timestamp = DateTimeField()


def create_tables():
    database.connect()
    try:
        database.create_tables([User, JobSeeker, Employer, Volunteer, JobCategory, Job, ApplicationStatus, JobApplied, Service, VolunteerServices, JobSeekerServices, Skill, JobSkill, JobSeekerSkill, Message])
    except:
        raise
    finally:
        database.close()
