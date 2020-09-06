class Base {
    pauseShort() {
        browser.pause(3000)
    }

    pauseMedium() {
        browser.pause(5000)
    }

    pauseLong() {
        browser.pause(7000)
    }

    mobile() {
        browser.setWindowSize(375, 812)
    }

    tablet() {
        browser.setWindowSize(1024, 768)
    }

    desktop() {
        browser.setWindowSize(1650, 1050)
    }
}

export default Base;
