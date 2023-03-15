import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserContext from '../context/userContext';

const EmailScreen = () => {
  const userNameCtx = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Verify your email</Text>
      <Text style={styles.text}>{userNameCtx.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'mistyrose',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'darkred',
  },
  text: {
    fontSize: 18,
    color: 'darkred',
  },
});

export default EmailScreen;
