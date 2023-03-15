import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import UserContext from '../context/userContext';

const EmailScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const userNameCtx = useContext(UserContext);

  const handleEmailChange = (email) => {
    setEmail(email);
    userNameCtx.setEmail(email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter your email</Text>
      <TextInput
        style={styles.input}
        placeholder="example@example.com"
        value={email}
        onChangeText={handleEmailChange}
      />
      <Button
        title="Next"
        onPress={() => navigation.navigate('Validation')}
      />
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
  input: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: 'darkred',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
});

export default EmailScreen;
