/* eslint-disable react-native/no-inline-styles */
/* eslint-disable handle-callback-err */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  AsyncStorage,
  ActivityIndicator,
  Text,
  ScrollView,
} from 'react-native';
import Contact from '../components/Contact';

class OldApplication extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
          <View style={styles.screen}>
            <Contact title="Testing mode"  />
            <Contact title="Testing Venkat"  />
            <Contact title="Testing Venkat"  />
            <Contact title="Testing Venkat"  />
            <Contact title="Testing Venkat"  />
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
});

export default OldApplication;

