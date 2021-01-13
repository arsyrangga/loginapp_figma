import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from './pages/register/RegisterPage'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>


          <Route path="/register">
            <RegisterPage />
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
