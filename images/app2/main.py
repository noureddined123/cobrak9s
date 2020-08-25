from flask import Flask, request
import requests
import json

app = Flask(__name__)


@app.route('/', methods=["GET"])
def main():
    return "app2"


app.run(port=5001, host="0.0.0.0")