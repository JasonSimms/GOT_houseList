import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import Landing from './components/Landing'
import Landing from './Landing'
import NotFound from './components/NotFound'
import HouseList from "./components/house_list"



class Application extends React.Component {
  render() {
    return (
        <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/main" component={HouseList} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
    );
  }

}

export default Application;