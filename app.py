from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

study_sessions = []

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api/save", methods=["POST"])
def save_session():
    data = request.json
    study_sessions.append(data)
    return jsonify({"status": "success"})

@app.route("/api/data")
def get_data():
    return jsonify(study_sessions)

if __name__ == "__main__":
    app.run()
