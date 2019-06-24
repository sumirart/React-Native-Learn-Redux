import React,{Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native'

class counter extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
        }
    }
    render(){
        return (
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity 
                    style={{backgroundColor:'green'}}
                    onPress={() => {
                        let count = this.state.counter;
                        this.setState({
                            counter: count + 1,
                        })
                    }}>
                    <Text style={{color:'white'}}>Ini {this.props.title}</Text>
                </TouchableOpacity>
                <Text>{this.state.counter}</Text>
            </View>
        )
    }
}

export default counter;