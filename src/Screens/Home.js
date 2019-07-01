
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
// import Counter from '../Components/counter'
import axios from 'axios';

// import connect to connect with redux store
import { connect } from 'react-redux';

// import action
import { getNotes } from '../public/redux/action/notes'

class App extends Component {
    static navigationOptions = {
        title: 'Home Note'
    }
    constructor() {
        super();
        this.state = {
            counter: 0,
            data: []
        }
    }
    
    handleNavigate = () => {
        const { navigation } = this.props;
        navigation.navigate('Note')
    }

    // fetch data by dispatching an action from redux
    fetchData = () => {
        this.props.dispatch(getNotes());
    }

    componentDidMount = () => {
        this.fetchData();
        // axios.get('https://randomuser.me/api?results=10')
        //     .then(response => {
        //         console.log(response.data.results)
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }
    // componentWillUnmount = () => {
    //   clearTimeout();
    // }

    // key extractor for FlatList with data from randomusers
    _keyExtractor = (item, index) => item.login.uuid;

    // render component for FlatList
    renderItem = ({ item }) => (
        <View>
            <View style={styles.card}>
                <Text>{ item.name.title } { item.name.first } { item.name.last }</Text>
                <Text>{ item.gender }</Text>
            </View>
        </View>
    )

    render() {
        // log redux store
        console.log("this.props.notes:")
        console.log(this.props.notes)

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                {
                    this.props.notes.isLoading ?
                     <ActivityIndicator size="large" color="#00ff00" /> : 
                     this.props.notes.isError ? 
                        <Text>Error, please try again!</Text>
                        :
                        (
                            <FlatList 
                                data={this.props.notes.data} 
                                keyExtractor={this._keyExtractor} 
                                renderItem={this.renderItem} 
                                // refreshing={} 
                                // onRefresh={}
                            />
                        )
                }
            </View>
        );
    }
}

// map state to props to referring data in store
const mapStateToProps = state => {
    return {
        notes: state.notes
        // auth: state.auth
    }
}

// connect with redux,first param is map and second is component
export default connect(mapStateToProps)(App)

const styles = StyleSheet.create({
    container: {
        flex: 1, //flexBox CSS
        // justifyContent: 'center',
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
    card: {
        width: 400,
        height: 150,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
