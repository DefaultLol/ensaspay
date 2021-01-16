import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import PageWrapper from './components/PageWrapper';
import Add from "./pages/Add";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={PageWrapper(Home)} exact/>
          <Route path="/add" component={PageWrapper(Add)} exact />
          <Route path="/login" component={Login} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
