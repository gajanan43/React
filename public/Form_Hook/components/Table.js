import React from 'react'
import { useEffect,useState } from 'react'

function Table() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(data);

    }, [])


  return (
    <div className='container mt-5'>
      <table className='table'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                </tr>
              ))}

        </tbody>
      </table>
    </div>
  )
}

export default Table
