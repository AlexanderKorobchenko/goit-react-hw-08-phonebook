import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Container from './components/Container';
import Home from './views/HomeView';
import Contacts from './views/ContactsView';
import Login from './views/LoginView';
import Signup from './views/SignupView';

function App() {
  return (
    <Container>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/contacts" exact>
          <Contacts />
        </Route>

        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/signup" exact>
          <Signup />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
