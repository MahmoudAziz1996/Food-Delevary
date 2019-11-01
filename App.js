import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import Routes from './src/routes/'
console.disableYellowBox = true;
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#E09200" />
      <Routes/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default App;
