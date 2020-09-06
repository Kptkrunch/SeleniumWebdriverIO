import App from '../page-objects/App.js';
import Feedback from '../page-objects/pages/Feedback.js';

describe('end to end feedback test', () => {

    it('Should load the feedback form', () => {
        App.openHomepage()
        Feedback.clickFeedback()
        $('form').waitForExist()

    })

    it('Should submit feedback form', () => {
        Feedback.fillForm()
        Feedback.submitForm()
        expect(browser).toHaveUrl(
            'http://zero.webappsecurity.com/sendFeedback.html'
        )
    })
})