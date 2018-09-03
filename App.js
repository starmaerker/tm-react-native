import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AddEntry from './components/AddEntry';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import History from './components/History'
import { createMaterialTopTabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
import { lightPurp } from './utils/colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';

function Home() {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
    </View>
  )
}

function Dashboard() {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
    </View>
  )
}

const Tabs = createMaterialTopTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: () => <FontAwesome name='home' size={30} color='black' />
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      tabBarIcon: () => <FontAwesome name='dashboard' size={30} color='black' />
    }
  }
})

export default class App extends React.Component {
  state = {
    value: 0
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>        
        <View style={{flex: 1}}>
          <View style={{height: 20}} />
          <Tabs />
          <History />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightPurp,
  }
})

