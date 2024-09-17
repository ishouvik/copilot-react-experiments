import axios from 'axios';

const BASE_URL = 'https://example.com/api/v2';

export const fetchUsers = async (page: number, pageSize: number, token: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/users`, {
      params: {
        page,
        pageSize,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};

// Add other API functions here