from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions

driver = webdriver.Firefox()
driver.get("https://www.python.org/about/quotes/")

try:
    elem = WebDriverWait(driver, 10).until(
        expected_conditions.presence_of_element_located(
            (By.ID, "python-network")
        )
    )
finally:
    driver.quit()