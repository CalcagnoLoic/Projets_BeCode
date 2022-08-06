import requests
from bs4 import BeautifulSoup

def getIntoHtml(url):
    res = requests.get(url)
    return res.text


# Write a Python program to find the title tags from a given html document

soup = BeautifulSoup(getIntoHtml('https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal'), 'html.parser')
print(soup.find("title"))
print("============================================================================================================")


# Write a Python program to retrieve all the paragraph tags from a given html document

soup = BeautifulSoup(getIntoHtml('https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal'), 'html.parser')
print(soup.find_all("p"))
print("============================================================================================================")


# Write a Python program to get the number of paragraph tags of a given html document

soup = BeautifulSoup(getIntoHtml('https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal'), 'html.parser')
res = soup.find_all("p")
print(len(res))
print("============================================================================================================")

# Write a Python program to extract the text in the first paragraph tag of a given html document

soup = BeautifulSoup(getIntoHtml('https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal'), 'html.parser')
print(soup.find_all("p")[0].text)
print("============================================================================================================")


# Write a Python program to find the length of the text of the first <h2> tag of a given html document

soup = BeautifulSoup(getIntoHtml('https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal'), 'html.parser')
print(len(soup.find_all('h2')[0].text))
print("============================================================================================================")


# Write a Python program to find the text of the first <a> tag of a given html text

soup = BeautifulSoup(getIntoHtml('https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal'), 'html.parser')
print(soup.find_all('a')[0].text)
print("============================================================================================================")


# Write a Python program to find the href of the first <a> tag of a given html document.

soup = BeautifulSoup(getIntoHtml('https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal'), 'html.parser')
print(soup.find('a').attrs['href'])
print("============================================================================================================")


#  Write a Python program to extract all the URLs from the webpage python.org that are nested within <li> tags from

soup = BeautifulSoup(getIntoHtml('https://www.python.org/'), 'html.parser')
for elem in soup.find_all('li'):
    urls = []
    a = elem.find('a')
    if 'href' in a.attrs:
        url = a.get('href')
        urls.append(url)
    for elem in urls:
        print(elem)
print("============================================================================================================")


# Write a Python program to find all the h2 tags and list the first four from the webpage python.org

soup = BeautifulSoup(getIntoHtml('https://www.python.org/'), 'html.parser')
h2 = soup.find_all('h2')[0:4]
print(h2)
print("============================================================================================================")


# Write a Python program to find all the link tags and list the first ten from the webpage python.org

soup = BeautifulSoup(getIntoHtml('https://www.python.org/'), 'html.parser')
print(soup.find_all('a')[0:10])
print("============================================================================================================")


# Write a Python program to a list of all the h1, h2, h3 tags from the webpage python.org

soup = BeautifulSoup(getIntoHtml('https://www.python.org/'), 'html.parser')
for elem in soup.find_all(["h1", "h2", "h3"]):
    print(elem.name + " " + elem.text)
print("============================================================================================================")


# Write a Python program to extract all the text from a given web page

soup = BeautifulSoup(getIntoHtml('https://www.python.org/'), 'html.parser')
print(soup.get_text())
print("============================================================================================================")