
import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Counter from '../Components/counter';
import Header from '../Components/header'

export default class App extends Component {
    static navigationOptions = {
        title: 'Note Note'
    }
  constructor(){
    super();
    this.state = {
      counter: 0
    }
  }
  handleGoBack = () => {
    const {navigation}= this.props; //es6
    navigation.goBack();

    this.props.navigation.goBack();
  }
  componentDidMount = () => {
    setInterval(() => {
      let count = this.state.counter;
      this.setState({
        counter: count + 1,
      })
    },1000)
  }
  // componentWillUnmount = () => {
  //   clearTimeout();
  // }
  render() {
    return (
      <View style={styles.container}>
        <Header title="Ini Note" />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={{color:'blue', fontSize:30}} >Kelas Week 2</Text>{/*Inline Styling */}
        <Text style={{color:'red', fontSize:20}} >{this.state.counter}</Text>
        <Counter title="Hijau COunter" />
        <Counter title={26} />
        <TouchableOpacity onPress={this.handleGoBack} style={{backgroundColor:'blue'}} >
          <Text style={{color:'white'}} >GO BACK</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //flexBox CSS
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
