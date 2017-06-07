import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppTemplate from '../../sharedComponents/AppTemplate.js';

var App = function({request}){
    return <AppTemplate>
        <section className="content">
            <div className = "box box-solid">
                <div className="box-body">
                    # Fendy3002 github page
                </div>
            </div>
        </section>
    </AppTemplate>;
};

var mapStateToProps = function(state){
    return {
        request: state.request
    };
};

var mapDispatchToProps = function(dispatch, getState){
    return {
        
    };
};
var StateApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default StateApp;
