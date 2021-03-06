// @flow
import React from 'react';
import {StyleSheet, Button, View} from 'react-native';

import type {Route} from '../types/Routes';

type Props = {
  navigateTo: (newRoute: Route) => void;
  goBack: () => void;
};

export const Home = (props: Props) => {
  const {navigateTo} = props;
  return (
    <View style={styles.container}>
      <Button onPress={() => navigateTo('SEARCH')} title="Search Images" />
      <Button onPress={() => navigateTo('FAVORITES')} title="Favorites" />
    </View>
  );
};

let styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
