import React, { useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { UserContext } from '../context/userContext';

const PhoneScreen = ({ navigation }) => {
  const userContext = useContext(UserContext);

  const setPhone = (phone) => {
    userContext.setPhone(phone);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter your phone</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone number"
        keyboardType="numeric"
        value={userContext.phone}
        onChangeText={setPhone}
      />
      <Button
        title="Next"
        onPress={() => navigation.navigate('Email')}
      />
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
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'darkgreen',
    borderRadius: 5,
    padding: 10,
    marginBottom: 16,
    fontSize: 18,
    color: 'darkgreen',
  },
});

export default PhoneScreen;
