import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// import { signin, signup } from '../../actions/auth'

const Auth = () => {

  const [isSignup, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
  // const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // if(isSignup){
    //   dispatch(signup(formData, history))
    // } else {
    //   dispatch(signin(formData, history))
    // }

    console.log(formData)
  }

  const handleChange = (e) => { 
    setFormData({...formData, [e.target.name]: e.target.value })
  }

  const switchMode = () => { setIsSignUp((prevIsSignup) => !prevIsSignup); };

  return (
    <div className=" auth">
      <h5 className=""> { isSignup? 'Sign Up' : 'Sign In' } </h5>
      <form  onSubmit={handleSubmit} className="container" autoComplete="off">
        {
          isSignup && (
            <>
              <div className="input-field">
                <label htmlFor="firstName"> First Name </label>
                <input type="text" name="firstName" id="firstName" onChange={handleChange}/>
              </div>
              <div className="input-field">
                <label htmlFor="lastName"> Last Name </label>
                <input type="text" name="lastName" id="lastName" onChange={handleChange}/>
              </div>
            </>
          )
        }
            <div className="input-field">
                <label htmlFor="email"> Email </label>
                <input type="text" name="email" id="email" onChange={handleChange}/>
              </div>
              <div className="input-field">
                <label htmlFor="password"> Password </label>
                <input type="password" name="password" id="password" onChange={handleChange}/>
              </div>

              { isSignup && 
              <div className="input-field">
                <label htmlFor="confirmPassword"> Confirm Password </label>
                <input type="password" name="confirmPassword" id="confirmPassword"  onChange={handleChange}/>
              </div>
              }
              <button className="btn blue lighten-2" type="submit">{ isSignup? 'Sign Up' : 'Sign In' }</button>
              <br/>
              <div><br/></div>
              <div className="btn z-depth-1 indigo lighten-5 indigo-text text-darken-3" onClick={switchMode}> { isSignup? ' Already Have An Account? Sign In' : "Don't Have An Account? Sign Up" } </div>
              <div><br/></div>
      </form>
    </div>
  )
}

export default Auth
