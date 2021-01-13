import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/register">
            <h1>register</h1>
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
