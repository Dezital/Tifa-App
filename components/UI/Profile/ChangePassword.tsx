import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import { Inputfields } from "../Inputfields";
import { AuthButton } from "../Button";
const height = Dimensions.get("window").height;

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const toggleNewPasswordVisibility = () => {
    setIsNewPasswordVisible(!isNewPasswordVisible);
  }
  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  }
  return (
    <View  style={{height: height * 0.71, flexDirection: "column", justifyContent: "space-between"}} >
      <View >
      <Text style={styles.textfieldlabel}>Current Password</Text>
      <Inputfields
        password={password}
        setPassword={setPassword}
        isPasswordVisible={isPasswordVisible}
        placeHolder={"Current Password"}
        togglePasswordVisibility={togglePasswordVisibility}
        isDarkBg= {true}
      />
      <Text style={styles.textfieldlabel}>New Password</Text>
      <Inputfields
        password={newPassword}
        setPassword={setNewPassword}
        isPasswordVisible={isNewPasswordVisible}
        placeHolder={"New Password"}
        togglePasswordVisibility={toggleNewPasswordVisibility}
        isDarkBg= {true}
      />
      <Text style={styles.textfieldlabel}>Confirm Password</Text>
      <Inputfields
        password={confirmPassword}
        setPassword={setConfirmPassword}
        isPasswordVisible={isConfirmPasswordVisible}
        placeHolder={"Confirm Password"}
        togglePasswordVisibility={toggleConfirmPasswordVisibility}
        isDarkBg= {true}
      />
      </View>
      <AuthButton formatBlue="blue" asyncFunctionPass={() => {}} Title="CHANGE PASSWORD" />
    </View>
  );
};

const styles = StyleSheet.create({
  textfieldlabel: {
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: -0.4,
    color: "#fff",
    textAlign: "left",
    alignSelf: "flex-start",
    marginTop: 15,
  },
  input: {
    height: 50,
    color: "#fff",
    width: "100%",
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 16,
    backgroundColor: "rgba(21, 23, 24, 1)",
    borderRadius: 12,
    marginVertical: 7,
    paddingHorizontal: 15,
    fontSize: 16,
    fontWeight: "400",
  },
});

export default ChangePassword;
