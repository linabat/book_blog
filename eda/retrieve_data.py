
from google.oauth2 import service_account
import pandas as pd
from googleapiclient.discovery import build
# Path to your service account key file

def retrieve_data():
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
        # Cleaning up the columns
        df.columns = [i.strip () for i in df.columns]

        # cleaning 
        df["Trope"] = df["Trope"].str.strip()
        df["Genre"] = df["Genre"].str.strip()


        df["Date Finished"] = pd.to_datetime(df["Date Finished"], format='%m/%d/%y')
        df["Month"] = df["Date Finished"].dt.month
        df["Year"] = df["Date Finished"].dt.year
        df.to_csv("eda/reading_data.csv", index=False)
        # return df
    else: 
        print("Fail")

retrieve_data()