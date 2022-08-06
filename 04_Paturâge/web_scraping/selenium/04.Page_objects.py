import unittest
from selenium import webdriver
import page

class PythonSearch(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Firefox()
        self.driver.get("https://www.python.org/")

    def search_python(self):
        main_page = page.MainPage(self.driver)
        self.assertTrue(main_page.is_title_mathches(), "the title of website doesn't match")
        main_page.search_text_element = "pycon"
        main_page.click_go_button()
        search_results = page.SearchResultsPage(self.driver)
        self.assertTrue(search_results.is_results_found(), "No results")
    
    def tearDown(self):
        self.driver.close()
    
    if __name__ == "__main__":
        unittest.main()