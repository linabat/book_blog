
from google.oauth2 import service_account
import pandas as pd
from googleapiclient.discovery import build
# Path to your service account key file
SERVICE_ACCOUNT_FILE = 'eda/credentials.json'

# Define the required scopes (read-only for sheets)
SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']

# Authenticate using service account credentials
creds = service_account.Credentials.from_service_account_file(
    SERVICE_ACCOUNT_FILE, scopes=SCOPES)

# Create the Google Sheets API client
service = build('sheets', 'v4', credentials=creds)

# The ID of the Google Sheet
SPREADSHEET_ID = '1wRpqF_aaRh9SVh7NTkeyF84Ripzh45pfy3DWYpMgnwI'

# Define the range of cells to read (e.g., 'Sheet1!A1:D100')
RANGE_NAME = 'Sheet1!A:H'

# Call the Sheets API to fetch data from the sheet
sheet = service.spreadsheets()
result = sheet.values().get(spreadsheetId=SPREADSHEET_ID, range=RANGE_NAME).execute()

# Extract rows from the result
rows = result.get('values', [])

# Load the rows into a pandas DataFrame
if rows:
    # The first row should be treated as the header (column names)
    df = pd.DataFrame(rows[1:], columns=rows[0])
    print(df)
else:
    print('No data found.')

print("END")
