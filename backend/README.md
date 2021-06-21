# React & Flask app - backend

## Table of Contents

- [Setup](#setup)
- [Quickstart](#quickstart)
- [Serving static HTML](#serving-static-html)

## Setup

1. Create an environment

```bash
python3 -m venv venv
```

2. Activate the environment

```bash
. venv/bin/activate
```

3. Install Flask

```bash
pip install Flask
```

## Quickstart

1. Create `app.py` with the following contents:

```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
  return "<p>Hello, World!</p>"
```

2. Run the app

```bash
$ export FLASK_APP=app
$ flask run
```

## Serving static HTML

1. Add `index.html` with the following contents:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Test App</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
```

2. Update `app.py` to set the `static_url_path` and use `send_from_directory`:

```python
from flask import Flask, send_from_directory

app = Flask(__name__, static_url_path='/static')

@app.route("/")
def index():
  return send_from_directory('', 'index.html')
```
