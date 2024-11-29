import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props {
    password: string;
    setPassword: (password: string) => void;
    isPasswordVisible: boolean;

    togglePasswordVisibility: () => void;
  }
const Inputfields = ({ password, setPassword, isPasswordVisible, togglePasswordVisibility }: Props) => {
  const eyeIcon = <Ionicons name="eye" size={20} color= "rgba(142, 142, 147, 1)" />
  const eyeIconClosed = <Ionicons name="eye-off" size={20} color="rgba(142, 142, 147, 1)" />

  return (
    <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Search"
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
        backgroundColor: "#1E2021",
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