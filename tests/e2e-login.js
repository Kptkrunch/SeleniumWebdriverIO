describe('Should test for login credentials', () => {
     
    it('should fail to login', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        $('#signin_button').waitForExist()
        $('#signin_button').click()
        $('#login_form').waitForExist()
        $('#user_login').setValue('Username')
        $('#user_password').setValue('Password')
        $('input[type="submit"]').click()
        const error = $('.alert-error')
        expect(error).toHaveText('Login and/or password are wrong.')
    })

    it('Should login successfully', () => {


    })

    it('Should log out the user', () => {
        

    })
})