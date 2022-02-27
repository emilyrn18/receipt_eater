#from distutils.log import debug
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from chat import get_response
#This is where we code the flask app
app = Flask(__name__)
CORS(app)

@app.post("/predict")
def predict():
  text = request.get_json().get("message")
  if text is None: 
    response = "Message is not valid"
  else: 
    response = get_response(text)
    message = {"answer": response}
  return jsonify(message)

if __name__ == "__main__":
  app.run(debug=True)
