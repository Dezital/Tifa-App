import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import { useRouter } from "expo-router"
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import auth from "@react-native-firebase/auth";
import { AuthButton } from "@/components/UI/Button";
const image = require("../assets/images/tifa_logo.png");
const screenHeight = Dimensions.get('window').height;
const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const router = useRouter(); // Hook to navigate between screens

  const handleResetPassword = async () => {
    if (!email.trim()) {
      Alert.alert("Validation Error", "Please enter your email address.");
      return;
    }

    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert("Success", "Password reset email sent!");
      router.replace("/sign-in"); // Navigate back after sending the email
    } catch (error: any) {
      console.error(error);
      let errorMessage =
        "Failed to send password reset email. Please check your email and try again.";
      if (error.code === "auth/invalid-email") {
        errorMessage = "The email address is not valid.";
      } else if (error.code === "auth/user-not-found") {
        errorMessage = "No user found with this email address.";
      }
      Alert.alert("Error", errorMessage);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.containedView}>
            <View style={styles.formContainer}>
            {/* LOGO */}
            <Image style={styles.logo} source={image} />
            {/* TITLE & TEXT */}
            <Text style={styles.title}>Reset Password</Text>
            <Text style={styles.futuretext}>
              Enter your email to recieve a password reset email.
            </Text>
            <Text style={styles.textfieldlabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="E-mail address"
              placeholderTextColor="#7D7D7D"
              value={email}
              onChangeText={setEmail}
              autoComplete="email"
            />
            </View>
            <View style={styles.formContainer}>
            <AuthButton
              formatBlue="blue"
              asyncFunctionPass={handleResetPassword}
              Title="SEND RESET EMAIL"
            />
              <Text style={[styles.futuretext, styles.signinLinkText]}>
                Back to {" "}
                <Text
                  onPress={() => router.push("/sign-in")}
                  style={styles.spanLink}
                >
                  LOGIN
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21, 23, 24, 1)",
  },
  containedView: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(21, 23, 24, 1)",
    paddingTop: 45,
    paddingLeft: 25,
    paddingRight: 25,
    height: screenHeight * .95, // 80% of the viewport height
  },
  logo: {
    width: 110,
    height: 66,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#ffffff",
    lineHeight: 32,
    marginBottom: 10,
    textAlign: "center",
  },
  titleSpan: {
    fontWeight: "800",
    color: "rgba(0, 140, 255, 1)",
  },
  spanLink: {
    color: "rgba(0, 140, 255, 1)",
    cursor: "pointer",
    textDecorationLine: "underline",
  },
  futuretext: {
    marginBottom: 25,
    color: "rgba(142, 142, 147, 1)",
    textAlign: "center",
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
  },
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
    backgroundColor: "#1E2021",
    //borderColor: "rgba(122, 122, 122, 1)",
    borderRadius: 12,
    marginVertical: 7,
    paddingHorizontal: 15,
    fontSize: 16,
    fontWeight: "400",
   // lineHeight: 2,
  },
  forgotButton: {
    alignSelf: "flex-end",
    marginVertical: 6,
    marginBottom: 25,
  },
  scrollContainer: {
    paddingBottom: 50,
  },
  signinLinkText: {
    marginTop: 40,
  },
});

export default ForgotPasswordScreen;
