import os

import psycopg2

def create_connection():
    return psycopg2.connect(
        host=  os.environ['db_host'],        
database=os.environ['db_database_chatroom'],
          user    =    os.environ['db_username'] ,
        password  =os.environ['db_password'],
test=os.environ['testing']
    )