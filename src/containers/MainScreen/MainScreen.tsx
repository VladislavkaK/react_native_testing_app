import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const MainPage = (): any => {
  const onPressDetails = () => {
    console.log();
  };

  return (
    <View style={styles.viewStyles}>
      <Text style={styles.textStyles}>
        Meduza Фейк
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default MainPage;
