import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

const Button = () => (
  <TouchableHighlight>
    <Text>Hola</Text>
  </TouchableHighlight>
)

const YourApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Esta es una prueba de Angel</Text>
      <Button />
    </View>
  );
}

export default YourApp;