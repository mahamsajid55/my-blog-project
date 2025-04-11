from flask import Flask, render_template
import os

app = Flask(__name__,
            template_folder=os.path.join(os.path.dirname(__file__), '..', 'templates'),
            static_folder=os.path.join(os.path.dirname(__file__), '..', 'static'))

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/about')
def about():
    return render_template('about.html')

# Blog page
@app.route('/blog')
def blog():
    return render_template('blog.html')

# Blog post page
@app.route('/blog_post')
def blog_post():
    return render_template('blog_post.html')

# Contact page
@app.route('/contact')
def contact():
    return render_template('contact.html')

# Explore Javascript page
@app.route('/explore_javascript')
def explore_javascript():
    return render_template('explore_javasccript.html')


if __name__ == '__main__':
    app.run(debug=True, port=5002)

