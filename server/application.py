# An object of Flask class
from flask import Flask, redirect, url_for, render_template, jsonify

# <type dictionary> full list of categories
from data.ingredients import list_ingredients

# development server
from livereload import Server

# default route
from routes.default import render_default
import requests
from env import api_key

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
application = app = Flask(__name__, template_folder="./templates")
app.config["SEND_FILE_MAX_AGE_DEFAULT"] = 0


# root of webserver calls hello_world
# app.add_url_rule(endpoint/route, rule_name, function) --> ("/", "root", main())
##alternate way to write line below


@app.route("/")
def default():
    return render_template(
        "root/index.html", collection=render_default(list_ingredients())
    )
    # return render_template("boilerplate.html")


@app.route("/ingredients/<parameter>")
def get_drinks(parameter):
    url_base = f"https://www.thecocktaildb.com/api/json/v2/{api_key}/filter.php?i="
    url_base += parameter
    drinks = requests.get(url_base).json()
    drinks = drinks["drinks"]
    if isinstance(drinks, str):
        return "<div class='no-results'>Uh-oh! Drinks with all of those ingredients were not found.<div>"
    # cache.clear()  # todo development
    return render_template("drinks/drinks.html", drinks=drinks)
    # return jsonify(data=drinks) ##sends json to frontend


def process_drink_dictionary(d):
    ingredients = []
    for num in range(15):
        pair = []
        ingredient = d.get(f"strIngredient{num}")
        if isinstance(ingredient, str):
            pair.append(ingredient)
            measure = d.get(f"strMeasure{num}")
            if isinstance(measure, str):
                pair.append(measure)
            else:
                pair.append("")
        if len(pair) > 0:
            ingredients.append(pair)
    return {
        "instruction": d["strInstructions"],
        "image": d["strDrinkThumb"],
        "name": d["strDrink"],
        "ingredients": ingredients,
    }


# strInstructions = instructions to make drink
# strDrinkThumb = <img url>
# strIngredient[1...] = ingredient
# strMeasure[1...] = corresponding measurement (if none = null)
@app.route("/drink/<id>")
def get_drink(id):
    url_base = f"https://www.thecocktaildb.com/api/json/v2/{api_key}/lookup.php?i="
    url_base += id
    drink = requests.get(url_base).json()
    drink = process_drink_dictionary(drink["drinks"][0])
    return render_template("drinks/drink.html", drink=drink)


if __name__ == "__main__":
    # app.run(debug=True)
    app.debug = True
    server = Server(app.wsgi_app)
    server.serve()
    # """
    # localhost = "127.0.0.1"
    # port = 5500
    # app.run(host=localhost, port=port)  # runs sever
    # app.run(host=localhost, port=port, debug=True) # DEBUG MODE
    # """
