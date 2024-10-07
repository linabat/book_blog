import dash
from dash import dcc, html
from dash.dependencies import Input, Output
import pandas as pd
import plotly.express as px

# Initialize the Dash app
app = dash.Dash(__name__)
df = pd.read_csv("eda/reading_data.csv")

year_month_count = df.groupby(["Year", "Month"])["Title"].count().reset_index()
year_month_count = year_month_count.rename(columns={"Title": "Count"})

def bar_chart(df, x, y, title): 
    """
    Function to use when creating bar chart - has theme colors
    """
    fig = px.bar(df, x=x, y=y, title=title)
    fig.update_traces(marker_color='rgba(3, 142, 177, 0.959)')
    return fig

# App layout
app.layout = html.Div([
    # Dropdown for selecting the year
    dcc.Dropdown(
        id='year-dropdown',
        options=[{'label': str(year), 'value': year} for year in sorted(year_month_count['Year'].unique())],
        value=min(year_month_count['Year']),  # Default value
        clearable=False
    ),
    
    # Display total number of books and average rating
    html.Div(id='num-books', style={'fontSize': 24, 'marginTop': '20px', 'color':'white'}),
    html.Div(id='avg-rating', style={'fontSize': 24, 'marginBottom': '20px', 'color':'white'}),
    
    # Line chart for book counts
    dcc.Graph(id='line-chart'),

    # Bar chart for genres
    dcc.Graph(id='genre-chart'),

    # Bar chart for tropes
    dcc.Graph(id='trope-chart')
])

# Callback to update all charts and statistics based on selected year
@app.callback(
    [Output('num-books', 'children'),
     Output('avg-rating', 'children'),
     Output('line-chart', 'figure'),
     Output('genre-chart', 'figure'),
     Output('trope-chart', 'figure')],
    [Input('year-dropdown', 'value')]
)
def update_charts_and_stats(selected_year):
    # Filter the DataFrame for the selected year
    filtered_df = df[df['Year'] == selected_year]
    
    # Calculate statistics
    num_books = filtered_df.shape[0]
    avg_rating = filtered_df["Rating"].mean()

    # Create text for total books and average rating
    num_books_text = f"Total Books Read in {selected_year}: {num_books}"
    avg_rating_text = f"Average Rating in {selected_year}: {avg_rating:.2f}" if pd.notnull(avg_rating) else "Average Rating: N/A"

    # Line chart for month counts
    filtered_year_month = year_month_count[year_month_count['Year'] == selected_year]
    line_fig = px.line(filtered_year_month, x='Month', y='Count', title=f'Count for Each Month in {selected_year}')
    line_fig.update_layout(xaxis=dict(tickmode='array', tickvals=list(range(1, 13))))
    line_fig.update_traces(line=dict(color='rgba(3, 142, 177, 0.959)'))

    # Bar chart for genres
    genre_count = filtered_df["Genre"].value_counts().reset_index()
    genre_count.columns = ["Genre", "Count"]
    genre_fig = bar_chart(genre_count, x="Genre", y="Count", title=f"Genres read in {selected_year}")

    # Bar chart for tropes
    romance_only = filtered_df[filtered_df["Genre"] == "Romance"]
    counts_romance = romance_only.groupby("Trope").count()["Title"].reset_index()
    counts_romance = counts_romance.rename(columns={"Title": "Count"})
    trope_fig = bar_chart(counts_romance, x="Trope", y="Count", title=f"Breakdown of Tropes Read in {selected_year}")

    return num_books_text, avg_rating_text, line_fig, genre_fig, trope_fig

# Run the app
if __name__ == '__main__':
    app.run_server(debug=True)
