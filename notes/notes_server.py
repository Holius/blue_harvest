# An object of Flask class
from flask import Flask, redirect, url_for, render_template

# to redirect to another url -- first argumment must be a route defined by the string passed
##redirect(url_for(<url to redirect to>))
##from flask import Flask, redirect, url_for

# default is get method (when not specified)
##app.route(<endpoint/route>, methods = [<"POST">,<"GET">])

# to have different endpoints route to the same location have app.route stacked on the same function to call
## @app.route(<endpoint 1>)
## @app.route(<endpoint 2>)
## function to call for both endpoints

# inside function for route
##request.method --> returns method
##request.form.get(<param str>) --> returns <param> if exists in request form --> POST
##request.args.get(<param str>) --> returns <param> if exists in parameters --> GET


# Flask constructor takes the name of current
app = Flask(__name__)

# root of webserver calls hello_world
# app.add_url_rule(endpoint/route, rule_name, function) --> ("/", "root", main())
##alternate way to write line below
@app.route("/")
def hello_world():
    return "Hello World"


def admin():
    return "admin"


if __name__ == "__main__":
    localhost = "127.0.0.1"
    port = 3000
    app.run(host=localhost, port=port)  # runs sever
    # app.run(host=localhost, port=port, debug=True) # DEBUG MODE
