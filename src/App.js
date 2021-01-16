import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import PageWrapper from './components/PageWrapper';
import Add from "./pages/Add";
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SecuredRoutes from "./security/SecuredRoutes";


function App() {
  return (
    <>
      <div id="wrapper">
        <Router>
          <Sidebar />
          <div id="page-wrapper" class="gray-bg">
          <Navbar />
            <div class="wrapper wrapper-content">
              <Route exact path="/login" component={Login} />
              <Switch>
                <SecuredRoutes
                  exact
                  path="/"
                  component={Home}
                ></SecuredRoutes>
                <SecuredRoutes
                  exact
                  path="/add"
                  component={Add}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
