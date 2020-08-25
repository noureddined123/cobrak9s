import requests, random, time


url = "http://service1:5000"


while True:
    try:
        print requests.get(url)

    except Exception as e:
        print e


    time.sleep(random.randint(0, 5))