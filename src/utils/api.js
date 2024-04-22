const BASE_URL = 'https://localhost:5000';
  
const request = (endpoint, options) => {
    return fetch(`${BASE_URL}${endpoint}`, options);
};

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
        role: "USER",
        profile: {
            name: getUserName(email),
            gender: "Female"
        }
    }),
});

function getUserName(email) {
    return email.split('@')[0];
}