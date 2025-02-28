import React from 'react'
import { useParams } from 'react-router'
function User() {
    const {userid} = useParams()
  return (
    <div className='text-2xl text-center bg-orange-600 rounded-xl'>User: {userid}</div>
  )
}

export default User