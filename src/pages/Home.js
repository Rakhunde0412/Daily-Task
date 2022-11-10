import React from 'react'
import AppointmentsTable from '../components/appoinment/AppointmentsTable'
import UserDetailForm from '../components/appoinment/UserDetailForm'

const Home = () => {
  return (
    <>
      <UserDetailForm/>
      <AppointmentsTable/>
    </>
  )
}

export default Home
