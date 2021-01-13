import "./LoginForm.css";
import Awan1 from '../../assets/decorationBawahKiri.svg'
import Awan2 from '../../assets/decorationAtasKanan.svg'
import bulet1 from '../../assets/bolaAtasKanan.svg'
import bulet2 from '../../assets/bolaKiri.svg'
import bulet3 from '../../assets/bolaBawahKanan.svg'

import logo from '../../assets/logo.svg'

const LoginForm = () => {
  return (
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

          <h3 className="loginText">SIGN IN <br /> TO CONTINUE ACCESS</h3>

          <h3 className="namaLeft">RANGGA</h3>
          
        </div>

        <div className="right_side">
          <h1>Sign In</h1>

          <form className="login_form">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email Address"
            />
            <div className="gradient_border"></div>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
            />
            <div className="gradient_border"></div>

            <button className="login_button">CONTINUE <i class="fas fa-chevron-right arrow"></i> </button>
          </form>

          <div className="socmed_login">
            <h3>Or Login With</h3>
            <button className="g_login"><i class="fab fa-google-plus-g"></i>Sign In With Google</button>
            <button className="f_login"><i class="fab fa-facebook-f"></i>Sign in Wit Facebook</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
