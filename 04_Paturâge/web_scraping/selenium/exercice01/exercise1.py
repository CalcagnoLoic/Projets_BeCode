from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Firefox()
driver.get("https://tvroom.github.io/selenium-exercises/ex1/")

elem = driver.find_element(By.CSS_SELECTOR, "h3.sel_header")

driver.close()