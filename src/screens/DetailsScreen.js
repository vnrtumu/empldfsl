import React, {Component}  from 'react';
import { View, Text } from 'react-native';

class DetailsScreen extends Component{
    static navigationOptions = ({ navigation }) => {
        const profileName = navigation.getParam('profileName');
    };
    render(){
        return(
            <View>
                <Text>Hi i am DetailsScreen screen {profileName}</Text>
            </View>
        );
    }
}

export default DetailsScreen;

