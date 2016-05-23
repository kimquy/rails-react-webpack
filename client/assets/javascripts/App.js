import React, { Component } from 'react';
import ReactDom from 'react-dom';
import AppBar from 'material-ui/AppBar';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class App extends Component {
  render(){
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar
          title="Chọn Trường"
        />
      </MuiThemeProvider>
    );
  }
}

ReactDom.render(<App />, document.getElementById('main-app'));
