
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { 
  BrowserRouter, 
  Route, 
  Switch,
  Redirect
} from "react-router-dom";
import { 
  Paper,
  Container
} from '@material-ui/core';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import MainPage from './views/MainPage/MainPage';
import FilmPage from './views/FilmPage/FilmPage';
import NotFoundPage from './views/NotFoundPage/NotFoundPage';
import SignUpPage from './views/SignUpPage/SignUpPage';
import SignInPage from './views/SignInPage/SignInPage';
import allUserActions from '../src/actions/userActions';

import './style/mainStyles.scss';

const App = () => {
  const { setUserAction, setLoadingFalseAction } = allUserActions;
  const dispatch = useDispatch();
  const { userInfo, isLoading } = useSelector((state) => state.userReducer);

  React.useEffect(() => {
    if(localStorage.getItem('token')){
      dispatch(setUserAction({
        email: localStorage.getItem('email'),
        password: localStorage.getItem('password'),
        isAuth: true,
      }));
    } else {
      dispatch(setLoadingFalseAction());
    }
  }, [dispatch, setLoadingFalseAction, setUserAction ]);

  const logoutUser = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }

  return (
    <BrowserRouter> 
      <div className="App">

        <NavBar userInfo={userInfo} logoutUser={logoutUser} />

        <Container maxWidth="lg" className='content' component={Paper}>
          <Switch>

            <Route exact path="/">
              {userInfo.isAuth || isLoading ? <MainPage /> : <Redirect to="/auth" />}
            </Route>
            <Route path="/film/:id">
              {userInfo.isAuth || isLoading ? <FilmPage /> : <Redirect to="/auth" />}
            </Route>
            <Route path="/auth" >
              {userInfo.isAuth ? <Redirect to="/" /> : <SignUpPage />}
            </Route>
            <Route path="/signIn" >
              {userInfo.isAuth ? <Redirect to="/" /> : <SignInPage />}
            </Route>

            <Route component={NotFoundPage} />

          </Switch>
        </Container>

        <Footer />

      </div>
    </BrowserRouter>
  );
};

export default App;
