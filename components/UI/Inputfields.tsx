import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props {
    password: string;
    setPassword: (password: string) => void;
    isPasswordVisible: boolean;
    placeHolder?: string;
    isDarkBg?: boolean;

    togglePasswordVisibility: () => void;
  }
const Inputfields = ({ password, setPassword, isPasswordVisible, togglePasswordVisibility, placeHolder, isDarkBg }: Props) => {
  const eyeIcon = <Ionicons name="eye" size={20} color= "rgba(142, 142, 147, 1)" />
  const eyeIconClosed = <Ionicons name="eye-off" size={20} color="rgba(142, 142, 147, 1)" />
  const backgroundColor = isDarkBg ? "rgba(21, 23, 24, 1)" : "#1E2021"

  return (
    <View style={[styles.passwordContainer, {backgroundColor: backgroundColor}]}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder={placeHolder || "Search"}
                  placeholderTextColor="#7D7D7D"
                  secureTextEntry={!isPasswordVisible}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <Text style={styles.eyeIcon}>
                    {isPasswordVisible ? eyeIconClosed : eyeIcon}
                  </Text>
                </TouchableOpacity>
              </View>
  )
}

export {Inputfields}

const styles = StyleSheet.create({
    passwordContainer: {
        flexDirection: "row",
        height: 50,
        alignItems: "center",
        borderRadius: 12,
        marginVertical: 7,
        paddingTop: 8,
        paddingRight: 40,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingHorizontal: 15,
        width: "100%",
      },
      eyeIcon: {
        fontSize: 18,
        color: "rgba(142, 142, 147, 1)",
      },
      passwordInput: {
        height: 45,
        color: "#fff",
        width: "100%",
        //borderColor: "rgba(122, 122, 122, 1)",
        borderRadius: 12,
        fontSize: 16,
        fontWeight: "400",
      },

})