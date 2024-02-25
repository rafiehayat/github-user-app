import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserList = () => {
    const [userData, setUserData] = useState([])
    const [error,setError] = useState(null)

    const fetchUserData = async () => {
        try {
           const response = await axios.get("https://api.github.com/users") 
           setUserData(response.data)
        } catch (err) {
            setError("Error Fetching data from Github API")  
        }
    }

    useEffect(()=>{
        fetchUserData()
    }, [])
  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {userData.map((user)=> (
            <li key={user.id}>
                <img src={user.avatar_url} alt={user.login}/>
                <p>Username :{user.login}</p>
                <p>URL :{user.url}</p>
                <p>Followers: {user.followers_url}</p>
                <p>Followings: {user.following_url}</p>
                <p>Repositories: {user.repos_url}</p>
            </li>
        ))}
      </ul>
    </>
  )
}

export default UserList
