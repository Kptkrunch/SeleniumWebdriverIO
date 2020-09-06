import Base from '../Base.js';
import App from '../App.js';
import Navbar from '../components/Navbar.js';

class LoginPage extends Base {

    get loginForm() {
        return $('#login_form')
    }

    get userNameInput() {
        return $('#user_login')
    }

    get passwordInput() {
        return $('#user_password')
    }

    get submitButton() {
        return $('input[type="submit"]')
    }

    get iconUser() {
        return $('.icon-user')
    }

    get logoutLink() {
        return $('#logout_link')
    }

    get error() {
        return $('.alert-error')
    }

    startLogin() {
        Navbar.clickSignIn()
    }

    formIsVisible() {
        this.loginForm.waitForExist()
    }

    fillForm(username, password) {
        this.userNameInput.setValue(username)
        this.passwordInput.setValue(password)
    }

    submitForm() {
        this.submitButton.click()
    }

    logoutUser() {
        this.iconUser.waitForExist()
        this.iconUser.click()
        this.logoutLink.waitForExist()
        this.logoutLink.click()
    }
}

export default new LoginPage;