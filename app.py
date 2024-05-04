from flask import Flask, render_template, request, redirect, url_for, jsonify

app = Flask(__name__)

# Home page route
@app.route('/')
def index():
    return render_template('index.html')

# General destinations page route
@app.route('/destinations')
def destinations():
    # This could fetch and pass a list of destinations to your template
    return render_template('destinations.html')

# Dynamic route for each specific destination
@app.route('/destinations/<string:destination_name>')
def destination_detail(destination_name):
    # You might fetch details about the destination from a database or a data file
    # For now, we'll assume there's a template named after each destination
    return render_template(f'{destination_name}.html')

# Transportation page route
@app.route('/transportation')
def transportation():
    return render_template('transportation.html')

# Dynamic route for specific transportation option
@app.route('/transportation/<string:transport_name>')
def transport_detail(transport_name):
    return render_template(f'{transport_name}.html')

# Accommodation page route
@app.route('/accommodation')
def accommodation():
    return render_template('accommodation.html')

# Dynamic route for specific accommodation
@app.route('/accommodation/<string:hotel_name>')
def accommodation_detail(hotel_name):
    return render_template(f'{hotel_name}.html')

# Services page route
@app.route('/services')
def services():
    return render_template('services.html')

# Dynamic route for specific service
@app.route('/services/<string:service_name>')
def service_detail(service_name):
    return render_template(f'{service_name}.html')

# Input page route for feedback
@app.route('/input', methods=['GET', 'POST'])
def input():
    if request.method == 'POST':
        # Process the input data here, store it, or handle it as needed
        return jsonify(status="success", message="Feedback submitted successfully")
    return render_template('input.html')

# Travel Itinerary page route
@app.route('/itinerary')
def itinerary():
    return render_template('itinerary.html')

if __name__ == '__main__':
    app.run(debug=True)
