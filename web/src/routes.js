import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './Pages/Home'
import Login from './Pages/Login'
import Browse from './Pages/Browse'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login} />
                <Route path="/browse" component={Browse} />
            </Switch>
        
        </BrowserRouter>
    )
}