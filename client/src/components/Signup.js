import React from 'react'
import Sign from '../images/signup.png'

const Signup = () => {
  return (
    <div>
       <section className='signup'>
        <div className='row'>
          <div className='col-12 col-sm-8'>
            <h2 className='form-title'>Signup</h2>
            <form className='registration-form'>
              <div >
              <label htmlFor='name'><i class="fa-solid fa-user"></i></label>
              <input type='text' name="name" id="name" autoComplete="off" placeholder="Your Name"/>
              </div>
              <div >
              <label htmlFor='name'><i class="fa-solid fa-envelope"></i></label>
              <input type='text' name="name" id="name" autoComplete="off" placeholder="Your Name"/>
              </div>
              <div >
              <label htmlFor='name'><i class="fa-solid fa-user"></i></label>
              <input type='text' name="name" id="name" autoComplete="off" placeholder="Your Name"/>
              </div>
              <div >
              <label htmlFor='name'><i class="fa-solid fa-user"></i></label>
              <input type='text' name="name" id="name" autoComplete="off" placeholder="Your Name"/>
              </div>
              <div >
              <label htmlFor='name'><i class="fa-solid fa-user"></i></label>
              <input type='text' name="name" id="name" autoComplete="off" placeholder="Your Name"/>
              </div>
              <div >
              <label htmlFor='name'><i class="fa-solid fa-user"></i></label>
              <input type='text' name="name" id="name" autoComplete="off" placeholder="Your Name"/>
              </div>

              
            </form>

          </div>
          <div className='col-12 col-sm-4'>
          <img className='sign-image' src={Sign} />

          </div>

        </div>


       </section>
      
    </div>
  )
}

export default Signup
