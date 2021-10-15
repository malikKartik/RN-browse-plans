import {useRoute} from '@react-navigation/core';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {colors} from '../../constants/colors';
import {ALL_PLANS} from '../../constants/misc';
import ListItem from '../ListItem';

const List = () => {
  const route = useRoute();
  const plans = ALL_PLANS[route.name];
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {plans.map(plan => {
          return <ListItem data={plan} />;
        })}
      </ScrollView>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {backgroundColor: colors.white, paddingBottom: 20},
});
