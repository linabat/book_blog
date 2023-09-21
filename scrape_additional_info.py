import pandas as pd 
import numpy as np 
import requests 
import bs4 
import os 
import random
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

"""
This function would be used to extract information about a books, which includes 
- title, author, rating, genre, synonpsis, year published, number of reviews
"""
def get_product_info(text): 
    raw_html = bs4.BeautifulSoup(text, features = "lxml")
    # retrieving the title of the book 
    if len(raw_html.findAll("div",  attrs = {"class":"ErrorPage__top"})) == 0:
        if (len (raw_html.findAll("div", attrs = {"class": "BookPageTitleSection__title"})) != 0): 
            title = raw_html.find("div", attrs = {"class": "BookPageTitleSection__title"})
            title = title.find('h1').text
        else: 
            title = None

        
        # retrieving the synopsis of the book 
        synop = raw_html.find("div", attrs = {"class": "DetailsLayoutRightParagraph__widthConstrained"})
        synop = synop.find("span", attrs={"class": "Formatted"})
        synop = synop.text
        print (synop)

        # this div has informaiton about the book, including date, pages
        details = raw_html.find("div", attrs = {"class":"FeaturedDetails"})

        # retrieving the date the the book was first published
        date_info = details.find("p", attrs = {"data-testid": "publicationInfo"}).text
        date = date_info.replace("First published ",'')

        rating_stats = raw_html.find("div", attrs = {"class":"RatingStatistics__meta"})
        rating_count = rating_stats.find("span", attrs={"data-testid":"ratingsCount"}).text
        rating_count = rating_count.replace(u'\xa0', u' ')
        rating_count = rating_count[:rating_count.find(' ')]
        rating_count = int(rating_count.replace(",",""))

        reviews_count = rating_stats.find("span", attrs={"data-testid":"reviewsCount"}).text
        reviews_count = reviews_count.replace(u'\xa0', u' ')
        reviews_count = reviews_count[:reviews_count.find(' ')]
        reviews_count = int(reviews_count.replace(",",""))

        # retrieving the top genres of the book
        genre_list = [] 
        genres = raw_html.findAll("span", attrs = {"class":"BookPageMetadataSection__genreButton"})
        for i in genres: 
            item_genre = i.find("a").find("span", attrs = {"class":"Button__labelItem"}).text
            genre_list.append(item_genre)

        # return the information for each book 
        return {
            "title": title, 
            "synopsis" : synop, 
            "date_published" : date, 
            "rating_count" : rating_count, 
            "reviews_count" : reviews_count,
            "genres" : genre_list, 
            }

def book_scrape(book_id):
     # setting up driver so that there can be a short delay
    driver = webdriver.Chrome('./chromedriver') 
        
    # list of all the content of the books (items are series)
    lst = []
    for i in book_id:
        print (i)
        url = f'https://www.goodreads.com/book/show/{i}'
        driver.get(url)
        time.sleep(3)
        
#         request = requests.get(url) # going directly to the book itself 
        # get the information about the book and then store it in the 
        # a dataframe (still need to do this part )
#         info = get_product_info(request.text)
        info = get_product_info(driver.page_source)
        info["link"] = url
        ser = pd.Series(info)
        lst.append(ser)
        
    driver.quit()

    return pd.DataFrame(lst)
