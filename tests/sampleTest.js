

describe('first steps with webdriverio', () => {
    it('load example site', () => {
        browser.url('http://devexpress.github.io/testcafe/example/')
        browser.pause(short);
        expect(browser).toHaveUrl('https://devexpress.github.io/testcafe/example/')
        expect(browser).toHaveTitle('TestCafe Example Page')
    })

    it('h1 should be visible', () => {
        const h1 = $('h1')
        const p = $('p')
        h1.waitForExist()
        p.waitForExist()
        expect(h1).toBeVisible()
        expect(p).toBeVisible()
    })

    // it('Check link value', () => {
    //     const link = 'https://www.iana.org/domains/example';
    //     const actualLink = $('a');-
    //     expect(actualLink).toHaveLink(link)
    // })

    it('get element text', () => {
        const text = $('h1').getText()
        const element = $('h1')
        element.waitForExist()
        expect(element).toHaveText('Example')

    })

    it('button should have type of submit', () => {
        browser.url('http://devexpress.github.io/testcafe/example/')
        const button = $('#submit-button');
        button.waitForExist()
        expect(button).toHaveAttrContaining('type', 'submit')
        expect(button).toHaveAttrContaining('disabled', 'true')
        expect(button).toHaveAttrContaining('data-testid', 'submit-button')
    })

    it('Assert value', () => {
        const button = $('#populate')
        button.waitForExist()
        expect(button).toHaveValue('Populate')
    })

    it('save screenshot', () => {
        browser.saveScreenshot('screenshot.png')
    })

    it('change viewport size', () => {
        browser.setWindowSize(800, 600)
    })

    it('set mobile view', () => {
        browser.setWindowSize(mobile[0], mobile[1])
        browser.pause(short)
    })

    it('set tablet view', () => {
        browser.setWindowSize(tablet[0], tablet[1])
        browser.pause(medium)
    })

    it('set desktop view', () => {
        browser.setWindowSize(desktop[0], desktop[1])
        browser.pause(short)
    })






})

