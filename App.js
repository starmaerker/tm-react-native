import React from 'react';
import { Text, View, StyleSheet, Slider } from 'react-native';
import AddEntry from './components/AddEntry';

export default class App extends React.Component {
  state = {
    value: 0
  }
  render() {
    return (
      <View style={styles.container}>
        <AddEntry />
        <Slider
          minimumValue={-10}
          maximumValue={10}
          step={1}
          value={this.state.value}
          onValueChange={(value) => this.setState(() => ({ value }))}
        />
        <Text>
          Value : {this.state.value}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
  }
})