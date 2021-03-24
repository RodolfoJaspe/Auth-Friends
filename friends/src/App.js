import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';
import FriendForm from './components/FriendForm';

function App() {
  return (
    <Router>
        <div className="App">
            Friends
            <ul>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to="/protected">Friends</Link>
                </li>
                <li>
                    <Link to="/newFriend">Add a friend</Link>
                </li>
                <li>
                    <Logout />
                </li>
            </ul>
            <Switch>   
                <PrivateRoute exact path="/protected" component={FriendsList} />
                <Route path='/login' component={Login} />
                <PrivateRoute path='/newFriend' component={FriendForm} />
                <Route component={Login} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;
