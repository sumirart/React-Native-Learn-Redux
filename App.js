import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './src/Screens/Home';
import Note from './src/Screens/Note';

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

const appContainer = createAppContainer(AppNavigator);
export default appContainer;