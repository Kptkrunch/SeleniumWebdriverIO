import LoginPage from '../page-objects/pages/LoginPage';

describe('Should test for login credentials', () => {
     
    it('should fail to login', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        $('#signin_button').waitForExist()
        $('#signin_button').click()
        LoginPage.formIsVisible()
        LoginPage.fillForm('invalid input', 'invalid input')
        LoginPage.submitForm()
        // $('#login_form').waitForExist()
        // $('#user_login').setValue('invalid')
        // $('#user_password').setValue('invalid')
        // $('input[type="submit"]').click()
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
        // $('#login_form').waitForExist()
        // $('#user_login').setValue('username')
        // $('#user_password').setValue('password')
        // $('input[type="submit"]').click()
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