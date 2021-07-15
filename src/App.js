import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
//import Navigation from './components/Navigation'
const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;