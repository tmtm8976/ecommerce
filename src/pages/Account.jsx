import React, { useContext, useEffect, useState } from 'react'
import { gState } from '../context/Context'
import { getSingleUser } from '../services/user.service'

export const Account = () => {
  const {data} = useContext(gState)
  const [userSetting, setUserSetings] = useState(null)

  const {userData} = data
  const {id} = userData
  const getUserById = async (id) =>{
    const user = await getSingleUser(id)
    setUserSetings(user)
  }

  useEffect(()=>{
    getUserById(id)
  },[])

  return (
    <div>{JSON.stringify(userSetting)}</div>
  )
}
