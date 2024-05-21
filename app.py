from flask import Flask, request, render_template, jsonify
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi


uri = "mongodb+srv://65010739:Baimon2547@resume.jvkqtwc.mongodb.net/?retryWrites=true&w=majority&appName=resume"
# Create a new client and connect to the server
myclient = MongoClient(uri, server_api=ServerApi('1'))

mydb = myclient["Resume"]
collection = mydb["Report"]

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('home.html')

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/project")
def project():
    return render_template('project.html')

@app.route("/contact")
def contact():
    return render_template('contact.html')

@app.route("/detailproject1")
def detailproject1():
    return render_template('project/irsensor.html')

@app.route("/detailproject2")
def detailproject2():
    return render_template('project/greynumber.html')

@app.route("/detailproject3")
def detailproject3():
    return render_template('project/armcheckmirror.html')

@app.route("/detailproject4")
def detailproject6():
    return render_template('project/Temp.html')

@app.route("/detailproject5")
def detailproject4():
    return render_template('project/Todolist.html')

@app.route("/detailproject6")
def detailproject5():
    return render_template('project/mentalhealth.html')



@app.route('/submit', methods=['POST'])
def submit():
    if request.method == 'POST':
        # รับข้อมูลจากแบบฟอร์ม
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']

        # เพิ่มข้อมูลใน MongoDB
        result = collection.insert_one({
            'name': name,
            'email': email,
            'message': message
        })

        if result.inserted_id:
            return jsonify({'status': 'success'})
        else:
            return jsonify({'status': 'failed'})

if __name__ == '__main__':
   app.run(host="0.0.0.0", port=5000, debug=True)