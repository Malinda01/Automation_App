import gspread
from google.oauth2.service_account import Credentials

creds = Credentials.from_service_account_file(
    "service_account.json",
    scopes=["https://www.googleapis.com/auth/spreadsheets"]
)

client = gspread.authorize(creds)

sheet = client.open("Company Info").sheet1

def append_row(row):
    sheet.append_row(row)
