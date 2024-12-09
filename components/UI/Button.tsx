import {  Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { router, Href } from "expo-router";
const googleIcon = require("../../assets/images/devicon_google.png");
const appleLIcon = require("../../assets/images/Vector.png");
const facebookIcon = require("../../assets/images/facebookIcon.png");
interface ReuseButtonProps {
  formatBlue: string;
  routeLink: string;
  Title: string;
}
interface AuthButtonProps {
  formatBlue: string;
  asyncFunctionPass: () => void;
  Title: string;
}

const ReuseButton: React.FC<ReuseButtonProps> = ({ formatBlue, routeLink, Title }) => {
  return (
    <TouchableOpacity
      style={formatBlue === "blue" ? [styles.button, styles.startButton] : [styles.button, styles.loginButton]}
      onPress={() => {
        router.replace(routeLink as Href);
      }}
    >
      <Text style={formatBlue === "blue" ?  styles.buttonText : [styles.buttonText, styles.loginText]}>{Title}</Text>
    </TouchableOpacity>
  );
};

const AuthButton: React.FC<AuthButtonProps> = ({ formatBlue, asyncFunctionPass, Title }) => {
  return (
    <TouchableOpacity
      style={formatBlue === "blue" ? [styles.button, styles.startButton] : [styles.button, styles.loginButton]}
      onPress={() => {
        asyncFunctionPass();
      }}
    >
      <Text style={formatBlue === "blue" ?  styles.buttonText : [styles.buttonText, styles.loginText]}>{Title}</Text>
    </TouchableOpacity>
  );
}

const AuthProviderButton: React.FC<AuthButtonProps> = ({ formatBlue, asyncFunctionPass, Title }) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles.authButton]}
      onPress={() => {
        asyncFunctionPass();
      }}
    >  
      <Image
  style={{ width: 20, height: 20 }}
  source={
    formatBlue === "google"
      ? googleIcon
      : formatBlue === "apple"
      ? appleLIcon
      : formatBlue === "facebook"
      ? facebookIcon
      : null
  }
/>
      <Text style={[styles.buttonText, styles.loginText]}>{Title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 10,
    alignItems: "center",
    width: "100%",
    borderRadius: 8,
  },
  startButton: {
    backgroundColor: "rgba(0, 140, 255, 1)",
  },
  loginButton: {
    borderColor: "rgba(255, 255, 255, 1)",
    borderStyle: "solid",
    borderWidth: 1,
    color: "white",
  },
  authButton: {
    backgroundColor: "#1E2021",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  loginText: {
    color: "white",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontFamily: "DMSansRegVar",
    lineHeight: 21,
    fontSize: 16,
  },
});

export { ReuseButton, AuthButton, AuthProviderButton };
