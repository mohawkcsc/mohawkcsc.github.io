import json
import os
import pathlib
directory = "assets\meeting_minutes"
meetingMinutes = list()

for path in pathlib.Path(directory).iterdir():
    date = str(path).replace('assets\meeting_minutes\\Minutes_-_',"").replace('_'," ").replace(".docx","")
    meetingMinutes.append({
        "path":str(path),
        "date": date
    })
with open("assets\json\meetingMinutes.json", 'w+') as fp:
    fp.write(json.dumps(f"data: '{meetingMinutes}'", indent=4))
    # meetingMinutes.setdefault()