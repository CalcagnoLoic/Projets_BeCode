
from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select

driver = webdriver.Firefox()

# Navigating to a website 
driver.get("http://www.python.org")

################ Interaction with website

"""
Let's take the example of the input field of the website. 
There are differents methods for interaction
"""
#<input id="id-search-field" name="q" type="search" role="textbox" class="search-field" placeholder="Search" value="" tabindex="1">

elem = driver.find_element(By.ID, "id-search-field")
elem = driver.find_element(By.NAME, "q")
elem = driver.find_element(By.XPATH, "//input[@id='id-search-field']")
elem = driver.find_element(By.CSS_SELECTOR, "input#id-search-field")

# I 'write' in the input field of the website and I simulate an arrow down
elem.send_keys("some text")
elem.send_keys(" and some", Keys.ARROW_DOWN)
elem.clear()
driver.close()

################ Filling in forms

select = Select(driver.find_element(By.NAME, "cars"))
select.select_by_index('index')
select.select_by_visible_text('text')
select.select_by_value('value')

elem.submit()


################ Drag and drop 

element = driver.find_element(By.NAME, "source")
target = driver.find_element(By.NAME, "target")

action_chains = ActionChains(driver)
action_chains.drag_and_drop(element, target).perform()