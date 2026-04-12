import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options as ChromeOptions
from selenium.webdriver.edge.options import Options as EdgeOptions
from selenium.webdriver.firefox.options import Options as FirefoxOptions

def get_driver():
    # 1. Try Chrome (Primary)
    try:
        print("Attempting to launch Chrome...")
        opts = ChromeOptions()
        opts.add_argument('--headless=new')
        return webdriver.Chrome(options=opts)
    except Exception as e:
        print(f"Chrome locked or unavailable: {e}")

    # 2. Try Edge (Secondary - Chromium based)
    try:
        print("Attempting to launch Edge...")
        opts = EdgeOptions()
        opts.add_argument('--headless=new')
        return webdriver.Edge(options=opts)
    except Exception as e:
        print(f"Edge locked or unavailable: {e}")

    # 3. Try Firefox (Tertiary)
    try:
        print("Attempting to launch Firefox...")
        opts = FirefoxOptions()
        opts.add_argument('--headless')
        return webdriver.Firefox(options=opts)
    except Exception as e:
        print(f"Firefox locked or unavailable: {e}")

    raise Exception("CRITICAL: All browsers are locked or unavailable. Please close other agent windows.")

if __name__ == "__main__":
    driver = get_driver()
    print(f"Successfully launched: {driver.name}")
    driver.quit()