import './RegisterForm.css'
import Awan1 from '../../assets/decorationBawahKiri.svg'
import Awan2 from '../../assets/decorationAtasKanan.svg'
import bulet1 from '../../assets/bolaAtasKanan.svg'
import bulet2 from '../../assets/bolaKiri.svg'
import bulet3 from '../../assets/bolaBawahKanan.svg'
import logo from '../../assets/logo.svg'
import {Link} from 'react-router-dom'
//import firebase ke register
import firebase from '../../config/firebase'
import { useState } from 'react'
// import auth from 'firebase/firebase-auth'


const RegisterForm = () =>{

    const [register,setRegister] = useState({
      email : "",
      password : ""
    })

    const handleRegister = (e) =>{
      e.preventDefault()
      firebase
      .auth()
      .createUserWithEmailAndPassword(register.email,register.password)
      .then(user =>{
        alert("user")
      })
      .catch(err=>{
        alert(err)
      })
    }

    return(
        <section className="registerForm">
            <main className="form_wrapper">
      <div className="form_container">
        <div className="left_side">
          <img src={Awan1} alt="" className="decorationAwan1" />
          <img src={Awan2} alt="" className="decorationAwan2" />
          <img src={bulet1} alt="" className="bulet1" />
          <img src={bulet2} alt="" className="bulet2" />
          <img src={bulet3} alt="" className="bulet3" />

          <img src={logo} alt="" className="logoLeft"/>

          <h3 className="welcomeText">WELCOME PAGE</h3>

          <h3 className="loginText"> REGISTER <br /> TO CONTINUE ACCESS</h3>

          <h3 className="namaLeft">RANGGA</h3>
          
        </div>

        <div className="right_side">
          <h1>REGISTER</h1>

          <form className="login_form" onSubmit={handleRegister}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              onChange={(e)=>{
                  setRegister({
                    ...register,
                    email : e.target.value
                  })
                  console.log(register)

              }}
            />
            <div className="gradient_border"></div>

            <input
              autoComplete="true"
              type="password"
              id="password"
              name="password"
              placeholder="password"
              onChange={(e)=>{
                setRegister({
                  ...register,
                  password : e.target.value
                })
                console.log(register)

              }}
            />
            <div className="gradient_border"></div>

            <button type="submit" className="login_button">CONTINUE <i className="fas fa-chevron-right arrow"></i> </button>
          </form>

          <div className="socmed_login">
            <h3>Or Login With</h3>
            <button className="g_login"><i className="fab fa-google-plus-g"></i>Sign In With Google</button>
            <button className="f_login"><i className="fab fa-facebook-f"></i>Sign in With Facebook</button>
           <Link to="/login"><h3>Already have account? Login</h3></Link>
          </div>
        </div>
      </div>
    </main>
        </section>
    )
}

export default RegisterForm