import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Dashboard from './src/pages/Dashboard'
import Report from './src/pages/Report'
import Rewards from './src/pages/Rewards'

const TabNavigator = createBottomTabNavigator({
  Missões: { screen: Dashboard },
  Reportar: { screen: Report },
  Recompensas: { screen: Rewards },
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Icon;
      let iconName;
      if (routeName === 'Missões') {
        iconName = `check`;
        // Sometimes we want to add badges to some icons.
        // You can check the implementation below.
      } else if (routeName === 'Reportar') {
        iconName = `bullhorn`;
      } else if (routeName === 'Recompensas') {
        iconName = `star`;
      }
      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#388e3c',
    inactiveTintColor: 'gray',
  },
});




export default createAppContainer(TabNavigator);


