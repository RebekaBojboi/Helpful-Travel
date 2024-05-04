from flask import Flask, render_template, request, redirect, url_for, jsonify

app = Flask(__name__)

# Home page route
@app.route('/')
def index():
    return render_template('index.html')

# Destinations page route
@app.route('/destinations')
def destinations():
    # You could fetch and pass destination data to your template here
    return render_template('destinations.html')

# Transportation page route
@app.route('/transportation')
def transportation():
    return render_template('transportation.html')

# Accommodation page route
@app.route('/accommodation')
def accommodation():
    return render_template('accommodation.html')

# Services page route
@app.route('/services')
def services():
    return render_template('services.html')

# Input page route for feedback
@app.route('/input', methods=['GET', 'POST'])
def input():
    if request.method == 'POST':
        # Process the input data here, store it, or handle it as needed
        print(request.form)
        # You might want to redirect or send a JSON response
        return jsonify(status="success", message="Feedback submitted successfully")
    return render_template('input.html')

# Travel Itinerary page route
@app.route('/itinerary')
def itinerary():
    return render_template('itinerary.html')



if __name__ == '__main__':
    app.run(debug=True)
