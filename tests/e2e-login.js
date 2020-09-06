
import App from '../page-objects/App.js';
import Navbar from '../page-objects/components/Navbar.js';
import LoginPage from '../page-objects/pages/LoginPage';

describe('Should test for login credentials', () => {
    it('should fail to login', () => {
        App.openHomepage()
        Navbar.clickSignIn()
        LoginPage.formIsVisible()
        LoginPage.fillForm('invalid input', 'invalid input')
        LoginPage.submitForm()
        const message = LoginPage.error;
        expect(message).toHaveText('Login and/or password are wrong.')
    })

    it('Should login successfully', () => {
        App.openHomepage()
        Navbar.clickSignIn()
        LoginPage.formIsVisible()
        LoginPage.fillForm('username', 'password')
        LoginPage.submitForm()
        Navbar.insideNavbarIsVisible()
    })

    it('Should log out the user', () => {
        LoginPage.logoutUser()
        Navbar.signInButtonIsVisible()
    })
})