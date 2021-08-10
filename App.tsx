// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; // , ImageBackground
// const image = { uri: './assets/app/rio.jpg'}

export default function App() {
  return (
    // <ImageBackground source={image} resizeMode="cover" style={styles.background}>
    // </ImageBackground>
      <View style={styles.container}>
        <Text style={styles.text}>Hello, I'm <Text style={{color: 'green'}}>Informed</Text></Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cccccc',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: 200
  },
  text:{
    fontSize: 30  
  }
});
