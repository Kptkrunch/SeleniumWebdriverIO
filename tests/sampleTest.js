describe('first steps with webdriverio', () => {
    it('load example site', () => {
        browser.url('http://www.example.com')
        browser.pause(3000);
    })

    it('Load webdriverio website', () => {
        browser.url('https://webdriver.io')
        browser.pause(2000)
    })
})