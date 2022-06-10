import React from 'react';
import {View, StyleSheet} from "react-native";
import {Pressable} from "native-base";

const NeomorphButton = ({ children, onPress }) => (
  <Pressable
    p={4}
    w='auto'
    top={10}
    right={6}
    shadow={9}
    rounded='full'
    position='absolute'
    style={styles.buttonOuter}
  >
    <View style={styles.buttonInner}>
      {children}
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  buttonOuter: {
    padding: 8,
    borderRadius: 150,
    shadowOffset: {
      width: 20,
      height: 20
    },
    shadowColor: '#1c1d21',
    shadowOpacity: 1.0,
    shadowRadius: 1,
  },
  buttonInner: {
    borderRadius: 150,
    shadowOffset: {
      width: -20,
      height: -20
    },
    shadowColor: '#24272b',
    shadowOpacity: 1.0,
    shadowRadius: 150,
  }
});

export default NeomorphButton;