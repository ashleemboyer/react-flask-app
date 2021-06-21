from flask import Flask, jsonify, send_from_directory
import time

app = Flask(__name__, static_url_path='/static')

@app.route('/')
def index():
  return send_from_directory('', 'index.html')

@app.route('/api/currentTime')
def currentTime():
  return jsonify({ 'currentTime': round(time.time() * 1000) })
