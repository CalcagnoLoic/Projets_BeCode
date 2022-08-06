from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

driver = webdriver.Firefox()
driver.get('https://tvroom.github.io/selenium-exercises/ex2/')

username = driver.find_element(By.NAME, "username")
username.send_keys("bob")

password = driver.find_element(By.NAME, "password")
password.send_keys("foobaz")

login = driver.find_element(By.XPATH, "//input[@type='submit']").click()

driver.close()