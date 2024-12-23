import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Users() {
    const [users, setUsers] = useState([{
        Name: "Sneh", Email: 'sneh@gmail.com', Age: 22 
    }])
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">Add</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index) => { 
                        return <tr key={index}>
                            <td>{user.Name}</td>
                            <td>{user.Email}</td>
                            <td>{user.Age}</td>
                            <td>
                                {/* <button className='btn btn-primary'>Edit</button> */}
                                <Link to="/update" className="btn btn-primary">Edit</Link>
                                <button className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                        
                    }) 
                }
            </tbody>
        </table>
      </div>
    </div>
  )
}
