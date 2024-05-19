import { API_BASE, API_LOGIN } from '../constants.mjs';
import { save } from '../../storage/index.mjs';

export async function loginUser(email, password) {
  try {
    const response = await fetch(API_BASE + API_LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      const userData = await response.json();
      const { accessToken, ...user } = await userData.data;
      save('token', accessToken);
      save('profile', user);
      return user;
    } else {
      if (response.status === 401) throw new Error('401, Unathorized');
      // For any other server error
      throw new Error(response.status);
    }
  } catch (error) {
    return error;
  }
}
