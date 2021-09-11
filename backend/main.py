import flask
from flask import Flask, send_file, send_from_directory, render_template, request, jsonify
import os
from common import getLogger
import json
app = Flask(__name__)
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True

logger = getLogger()
@app.route('/download/<name>')
def downloadFile (name):
    if os.path.exists(name):
        logger.info(name + " File Downloaded")
        return send_file(name, as_attachment=True)
    else:
        logger.info(name + " File Not Exists")
        return name+" Not Exists"


@app.route('/file/<name>')
def get_file(name):
    try:
        file_path = "content/"+name+".txt"
        logger.info(file_path)
        if os.path.exists(file_path):
            data = open(file_path, 'r').read()
            return data
        else:
            return " Not Exists"
    except Exception as e:
        return "Not Exists" + str(e)


@app.route('/getfile')
def content():
    filename = request.args['filename']
    file_path = os.getcwd()+"\content"+ "\\"+filename+".txt"
    logger.info(file_path)
    with open(file_path, 'r') as f:
        #template_file = os.getcwd()+"\\templates\\content.html"
        #logger.info(template_file)
        return render_template('content.html', text=f.read())


@app.route('/aboutus_html')
def aboutus_html():
    f = open('content/indexcontent.json')
    data = json.load(f)
    return render_template('content.html', text=data)

@app.route('/aboutus_json')
def aboutus_json():
    f = open('content/indexcontent.json')
    data = json.load(f)
    return data

@app.route('/api/health')
def Health():
    value = {
        "Status": "UP"
    }
    return json.dumps(value)
@app.route('/open/<filename>', methods=['GET'])
def openfile(filename):
    return send_file(filename)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)