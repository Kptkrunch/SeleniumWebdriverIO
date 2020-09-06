import App from '../page-objects/pages/App.js';

describe('end to end feedback test', () => {

    it('Shoulf laod the feedback form', () => {
        App.openHomepage()
        $('#feedback').waitForExist()
        $('#feedback').click()
        $('form').waitForExist()

    })

    it('Should submit feedback form', () => {
        $('#name').setValue('Name')
        $('#email').setValue('test@test.com')
        $('#subject').setValue('Subjects')
        $('#comment').setValue('Just a simple message')
        $('input[type="submit"]').click()
        expect(browser).toHaveUrl(
            'http://zero.webappsecurity.com/sendFeedback.html'
        )
    })
})