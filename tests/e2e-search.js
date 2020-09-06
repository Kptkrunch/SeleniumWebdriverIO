describe('E2E tests - search', () => {
    it('Should load the homepage', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        $('#searchTerm').waitForExist();

        
    })

    it('Should submit searchbox', () => {
        $('#searchTerm').setValue('blank')
        browser.keys('Enter')
        const resultTitle = $('h2')
        resultTitle.waitForExist()
        expect(resultTitle).toHaveText('Search Results:')

    })
})

