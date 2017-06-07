import React from 'react';
import {
        BrowserRouter as Router,
        Route,
        Link
    } from 'react-router-dom';

import HomeApp from './home/components/App.js';
import ConfigApp from './configList/components/App.js';
import StringToolsApp from './stringTools/components/App.js';

var Routes = function(){
    var host = location.protocol + "//" + window.location.host;
    return <Router>
        <div>
            <Route exact path="/index.html" component={HomeApp}/>
            <Route path="/qzstring/index.html" component={StringToolsApp}/>
            <Route path="/qzstring/config.html" component={ConfigApp}/>
        </div>
    </Router>;
};

export default Routes;
