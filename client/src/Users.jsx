import React from 'react'

export default function Users() {
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className="w-50 bg-white rounded p-3">
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
        </table>
      </div>
    </div>
  )
}
