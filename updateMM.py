import json
import os
import pathlib
directory = "assets\meeting_minutes"
meetingMinutes = list()

for path in pathlib.Path(directory).iterdir():
    filename = str(path).replace('assets\meeting_minutes\\',"")
    date = str(filename).replace('Minutes_-_',"").replace('_'," ").replace(".docx","")
    meetingMinutes.append({
        "path":str(path),
        "date": date,
        "filename":str(filename)
    })
with open("assets\json\meetingMinutes.json", 'w+') as fp:
    fp.write(json.dumps(meetingMinutes, indent=4))
    # meetingMinutes.setdefault()