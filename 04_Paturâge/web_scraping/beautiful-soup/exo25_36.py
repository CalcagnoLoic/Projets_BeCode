from http.client import BAD_GATEWAY
import requests
from bs4 import BeautifulSoup

def getIntoHtml(url):
    res = requests.get(url)
    return res.text

# Write a Python program to find tags by CSS class in a given html document

soup = BeautifulSoup(getIntoHtml('https://www.python.org/'), 'html.parser')
print(soup.select('.pre'))
print("============================================================================================================")


# Write a Python program to change the tag's contents and replace with the given string

html = "<a href='http://example.com/'>HTML<i>example.com</i></a>"
soup = BeautifulSoup(html, 'html.parser')
tag = soup.a
print(tag)
tag.string = "CSS"
print(tag)
print("============================================================================================================")


# Write a Python program to add to a tag's contents in a given html document

html = '<a href="http://example.com/">HTML<i>w3resource.com</i></a>'
tag = BeautifulSoup(html, "html.parser")
print(tag.a)
tag.a.append("CSS")
print(tag)
print("============================================================================================================")


# Write a Python program to insert a new text within a url in a specified position

html = '<a href="http://example.com/">HTML<i>w3resource.com</i></a>'
tag = BeautifulSoup(html, 'html.parser')
tag = tag.a
print(tag.contents)
tag.insert(2, "Hello World")
print(tag.contents)
print("============================================================================================================")


# Write a Python program to insert tags or strings immediately before specified tags or strings

html = "<p> An exemple of HTML tag</p>"
soup = BeautifulSoup(html, 'html.parser')
print(soup.p)
tag = soup.new_tag('a')
tag.string = "href='https://www.python.org/'"
soup.p.string.insert_before(tag)
print(soup.p)
print("============================================================================================================")


# Write a Python program to insert tags or strings immediately after specified tags or strings

html = "<p> An exemple of HTML tag</p>"
soup = BeautifulSoup(html, 'html.parser')
print(soup.p)
tag = soup.new_tag('a')
tag.string = "href='https://www.python.org/'"
soup.p.string.insert_after(tag)
print(soup.p)
print("============================================================================================================")


# Write a Python program to extract a tag or string from a given tree of html document

html = "<p> An exemple of HTML tag<a>href='https://www.python.org/'</a></p>"
soup = BeautifulSoup(html, 'html.parser')
print(soup.p)
a_tag = soup.a.extract()
print(a_tag)
print("============================================================================================================")


# Write a Python program to remove a tag from a given tree of html document and destroy it and its contents

html = "<p> An exemple of HTML tag<a>href='https://www.python.org/'</a></p>"
soup = BeautifulSoup(html, 'html.parser')
print(soup.p)
tag_destroy = soup.p.decompose()
print(tag_destroy)
print("============================================================================================================")



# Write a Python program to remove a tag or string from a given tree of html document and replace it with the given tag or string

html = "<p><i> Python? bof</i> An exemple of HTML tag<a>href='https://www.python.org/'</a></p>"
soup = BeautifulSoup(html, 'html.parser')
print(soup.p)
tag_replace = soup.new_tag('span')
tag_replace.string="Python is soooooo cool!"
tag = soup.i.replace_with(tag_replace)
print(soup.p)
print("============================================================================================================")


# Write a Python program to wrap an element in the specified tag and create the new wrapper

html = "<p>Python is sooooooo cool and funny! </p>"
soup = BeautifulSoup(html, 'html.parser')
print(soup.p)
print(soup.p.wrap(soup.new_tag("div")))
print("============================================================================================================")


# Write a Python program to replace a given tag with whatever's inside a given tag


html = "<div><p>Python is sooooooo cool and funny! </p></d>"
soup = BeautifulSoup(html, 'html.parser')
print(soup.div)
soup.div.unwrap()
print(soup.p)
print("============================================================================================================")


