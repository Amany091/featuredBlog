import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <section>
      <div className='container'>
        <button
          onClick={()=> navigate('blog')}
          className='bg-orange-300 hover:bg-orange-500 p-2 rounded-lg text-black block my-3 mx-auto ' >go to blog</button>
      </div>
    </section>
  )
}

export default HomePage
