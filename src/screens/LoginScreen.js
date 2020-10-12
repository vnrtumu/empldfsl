import React, {Component}  from 'react';
import { View, Text } from 'react-native';

export default class LoginScreen extends Component{
    render(){
        return(
            <View>
                <Text>Hi i am LoginScreen screen</Text>
                <Button
                    title="Go to Login"
                    onPress={() => this.props.navigation.navigate('BottomTab')}
                />
            </View>
        );
    }
}

