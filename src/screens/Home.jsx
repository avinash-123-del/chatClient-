import React, { useState } from 'react'
import LoginPage from '../components/LoginPage'
import SignupPage from '../components/SignupPage'

const Home = () => {
    const [isLoginPage , setIsLoginPage]  = useState(true)
  return (
    <div className='pt-[50px]'>

        {isLoginPage ? <LoginPage setIsLoginPage={setIsLoginPage}/> : <SignupPage setIsLoginPage={setIsLoginPage}/>}



    </div>
  )
}

export default Home