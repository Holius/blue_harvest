# An object of Flask class
from flask import Flask, redirect, url_for, render_template

# <type dictionary> full list of categories
from data.ingredients import list_ingredients

# development server
from livereload import Server

# default route
from routes.default import render_default


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
app = Flask(__name__, template_folder="./templates")

# root of webserver calls hello_world
# app.add_url_rule(endpoint/route, rule_name, function) --> ("/", "root", main())
##alternate way to write line below


@app.route("/")
def default():
    return render_template(
        "root/index.html", collection=render_default(list_ingredients())
    )
    # return render_template("boilerplate.html")


@app.route("/hello/<name>")
def show_name(name):

    if name == "justin":
        return redirect(url_for("admin"))
    return f"Hello {name}"


if __name__ == "__main__":
    app.debug = True
    server = Server(app.wsgi_app)
    server.serve()
    """
    localhost = "127.0.0.1"
    port = 3000
    app.run(host=localhost, port=port)  # runs sever
    # app.run(host=localhost, port=port, debug=True) # DEBUG MODE
    """


# basic try/except
##try:
##do the stuff
##except Exception as err:
##return err
