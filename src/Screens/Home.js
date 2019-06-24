
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Counter from '../Components/counter'

export default class App extends Component {
    static navigationOptions = {
        title: 'Home Note'
    }
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }
    handleNavigate = () => {
        const { navigation } = this.props;
        navigation.navigate('Note')
    }
    componentDidMount = () => {
        setInterval(() => {
            let count = this.state.counter;
            this.setState({
                counter: count + 1,
            })
        }, 1000)
    }
    // componentWillUnmount = () => {
    //   clearTimeout();
    // }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={{ color: 'blue', fontSize: 30 }} >Kelas Week 2</Text>{/*Inline Styling */}
                {this.state.counter > 10 && <Text style={{ color: 'red', fontSize: 20 }} >{this.state.counter}</Text>}
                <Counter title="Hijau COunter" />
                <Counter title={26} />
                <TouchableOpacity onPress={this.handleNavigate} style={{ backgroundColor: 'blue' }} >
                    <Text style={{ color: 'white' }} >Note Me</Text>
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
