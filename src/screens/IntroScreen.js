import React, {Component}  from 'react';
import { View, Text, Button} from 'react-native';

export default class IntroScreen extends Component{
    render(){
        return(
            <View>
                <Text>Hi i am intro screen</Text>
                <Button
                    title="Go to Login"
                    onPress={() => this.props.navigation.navigate('Login')}
                />
            </View>
        );
    }
}

