import React, { useState } from 'react';

function LoginForm() {
  const [userKey, setUserKey] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that both userKey and password are provided
    if (!userKey) {
      console.error('Please enter your key');
      return;
    }

    // Assuming you are using the fetch API
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_key: userKey, password: password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
        window.location.href = "/area-de-cliente"
      } else {
        // Handle error, e.g., display error message
        console.error('Login failed:', data.error);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User Key:
        <input type="text" value={userKey} onChange={(e) => setUserKey(e.target.value)} />
      </label>
      <br />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
