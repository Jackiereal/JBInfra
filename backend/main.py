from flask import Flask, send_file, send_from_directory
from os import path
from common import getLogger
import json
app = Flask(__name__)

logger = getLogger()
@app.route('/download/<name>')
def downloadFile (name):
    if path.exists(name):
        logger.info(name + " File Downloaded")
        return send_file(name, as_attachment=True)
    else:
        logger.info(name + " File Not Exists")
        return name+" Not Exists"


@app.route('/file/<name>')
def get_file(name):
    if path.exists(name):
        data = open(name, 'r').read()
        return data
    else:
        return name + " Not Exists"

@app.route('/api/health')
def Health():
    value = {
        "Status": "UP",
        "name" : "Serene bay",
        "description" : "some description",
        "features" : [
            'feature - 1',
            'feature - 2',
            'feature - 3',
            'feature - 4',
        ]
    }
    return json.dumps(value)
@app.route('/api/projects')
def projects():
    value = [
        {
            "id":1,
            "name" : "Serene bay",
            "description" : "some description",
            "features" : [
                'feature - 1',
                'feature - 2',
                'feature - 3',
                'feature - 4',
            ]
        },
        {
            "id": 2,
            "name": "Serene Villas",
            "description": "some description",
            "features": [
                'feature - 1',
                'feature - 2',
                'feature - 3',
                'feature - 4',
            ]
        },

    ]
    return json.dumps(value)
@app.route('/api/projects/<id>')
def getprojectbyId():
    value = [
        {
            "id":1,
            "name" : "Serene bay",
            "description" : "some description",
            "features" : [
                'feature - 1',
                'feature - 2',
                'feature - 3',
                'feature - 4',
            ]
        },
        {
            "id": 2,
            "name": "Serene Villas",
            "description": "some description",
            "features": [
                'feature - 1',
                'feature - 2',
                'feature - 3',
                'feature - 4',
            ]
        },
        {
            "id": 3,
            "name": "Serene Resorts",
            "description": "some description",
            "features": [
                'feature - 1',
                'feature - 2',
                'feature - 3',
                'feature - 4',
            ]
        }
    ]
    response = [project for project in value if project["id"] == id]
    print(response)
    return json.dumps(response)
@app.route('/open/<filename>', methods=['GET'])
def open(filename):
    return send_file(filename)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)