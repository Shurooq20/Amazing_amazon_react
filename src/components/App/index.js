import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductIndexPage from '../ProductIndexPage';
import ProductShowPage from '../ProductShowPage';
import NewProductPage from '../NewProductPage';
import SignInPage from '../SignInPage';
import { User } from '../../requests';
import NavBar from '../NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  getUser() {
    // 1) fire off an api request to get information about the current logged in user.
    // 2) when it gets a response update the state with the user information
    User.current().then(data => {
      // console.log(data)
      this.setState((state) => {
        return {
          currentUser: data
        }
      })
    });
  }

// class App extends Component {

//     componentDidMount() {
//         fetch(`http://localhost:3000/api/v1/session`, {
//           method: 'POST',
//           credentials: 'include',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             email: 'js@winterfell.gov',
//             password: 'supersecret'
//           })
//         })
//           .then(res => res.json())
//           .then(user => console.log(user));
//       }

    render() {
        return(
            <BrowserRouter>
                <main>
                <NavBar currentUser={this.state.currentUser} hello="World"/>
                <Switch>
                <Route path='/products' exact component={ ProductIndexPage }/>
                <Route path='/products/new' component={ NewProductPage } />
                <Route path='/products/:id' component={ ProductShowPage } />
                <Route path="/sign_in" component={SignInPage} />  
                </Switch>    
                </main>
            </BrowserRouter>
        )
    }
}

export default App