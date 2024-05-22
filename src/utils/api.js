const BASE_URL = 'http://localhost:3000';

const request = (endpoint, options) => {
  return fetch(`${BASE_URL}${endpoint}`, options).then((res) => check(res));
};

const check = async (res) => {
  if (res.ok) {
    return res.json();
  }

  return new Error();
};

export const login = (email, password) =>
  request(`/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

export const signup = (email, password) =>
  request(`/auth/signup`, {
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

export const getUsers = (token) =>
  request(`/v1/users`, {
    method: 'GET',
    headers: {
      'x-access-token': token,
    },
  });

// function getUserName(email) {
//     return email.split('@')[0];
// }

export const approveBookingByAdmin = (token, userId, bookingId, isApproved) => {
  return request('/v1/admin/approve', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
    body: JSON.stringify({
      userId,
      bookingId,
      isApproved,
    }),
  });
};

export const assignRole = (userId, role) => {
  return request('/v1/admin/assign-role', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      role,
    }),
  });
};

export const getAllBookings = (token) => {
  return request('/v1/booking', {
    method: 'GET',
    headers: {
      'x-access-token': token,
    },
  });
};

export const getBookingsByUserId = (token, userId) => {
  return request(`/v1/booking/${userId}`, {
    method: 'GET',
    headers: {
      'x-access-token': token,
    },
  });
};

export const createBooking = (
  token,
  equipId,
  userId,
  bookingDate,
  equipmentCount
) => {
  return request('/v1/booking', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
    body: JSON.stringify({
      equipId,
      userId,
      bookingDate,
      equipmentCount,
    }),
  });
};

export const updateBooking = (
  token,
  bookingId,
  userId,
  newBookingDate,
  newEquipmentCount
) => {
  return request('/v1/booking', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
    body: JSON.stringify({
      bookingId,
      userId,
      newBookingDate,
      newEquipmentCount,
    }),
  });
};

export const deleteBooking = (token, bookingId) => {
  return request(`/v1/booking/${bookingId}`, {
    method: 'DELETE',
    headers: {
      'x-access-token': token,
    },
  });
};
