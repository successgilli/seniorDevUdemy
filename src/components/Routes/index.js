import React, { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
const App = lazy(() => import('../../containers/App/App'));

const Routes = () =>
    <Router>
        <Suspense fallback = {<h1>Loading Robots...</h1>}>
            <Switch>
                <Route exact path='/' component={() => <h1>Home</h1>} />
                <Route path='/robots' component={App} />
            </Switch>
        </Suspense>
    </Router>


export default Routes;
