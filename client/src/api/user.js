export async function getUserId(userId) {
    let options = {
      method: 'GET',
    }
    try {
        let response = await fetch(`/users/${userId}`, options);
        if (response.ok) {
             return await response.json();
        } else {
            console.log('Server error', response.statusText);
        }
    } catch (err) {
        console.log('Network error:', err.message);
    }
  }

