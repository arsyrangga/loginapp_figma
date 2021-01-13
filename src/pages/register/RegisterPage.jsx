import './RegisterPage.css'
import bulet1 from "../../assets/bulet1.svg";
import bulet2 from "../../assets/bulet2.svg";
import bulet3 from "../../assets/bulet3.svg";
import bulet4 from "../../assets/bulet4.svg";
import RegisterForm from '../../components/registerform/RegisterForm' 

const RegisterPage = () =>{
    return(
        <section className="registerPage">
            <RegisterForm />
      <img src={bulet1} alt="buletan pertama" className="bulets1" />
      <img src={bulet2} alt="buletan kedua" className="bulets2" />
      <img src={bulet3} alt="buletan ketiga" className="bulets3" />
      <img src={bulet4} alt="buletan keempat" className="bulets4" />

        </section>
    )
}

export default RegisterPage