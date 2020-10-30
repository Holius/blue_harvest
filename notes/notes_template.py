#!/usr/bin/env python3
from flask import Flask, render_template

app = Flask(__name__)

# example of html template
##hellobasic.html
"""
<!doctype html>
<html>
   <body>
      <h1>Hello {{ name }}!</h1>
   </body>
</html>
"""


@app.route("/<username>")
def index(username):
    return render_template("hellobasic.html", name=username)


# implement logic in template
##highscore.html
"""
<!doctype html>
<html>
   <body>
   
      {% if marks>50 %}
      <h1> You passed! Well done!</h1>
      {% else %}
      <h1>You failed</h1>
      {% endif %}
      
   </body>
</html>
"""

# if one wanted to pull in a score (for instance) as as int this would be the syntax:
##@app.route("/<int:score>")
@app.route("/scoretest/<int:score>")
def hello_name(score):
    # render the template with the value of score for marks
    # marks is a jinja var in the template
    return render_template("highscore.html", marks=score)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=2224)
