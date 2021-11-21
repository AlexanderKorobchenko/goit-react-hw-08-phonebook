import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Container from './components/Container';
import Home from './views/HomeView';
import Contacts from './views/ContactsView';
import Login from './views/LoginView';
import Signup from './views/SignupView';
import { authOperations, authSelectors } from './redux/auth';

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      {isFetchingCurrentUser ? (
        <h2>Loading...</h2>
      ) : (
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/contacts">
            <Contacts />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Signup />
          </Route>
        </Switch>
      )}
    </Container>
  );
}

export default App;
