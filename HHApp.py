import os.path

from flask import Flask, request, Response, jsonify, json
from flask import render_template
from db.models import *
app = Flask(__name__, static_url_path='')


@app.route('/welcome/', methods=['GET'])
def getWelcome():
    print('getWelcome() called!')
    return render_template('index.html')

if __name__ == '__main__':
    if not is_db_initialized():
        create_tables()

    app.run()
