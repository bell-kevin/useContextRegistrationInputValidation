import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserContext from '../context/userContext';

const PhoneScreen = () => {
  const userNameCtx = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Verify your phone</Text>
      <Text style={styles.text}>{userNameCtx.phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'darkgreen',
  },
  text: {
    fontSize: 18,
    color: 'darkgreen',
  },
});

export default PhoneScreen;
