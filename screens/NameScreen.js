import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserContext from '../context/userContext';

const NameScreen = () => {
  const userNameCtx = useContext(UserContext);

  return (
    <View style={styles.contentContainer}>
      <Text style={styles.textContent}>Verify your name</Text>
      <Text style={styles.text}>{userNameCtx.firstName} {userNameCtx.lastName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  textContent: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'blue',
  },
  text: {
    fontSize: 18,
    color: 'blue',
  },
});

export default NameScreen;
