import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

const ValidationScreen = ({ navigation }) => {
  const [isDataCorrect, setIsDataCorrect] = useState(false);

  const handleConfirm = () => {
    setIsDataCorrect(true);
    Alert.alert(
      'Data Confirmed',
      'Thank you for confirming the data.',
      [{ text: 'OK', onPress: () => navigation.popToTop() }]
    );
  };

  const handleReject = () => {
    setIsDataCorrect(false);
    Alert.alert(
      'Data Not Confirmed',
      'Please verify the data again.',
      [{ text: 'OK', onPress: () => {} }]
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'tan' }}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>First Name Last Name</Text>
        <Text style={{ fontSize: 16, marginBottom: 20 }}>Phone Number: (123) 456-7890</Text>
        <Text style={{ fontSize: 16, marginBottom: 20 }}>Email: email@example.com</Text>
        <Text style={{ fontSize: 16, marginBottom: 20 }}>Is the above info. correct?</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#800080',
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 5,
            marginRight: 10,
            width: '40%',
            alignItems: 'center',
          }}
          onPress={handleConfirm}
        >
          <Text style={{ color: '#fff', fontSize: 16 }}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#800080',
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 5,
            width: '40%',
            alignItems: 'center',
          }}
          onPress={handleReject}
        >
          <Text style={{ color: '#fff', fontSize: 16 }}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ValidationScreen;
