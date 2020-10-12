import React, {Component}  from 'react';
import { View, Text, Button } from 'react-native';

export default class OldApplication extends Component{
    render(){
        return(
            <View>
                <Text>Hi i am OldApplication screen</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
        );
    }
}

