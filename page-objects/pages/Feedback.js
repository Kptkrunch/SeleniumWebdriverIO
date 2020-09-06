import Base from '../Base.js';

class Feedback extends Base {

    get feedback() {
        return $('#feedback')
    }

    get nameInput() {
        return $('#name')
    }

    get emailInput() {
        return $('#email')
    }

    get subjectInput() {
        return $('#subject')
    }

    get commentInput() {
        return $('#comment')
    }

    get submitButton() {
        return $('input[type="submit"]')
    }

    clickFeedback() {
        this.feedback().waitForExist()
        this.feedback().click()
    }

    fillForm() {
        this.nameInput().setValue('Name')
        this.emailInput().setValue('test@test.com')
        this.subjectInput().setValue('Subjects')
        this.commentInput().setValue('Just a simple message')
    }

    submitForm() {
        this.submitButton().click()
    }
}