import { StyleSheet } from 'react-native';
import React from 'react';
import MaskInput, { Masks } from 'react-native-mask-input';

interface Props {
  dob: string;
  setDob: (value: string) => void;
  isDarkcolor?: boolean
}

const DateOfBirthInput = ({ dob, setDob, isDarkcolor }: Props) => {
  const darker = isDarkcolor ? "rgba(21, 23, 24, 1)" : "#1E2021";
  return (
    <MaskInput
      style={[styles.input, {backgroundColor: darker}]}
      placeholder="MM/DD/YYYY"
      placeholderTextColor="#7D7D7D"
      value={dob}
      onChangeText={(masked, unmasked) => {
        // Update the state with the unmasked value
        setDob(unmasked);
      }}
      mask={Masks.DATE_MMDDYYYY}  // Use the predefined mask for MM/DD/YYYY
    />
  );
};

export default DateOfBirthInput;

const styles = StyleSheet.create({
  input: {
    height: 50,
    color: "#fff",
    width: "100%",
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 16,
    borderRadius: 12,
    marginVertical: 7,
    paddingHorizontal: 15,
    fontSize: 16,
    fontWeight: "400",
  },
});