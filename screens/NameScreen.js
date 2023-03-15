import React, { useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import UserContext from '../context/userContext';

const NameScreen = ({ navigation }) => {
  const { firstName, lastName, setFirstName, setLastName } = useContext(UserContext);

  const handleFirstNameChange = (text) => {
    setFirstName(text);
  };

  const handleLastNameChange = (text) => {
    setLastName(text);
  };

  return (
    <View style={styles.contentContainer}>
      <Text style={styles.textContent}>Enter your name</Text>
      <TextInput
        style={styles.textInput}
        placeholder="First Name"
        value={firstName}
        onChangeText={handleFirstNameChange}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Last Name"
        value={lastName}
        onChangeText={handleLastNameChange}
      />
      <Button
        title="Next"
        onPress={() => navigation.navigate("Phone")}
      />
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
  textInput: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: 'blue',
    marginVertical: 8,
    paddingHorizontal: 10,
    fontSize: 18,
  },
});

export default NameScreen;
