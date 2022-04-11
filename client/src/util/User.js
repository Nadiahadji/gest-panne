import Token from './Token.js'
import AppStorage from './AppStorage.js'

class User {
    responseAfterLogin(res) {
        const token = res.data.token;
        const userName = res.data.fullname;
        if(Token.isValid(token)){
            AppStorage.store(token, userName);
        }
    }

    hasToken(){
        const storeToken = localStorage.getItem('token');
        if(storeToken) {
            return Token.isValid(storeToken) ? true : false;
        }
        return false;
    }

    loggedin() {
        return this.hasToken()
    }

    name() {
        if(this.loggedin()) {
            return localStorage.getItem('user')
        }
    }

    id() {
        if(this.loggedin()){
            const payload = Token.payload(localStorage.getItem('token'))
            return payload.sub;
        }
        return false;
    }   
}

export default User = new User();