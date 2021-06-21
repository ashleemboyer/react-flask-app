from flask import Flask, send_from_directory

app = Flask(__name__, static_url_path='/static')

@app.route("/")
def index():
  return send_from_directory('', 'index.html')
