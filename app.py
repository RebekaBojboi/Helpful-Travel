from flask import Flask, render_template, request, redirect, url_for

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

# About page route
@app.route('/about')
def about():
    return render_template('about.html')

# Contact page route, demonstrating GET and POST methods
@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        # Process your form data here
        # For example, send an email or save the data in a database
        print(request.form)  # Just printing the form data to the console for this example
        return redirect(url_for('index'))  # Redirect to home after form submission
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)