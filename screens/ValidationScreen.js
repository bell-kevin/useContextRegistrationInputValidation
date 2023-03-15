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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Validation Screen</Text>
      <Text style={{ fontSize: 16, marginVertical: 20 }}>
        Please verify the following data:
      </Text>
      <Text>Data goes here</Text>
      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#ccc',
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 5,
            marginRight: 10,
            width: '50%',
            alignItems: 'center',
          }}
          onPress={handleReject}
        >
          <Text style={{ color: '#fff', fontSize: 16 }}>No</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#007bff',
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 5,
            width: '50%',
            alignItems: 'center',
          }}
          onPress={handleConfirm}
        >
          <Text style={{ color: '#fff', fontSize: 16 }}>Yes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ValidationScreen;
