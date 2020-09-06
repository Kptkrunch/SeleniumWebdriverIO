import LoginPage from '../page-objects/pages/LoginPage';

describe('Should test for login credentials', () => {
     
    it('should fail to login', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        $('#signin_button').waitForExist()
        $('#signin_button').click()
        LoginPage.formIsVisible()
        LoginPage.fillForm('invalid input', 'invalid input')
        LoginPage.submitForm()
        const error = $('.alert-error')
        expect(error).toHaveText('Login and/or password are wrong.')
    })

    it('Should login successfully', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        $('#signin_button').waitForExist()
        $('#signin_button').click()
        LoginPage.formIsVisible()
        LoginPage.fillForm('username', 'password')
        LoginPage.submitForm()
        $('.nav-tabs').waitForExist()
    })

    it('Should log out the user', () => {
        
        $('.icon-user').waitForExist()
        $('.icon-user').click()
        $('#logout_link').waitForExist()
        $('#logout_link').click()
        $('.navbar-fixed-top').waitForExist()
    })
})