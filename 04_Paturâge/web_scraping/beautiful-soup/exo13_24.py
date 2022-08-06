
import requests
from bs4 import BeautifulSoup

def getIntoHtml(url):
    res = requests.get(url)
    return res.text


# Write a Python program to print the names of all HTML tags of a given web page going through the document tree

soup = BeautifulSoup(getIntoHtml('https://www.python.org/'), 'html.parser')
for i in soup.find_all():
    print(i.name)
print("============================================================================================================")


# Write a Python program to retrieve children of the html tag from a given web page

soup = BeautifulSoup(getIntoHtml('https://www.python.org/'), 'html.parser')
soup = soup.html
for i in soup.children:
    if i.name:
        print(i.name)
    else:
        None
print("============================================================================================================")


# Write a Python program to retrieve all descendants of the body tag from a given web page

soup = BeautifulSoup(getIntoHtml('https://www.python.org/'), 'html.parser')
soup = soup.html
for i in soup.descendants:
    if i.name:
        print(i.name)
    else:
        None
print("============================================================================================================")


# Write a Python program to retrieve the HTML code of the title, its text, and the HTML code of its parent

soup = BeautifulSoup(getIntoHtml('https://www.python.org/'), 'html.parser')
print("===================Title===================")
print(soup.title)
print("===================Text===================")
print(soup.title.text)
print("===================Code HTML of parents===================")
print(soup.title.parent)
print("============================================================================================================")


# Write a Python program to find and print all li tags of a given web page
soup = BeautifulSoup(getIntoHtml('https://www.python.org/'), 'html.parser')
for i in soup.find_all('li'):
    print('{} => {}'.format(i.name, i.text))
print("============================================================================================================")


# Write a Python program to print content of elements that contain a specified string of a given web page

soup = BeautifulSoup(getIntoHtml('https://www.python.org/'), 'html.parser')
print(soup.find_all(["p", "li", "a"],string="Django"))
print("============================================================================================================")

# Write a Python program to print the element(s) that has a specified id of a given web page

soup = BeautifulSoup(getIntoHtml('https://www.python.org/'), 'html.parser')
print(soup.select("#nojs"))
print("============================================================================================================")

# Write a Python program to create a Beautiful Soup parse tree into a nicely formatted Unicode string, with a separate line for each HTML/XML tag and string

soup = BeautifulSoup(getIntoHtml('https://pyscript.net/'), 'html.parser')
print(soup)
print(soup.prettify())
print("============================================================================================================")


# Write a Python program to find the first tag with a given attribute value in an html document

soup = BeautifulSoup(getIntoHtml('https://python.org/'), 'html.parser')
print(soup.find(href='/dev/peps/peps.rss'))
print("============================================================================================================")


# Write a Python program to find tag(s) beneath other tag(s) in a given html document

soup = BeautifulSoup(getIntoHtml('https://python.org/'), 'html.parser')
print(soup.select("html meta"))
print("============================================================================================================")


# Write a Python program to find tag(s) directly beneath other tag(s) in a given html document

soup = BeautifulSoup(getIntoHtml('https://python.org/'), 'html.parser')
print(soup.select("p > a"))
print("============================================================================================================")


# Write a Python program to find the siblings of tags in a given html document

soup = BeautifulSoup(getIntoHtml('https://python.org/'), 'html.parser')
print(soup.select("#nojs ~ .do-not-print"))
print("============================================================================================================")