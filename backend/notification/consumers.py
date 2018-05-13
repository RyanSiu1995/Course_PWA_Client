from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync
import json
import sqlite3

class NotificationConsumer(WebsocketConsumer):
    # Broadcase group
    groups = ['broadcast']

    def connect(self):
        self.accept()

    def disconnect(self, close_code):
        pass

    def chat_message(self, event):
        notification = event['message']
        conn = sqlite3.connect('db.sqlite3')
        c = conn.cursor()
        for item in c.execute('SELECT endpoint, p256dh, auth FROM notification_token'):
            subscription = {
                'endpoint': item[0],
                'p256dh': item[1],
                'auth': item[2],
                'notification': notification,
                'push': 1
            }
            self.send(text_data=json.dumps(subscription))

    def receive(self, text_data):
        try:
            json_decoded = json.loads(text_data)
        except:
            self.send(text_data='Cannot decode the data')
            return
        try:
            endpoint = json_decoded['endpoint']
            p256dh = json_decoded['pd256dh']
            auth = json_decoded['auth']
            conn = sqlite3.connect('db.sqlite3')
            c = conn.cursor()
            c.execute(
                'INSERT INTO notification_token (endpoint, p256dh, auth, last_upload) VALUES (?, ?, ?, datetime())',
                (endpoint, p256dh, auth)
            )
            conn.commit()
            self.send(text_data='{"message": "Subscribed", "push": 0}')
        except:    
            self.send(text_data='{"message": "Cannot extract the data", "push": 0}')
            return
        