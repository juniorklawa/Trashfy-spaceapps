import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Dashboard from './src/pages/Dashboard'
import Report from './src/pages/Report'
import Rewards from './src/pages/Rewards'
import Mission from './src/pages/Mission'

const TabNavigator = createBottomTabNavigator({
  Missões: Dashboard,
  Reportar: Report,
  Recompensas: Rewards,
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Icon;
      let iconName;
      if (routeName === 'Missões') {
        iconName = `check`;
      } else if (routeName === 'Reportar') {
        iconName = `bullhorn`;
      } else if (routeName === 'Recompensas') {
        iconName = `star`;
      }
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#388e3c',
    inactiveTintColor: 'gray',
  },
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator, navigationOptions: {
      header: null
    }
  },
  Mission: Mission
});




export default createAppContainer(AppNavigator);