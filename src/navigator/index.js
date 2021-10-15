import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Header from '../components/Header';
import {NavigationContainer} from '@react-navigation/native';
import List from '../components/List';
import {ALL_PLANS} from '../constants/misc';
import {TAB_WIDTH} from '../constants/dimensions';
import {colors} from '../constants/colors';

const {height, width} = Dimensions.get('screen');
const Tab = createMaterialTopTabNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.screen}>
        <Header />
        <Tab.Navigator
          screenOptions={{
            tabBarItemStyle: styles.tabBarItemStyle,
            tabBarActiveTintColor: '#263238',
            tabBarScrollEnabled: true,
            tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
            tabBarPressColor: colors.white,
            tabBarStyle: styles.tabBarStyle,
          }}>
          {Object.keys(ALL_PLANS).map(planCategory => {
            return (
              <Tab.Screen
                name={planCategory}
                component={List}
                key={planCategory}
              />
            );
          })}
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  tabBarItemStyle: {width: TAB_WIDTH},
  tabBarIndicatorStyle: {
    backgroundColor: colors.brandPrimary,
    height: 4,
    width: TAB_WIDTH * 0.8,
    alignSelf: 'center',
    marginHorizontal: TAB_WIDTH * 0.1,
  },
  tabBarStyle: {
    backgroundColor: colors.white,
    marginHorizontal: 0,
    elevation: 1,
    overflow: 'visible',
  },
});
