from flask import Flask
import requests, time

app = Flask(__name__)


def art_sleep():
    time.sleep(5)

@app.route('/', methods=["GET"])
def main():
    urlapp2 = "http://service2:5001"
    data = requests.get(urlapp2)

    art_sleep()

    return data.content



app.run(host="0.0.0.0")
