import dash
from dash import dcc, html
from dash.dependencies import Input, Output
import pandas as pd
import plotly.express as px

# Initialize the Dash app
app = dash.Dash(__name__)
df =pd.read_csv("eda/reading_data.csv")

year_month_count = df.groupby(["Year", "Month"])["Title"].count().reset_index()
year_month_count = year_month_count.rename(columns={"Title":"Count"})

# App layout # come back and the font of the drop down and size of the text
app.layout = html.Div([
    # Dropdown for selecting the year
    dcc.Dropdown(
        id='year-dropdown',
        options=[{'label': str(year), 'value': year} for year in sorted(year_month_count['Year'].unique())],
        value=min(year_month_count['Year']),  # Default value
        clearable=False
    ),
    
    # Line chart
    dcc.Graph(id='line-chart')
])

# Callback to update the line chart based on selected year
@app.callback(
    Output('line-chart', 'figure'),
    [Input('year-dropdown', 'value')]
)
def update_line_chart(selected_year):
    # Filter the DataFrame for the selected year
    filtered_df = year_month_count[year_month_count['Year'] == selected_year]
    
    # Create a line chart using Plotly
    fig = px.line(filtered_df, x='Month', y='Count', title=f'Count for Each Month in {selected_year}')
    
    # Update the x-axis to show month labels (1 to 12)
    fig.update_layout(xaxis=dict(tickmode='array', tickvals=list(range(1, 13))))
    fig.update_traces(line=dict(color='rgba(3, 142, 177, 0.959)'))
    return fig

def statistics(selected_year):
    return

# Run the app
if __name__ == '__main__':
    app.run_server(debug=True)
