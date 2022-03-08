import React from 'react';
import { Text, View } from 'react-native';

class MyComponent extends React.Component {
  state =  {
    year: 1986  ,
    name: 'Angel Asenjo',
    colors: ['blue']
  }

  updateYear() {
    this.setState({
      year:2017
    })
  }

  render () {
    return (
      <View>
        <Text>My name is: { this.state.name }</Text>
        <Text onPress={() => this.updateYear()}>The year is: { this.state.year }</Text>
        <Text>My colors are: { this.state.colors[0] }</Text>
      </View>
    )
  }

}

export default MyComponent;