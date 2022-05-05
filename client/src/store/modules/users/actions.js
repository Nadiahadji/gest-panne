import axios from 'axios'

export default {
    setUsers(context) {
        axios.get('http://localhost:3000/api/users')
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }
}