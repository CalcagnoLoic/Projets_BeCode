from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

driver = webdriver.Firefox()
driver.get("http://www.python.org")

# Locating by an ID

elem = driver.find_element(By.ID, "success-stories")

# Locating by Name

elem = driver.find_element(By.NAME, "q")

# Locating by XPath
## Absolute path (not use)
#elem = driver.find_element(By.XPATH, "/body/form")

##First element in html
elem = driver.find_element(By.XPATH, "//form[1]")

##Element with attributes
elem_btn = driver.find_element(By.XPATH, "//input[@type='search']")

##Elements by name with XPath
elem_q = driver.find_element(By.XPATH, "//input[@name='q']")

# Locating hyperlinkg by Link Text

comm_link_elem = driver.find_element(By.LINK_TEXT, "Donate")

# Locating elements by Tag name

a_elem = driver.find_element(By.TAG_NAME, "a")

# Locating elements by Class Name

class_elem = driver.find_element(By.CLASS_NAME, "python-logo")

# Locating elements by css selectors 

css_elem = driver.find_element(By.CSS_SELECTOR,"span.output")


driver.close()