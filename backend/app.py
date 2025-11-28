from flask import Flask, request, jsonify  # pyright: ignore[reportMissingImports]
import csv
from search import search_company
from google_client import append_row

app = Flask(__name__)

@app.route("/upload", methods=["POST"])
def upload():
    file = request.files["file"]

    # Read CSV directly from memory
    companies = []
    data = file.read().decode("utf-8").splitlines()
    reader = csv.reader(data)
    next(reader)  # skip header

    for row in reader:
        companies.append(row[0])  # first column = company name

    results = []

    for company in companies:
        info = search_company(company)
        append_row([
            info["name"],
            info["website"],
            info["founded_year"],
            info["phone"]
        ])
        results.append(info)

    return jsonify({"status": "done", "processed": len(results)})

if __name__ == "__main__":
    app.run(debug=True)
