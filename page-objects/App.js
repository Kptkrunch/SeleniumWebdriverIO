class App {
    openHomepage() {
        browser.url('http://zero.webappsecurity.com/index.html')
    }

    logout() {
        browser.url('http://zero.webappsecurity.com/logout')
    }
}

export default new App;