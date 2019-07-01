import React, { Component } from 'react';
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider } from 'react-redux' // import to wrap component in redux

// screens
import Home from './src/Screens/Home';
import Note from './src/Screens/Note';

// import store
import store from './src/public/redux/store';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Note: {
    screen: Note,
  } 
},{
  defaultNavigationOptions: {
    title:'Note'
  }
});

const AppContainer = createAppContainer(AppNavigator);

// wrap all component with redux Provider and the store
export default class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

// export default appContainer;