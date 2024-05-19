export async function getAllListings(url) {
  try {
    const response = await fetch(url);
    const result = response.json();

    if (response.ok) {
      return await result;
    } else {
      if (response.status === 404) throw new Error('404, Not found');
      if (response.status === 500)
        throw new Error('500, Internal server error');
      // For any other server error
      throw new Error(response.status);
    }
  } catch (error) {
    return error;
  }
}
