import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';

interface Props {
  isChecked: boolean;
  onValueChange: (value: boolean) => void;
}

const CheckBoxComponent = ({ isChecked, onValueChange }: Props) => {
  return (
    <View style={styles.checkboxContainer}>
      <Checkbox
        value={isChecked}
        onValueChange={onValueChange}
        color={isChecked ? 'rgba(122, 122, 122, 1)' : undefined} // Customize the checkbox color when checked
      />
      <Text style={styles.checkboxText}>I agree to the terms and conditions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginVertical: 1,
  },
  checkboxText: {
    marginLeft: 5,
    fontSize: 13,
    fontWeight: '400',
    color: 'rgba(122, 122, 122, 1)',
    letterSpacing: -0.4,
    lineHeight: 18,
  },
});

export default CheckBoxComponent;
