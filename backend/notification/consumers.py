from channels.generic.websocket import WebsocketConsumer
import json
import sqlite3

class NotificationConsumer(WebsocketConsumer):
    
    def connect(self):
        self.accept()

    def disconnect(self, close_code):
        pass

    def receive(self, text_data):
        try:
            json_decoded = json.loads(text_data)
        except:
            self.send('Cannot decode the data')
            return
        try:
            endpoint = json_decoded['endpoint']
            p256dh = json_decoded['pd256dh']
            auth = json_decoded['auth']
        except:
            self.send('Cannot extract the data')
            return
        conn = sqlite3.connect('db.sqlite3')
        c = conn.cursor()
        c.execute(
            'INSERT INTO notification_token (endpoint, p256dh, auth, last_upload) VALUES (?, ?, ?, datetime())',
            (endpoint, p256dh, auth)
        )
        conn.commit()
        self.send('Server subscribed')