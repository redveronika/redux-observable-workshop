import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Action } from './app.helpers';
import { FETCH } from './reducers/temperature.reducer';
import { Icon } from './icon.component';
import { Loader } from './loader.component';
import { StatsTable } from './stats-table.component';

import './app.style.scss';




class App extends Component {

  render() {
    return (
        <div className="App">
          <div className="">
          </div>
          <div className="navbar navbar-default">
            <div className="container">

              <div className="navbar-header">
                <div className="navbar-brand">
                  Weather monitor X9000 {this.props.state.temperature.value}
                </div>
              </div>

              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a>
                      <Icon type="fa" name="pause" />
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          <div className="container">

            <div className="panel panel-default" onClick={this.props.handleTestClick}>
              <div className="panel-body">
                <div className="x8 text-warning text-center">
                  <Icon name="day-snow-thunderstorm" />
                </div>
              </div>
            </div>


            <div className="row">

              <div className="col-xs-12 col-sm-4">
                <div className="panel panel-default">
                  <div className="panel-body relative">
                    <div className="corner">
                      <Loader/>
                    </div>
                    <div className="x5">
                      <Icon name="thermometer" className="text-center"/>
                      25 &deg;C
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-4">
                <div className="panel panel-default">
                  <div className="panel-body relative">
                    <div className="corner">
                      <Loader/>
                    </div>
                    <div className="x5">
                    <Icon name="question" type="fa"/>
                    -- m/s
                  </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-4">
                <div className="panel panel-default">
                  <div className="panel-body relative">
                    <div className="corner">
                      <Loader/>
                    </div>
                    <div className="x5">
                    <Icon name="smog"/>
                    25%
                  </div>
                  </div>
                </div>
              </div>

            </div>


            <div className="panel panel-default">
              <div className="row">

                <div className="col-xs-12 col-sm-4">
                  <StatsTable/>
                </div>

                <div className="col-xs-12 col-sm-4">
                  <StatsTable/>
                </div>

                <div className="col-xs-12 col-sm-4">
                  <StatsTable/>
                </div>

              </div>
            </div>


          </div>
        </div>
    );
  }
};


const mapStateToProps = (state) => {
  return { state };
};


const mapDispatchToProps = (dispatch) => {
  return {
    handleTestClick() {
      dispatch(Action(FETCH));
    },
  };
};


const connectedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);


export { connectedApp as App };