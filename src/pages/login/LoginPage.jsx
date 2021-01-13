import "./LoginPage.css";
import bulet1 from "../../assets/bulet1.svg";
import bulet2 from "../../assets/bulet2.svg";
import bulet3 from "../../assets/bulet3.svg";
import bulet4 from "../../assets/bulet4.svg";
import LoginForm from "../../components/loginform/LoginForm";

const LoginPage = () => {
  return (
    <main className="login_page">
      <LoginForm />
      <img src={bulet1} alt="buletan pertama" className="bulet1" />
      <img src={bulet2} alt="buletan kedua" className="bulet2" />
      <img src={bulet3} alt="buletan ketiga" className="bulet3" />
      <img src={bulet4} alt="buletan keempat" className="bulet4" />
    </main>
  );
};

export default LoginPage;
