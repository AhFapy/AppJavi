import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ClientArea() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication when the component mounts
    const checkAuthentication = async () => {
      try {
        // Make a request to your backend to check if the user is authenticated
        const response = await fetch('http://localhost:3000/auth/check-auth', {
          method: 'GET',
          credentials: 'include', // Include credentials for cross-origin requests
        });

        if (response.ok) {
          // If the response is okay, the user is authenticated
          console.log('User is authenticated');
        } else {
          // If the response is not okay, the user is not authenticated
          console.log('User is not authenticated');
          navigate('/'); // Redirect to the root route
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        navigate('/'); // Redirect to the root route in case of an error
      }
    };

    checkAuthentication();
  }, [navigate]);

  return (
    <div>
      Welcome to the client area!
    </div>
  );
}

export default ClientArea;
