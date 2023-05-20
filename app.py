#!/usr/bin/env python3
from flask import Flask, render_template
import psutil

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    process = psutil.Process()
    print(f'Initial memory usage: {process.memory_info().rss / 1024 / 1024} MB')
    app.run(debug=True)
