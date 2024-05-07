const BASE_URL = 'http://localhost:3000';
  
const request = (endpoint, options) => {
    return fetch(`${BASE_URL}${endpoint}`, options)
        .then(res => check(res));
};

const check = async (res) => {
    if (res.ok) {
        return res.json();
    }

    return new Error();
}

export const login = (email, password) => request(`/auth/login`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        email: email,
        password: password,
    }),
});

export const signup = (email, password) => request(`/auth/signup`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        email: email,
        password: password,
        // role: "USER",
        // profile: {
        //     name: getUserName(email),
        //     gender: "Female"
        // }
    }),
});

function getUserName(email) {
    return email.split('@')[0];
}