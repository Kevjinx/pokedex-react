import React, { useEffect, useState } from 'react';



const UserID = props => {
  const [user, setUser] = useState([]);
  const [userLoaded, setUserLoaded] = useState(false);
  const fetchUser = async () => {
    try {
      let response = await fetch('https://randomuser.me/api');
      let json = await response.json();
      return { success: true, data: json };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  }
  useEffect(() => {
    (async () => {
      setUserLoaded(false);
      let res = await fetchUser();
      if (res.success) {
        setUser(res.data.results[0]);
        setUserLoaded(true);
      }
    })();
  }, []);
  return (
    <div>
      {userLoaded ? (
        <div>
          <ul>
            <li><strong>First name:</strong> {user.name.first}</li>
            <li><strong>Last name:</strong> {user.name.last}</li>
            <li><strong>Email:</strong> {user.email}</li>
          </ul>
        </div>
      ) : (
        <p>No user found, please try again</p>
      )}
    </div>
  );
}
export default UserID;
