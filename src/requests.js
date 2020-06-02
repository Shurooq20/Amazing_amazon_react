const BASE_URL = `http://localhost:3000/api/v1`;

export const Product = {
    all() {
        return fetch(`${BASE_URL}/products`, {
            credentials: 'include'
        }).then(res => res.json())
    },
    one(id) {
        return fetch(`${BASE_URL}/products/${id}`, {
            credentials: 'include'
        }).then(res => res.json())
    },
    create(params) {
        return fetch(`${BASE_URL}/products`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json())
    }
};

export const Session = {
    create(params) {
        // params should be an object with { email: 'some@gmail.com', password: 'supersecret' }
        return fetch(`${BASE_URL}/session`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        }).then((res) => {
            return res.json();
        })
    }
    // to use create
    // Session.create({email: '', password: ''}).then(data => { console.log(data)})
}

export const User = {
    current() {
        return fetch(`${BASE_URL}/users/current`, {
            method: 'GET',
            credentials: 'include'
        }).then(res => res.json());
    },

    create(params) {
        return fetch(`${BASE_URL}/users`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        }).then((res) => res.json())
    }
}

// shorthand for doing: { Question: Question, Session: Session }
// this works because there are variables called Question & Session
export default {
  Product,
  Session,
  User
}