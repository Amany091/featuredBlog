import React from 'react'

const FooterPage = () => {
  return (
    <section className='bg-black p-2 h-96 '>
      <div className="container h-full flex " style={{alignItems:'center'}}>
        <div className='bg-blend-darken grid md:grid-cols-3 grid-cols-1 ' >
          <div className="comapany_info">
            <h1>Lorem ipsum</h1>
            <p className='text-slate-500 mt-2' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus pariatur rerum praesentium! Debitis consequatur maxime recusandae, ducimus cum iure! Enim.</p>
          </div>
          <div className="company_links flex justify-between md:w-1/2 my-2 w-full mx-auto">
            <ul className='company_about'>
              <li className='font-bold ' >About</li>
              <li>About us</li>
              <li>Blog</li>
              <li>Career</li>
            </ul>
            <ul className="companysupport">
              <li className='font-bold'>Support</li>
              <li>Contact us</li>
              <li>Return</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="company_update">
            <p className="font-bold my-2 ">Get updates</p>
            <input type="email" placeholder='enter your email' className='p-1 w-80' />
            <button className='bg-slate-100 p-1 rounded  text-black' >Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FooterPage
