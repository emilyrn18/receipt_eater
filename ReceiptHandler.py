import veryfi
import json
import glob
import shutil
import os

src_dir = "receipt_eater"
dst_dir = "receipt_eater/receipts"
for jpgfile in glob.iglob(os.path.join(src_dir, "*.jpg")):
    shutil.copy(jpgfile, dst_dir)


client_id = "vrfwHeTWzt36H42xoYO6TvcVYMf1JjHT5UDRg3L"
client_secret ="6puB3o4UJAJszZrRSzE3R1ai4X0CDNoVdbkCg1n85v1hC9HYwkICwNZIKHUIj8oo2r2YfIEvKvfkCFcLy1cRtTUxPC2xumEoYlli1H8DOUfHhBkyDuyjnY7sUKiwd2ZJ"
username ="abrarr18"
api_key = "3b8311ffb7811a5dbdeafc13649fc42c"

client = veryfi.Client(client_id, client_secret, username, api_key)
categories = ["Travel", "Lodging", "Job Supplies and Materials", "Grocery", "Gas", "Restaurant", "Tution", "Entertainment", "Shopping"]
json_string = client.process_document("image_receipt.jpg", categories)
#obj = json.loads(json_string)

#create a JSON file and write it to the file 
with open('json_data.json', 'w') as outfile:
  json_formatted_str = json.dumps(json_string, indent=4)
  #json.dump(json_string, outfile)
  outfile.write(json_formatted_str)