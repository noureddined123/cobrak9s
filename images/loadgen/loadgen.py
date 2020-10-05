import requests, random, time


url = "http://service1:5000"
url2 = "http://service3:8080"


while True:
    try:
        print requests.get(url)
        print requests.get(url2)

    except Exception as e:
        print e


    time.sleep(random.randint(0, 5))