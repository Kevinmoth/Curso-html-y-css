#vamos a crear un programa que  de una alarma cada hora al usuario, desde que se activa hasta que se dessactiva
import time

import time
import subprocess

def start_alarm():
    while True:
        time.sleep(60 * 60)  # 60 minutes
        subprocess.call(["afplay", "alarm_sound.mp3"])  # Replace "alarm_sound.mp3" with the actual file name

# To start the alarm
start_alarm()

# To stop the alarm, you can terminate the script using Ctrl+C in the terminal