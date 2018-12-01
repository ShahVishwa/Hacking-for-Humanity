import os.path
from peewee import *
from flask import Flask, request, Response, jsonify, json
from flask import render_template
app = Flask(__name__, static_url_path='')

DATABASE = 'data\practice_database.db'
database = SqliteDatabase(DATABASE)

class BaseModel(Model):
    class Meta:
        database = database

class BaseUser(BaseModel):
    username = CharField(unique=True)
    password = CharField()
    firstname = CharField()
    lastname = CharField()

class Employer(BaseUser):
    companyname = CharField()

def is_db_initialized():
    return os.path.isfile(DATABASE)

def create_tables():
    database.connect()
    try:
        database.create_tables([Employer], True)
    except:
        raise
    finally:
        database.close()
    
def drop_tables():
    database.connect()
    database.drop_tables([Employer])
    database.close()
    
@app.route('/welcome/', methods=['GET'])
def getWelcome():
    print('getWelcome() called!')
    return render_template('index.html')

if __name__ == '__main__':
    if not is_db_initialized():
        create_tables()
    
    app.run()