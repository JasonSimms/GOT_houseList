import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import Application from './Application';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Landing from './Landing'
import NotFound from './components/NotFound'




import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<BrowserRouter>
<div>

<Switch>
               <Route exact path="/" component={Landing} />
                <Route path="/main" component={Application} />
                <Route component={NotFound} />
            </Switch>
</div>

</BrowserRouter>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
