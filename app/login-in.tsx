import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useSession } from "../ctx";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { AuthButton, AuthProviderButton } from "@/components/UI/Button";
import { Inputfields } from "@/components/UI/Inputfields";
import { ThemedText } from "@/components/ThemedText";
import { setStatusBarBackgroundColor, setStatusBarHidden, setStatusBarStyle } from "expo-status-bar";
const image = require("../assets/images/tifa_logo.png");
GoogleSignin.configure({
  webClientId:
    "444670043049-i088o5egakb53fifquba5dtkq1c8coha.apps.googleusercontent.com",
});

/*
keystore from folder (old)
  SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
  SHA256: FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C
*/
/*
         SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
         SHA256: FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C
*/

/*
Eas Store
SHA1 Fingerprint    8B:4E:54:E4:9F:64:3A:36:78:9F:03:49:F4:D7:81:B1:48:42:45:45
SHA256 Fingerprint  46:0E:3D:D9:D8:18:68:C3:B0:AD:C9:68:C8:CD:E6:CC:65:07:71:60:A1:DF:56:09:7D:D5:98:BF:9B:83:1B:CA
*/

const LoginScreen = () => {
  const { signIn } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSignIn = async () => {
    signIn();
    if (!email.trim() || !password.trim()) {
      Alert.alert("Validation Error", "Please enter both email and password.");
      return;
    }

    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password
      );
      
      if (userCredential) {
        console.log("userCredential", userCredential);
        signIn();
        router.replace("/");
      }
    } catch (e: any) {
      console.log("e===+", e);
      let errorMessage = `Sign-In Failed: ${e.message}`;
      if (e.code === "auth/invalid-email") {
        errorMessage = "Invalid email. Please try again.";
      } else if (e.code === "auth/invalid-credential") {
        errorMessage = "Invalid credential. Please try again.";
      } else if (e.code === "auth/wrong-password") {
        errorMessage = "Incorrect password. Please try again.";
      } else if (e.code === "auth/user-not-found") {
        errorMessage = "User not found. Please try again.";
      } else if (e.code === "auth/too-many-requests") {
        errorMessage = "Too many requests. Please try again later.";
      }
      Alert.alert("Login Error", errorMessage);
    }
  };
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const signInGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const signInResult = await GoogleSignin.signIn();
      let idToken = signInResult.data?.idToken;
      if (idToken) {
        // Create a Google credential with the token
       const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // Sign-in the user with the credential
        auth().signInWithCredential(googleCredential);
        signIn();
        router.replace("/");
      }
    } catch (error) {
      console.log("error===+", error);
      Alert.alert("Error", "An unexpected error occurred. Please try again.");
    }
  };  

  const handleForgotPassword = () => {
    router.push("/ForgotPasswordScreen"); // Navigate to the Forgot Password Screen
  };

  useEffect(() => {
    setStatusBarHidden(false)
    setStatusBarBackgroundColor("rgba(21, 23, 24, 1)")
    setStatusBarStyle("light")
  }, [])

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.containedView}>
            {/* LOGO */}
            <Image style={styles.logo} source={image} />
            <View style={styles.formContainer}>
              {/* TITLE & TEXT */}
              <ThemedText type="title" style={{ textAlign: "center", color: "white" }}> Welcome to <Text style={styles.titleSpan}>TIFA!</Text>
              </ThemedText>
              <ThemedText style={styles.futuretext} type="default">Talet Development</ThemedText>
              {/* EMAIL INPUT */}
              <ThemedText type={"textfieldlabel"}>Email</ThemedText>
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="#7D7D7D"
                value={email}
                onChangeText={setEmail}
                autoComplete="email"
              />
              {/* PASSWORD INPUT */}
              <ThemedText type={"textfieldlabel"}>Password</ThemedText>
              <Inputfields
                password={password}
                setPassword={setPassword}
                isPasswordVisible={isPasswordVisible}
                togglePasswordVisibility={togglePasswordVisibility}
              />
              {/* FORGOT PASSWORD BUTTON*/}
              <TouchableOpacity
                style={styles.forgotButton}
                onPress={handleForgotPassword}
              >
                <ThemedText type={"textfieldlabel"}>Forgot Password?</ThemedText>
              </TouchableOpacity>
              <AuthButton
                formatBlue="blue"
                asyncFunctionPass={handleSignIn}
                Title="LOGIN"
              />
            </View>
            {/* DIVIDER OR*/}
            <View style={styles.flexBox}>
              <View style={styles.divider}></View>
              <Text style={styles.orText}>OR</Text>
              <View style={styles.divider}></View>
            </View>
            {/* sIGIN WITH GOOGLE*/}
            <View style={styles.flexContainer}>
              <AuthProviderButton
                formatBlue="google"
                asyncFunctionPass={signInGoogle}
                Title="Sign In with Google"
              />
            </View>
            <View style={styles.flexContainer}>
              <AuthProviderButton
                formatBlue="apple"
                asyncFunctionPass={signInGoogle}
                Title="Sign In with Apple ID"
              />
            </View>
            <ThemedText style={[styles.futuretext, styles.signinLinkText]}>
              Don’t have an account?{" "}
              <Text
                onPress={() => router.push("/sign-up")}
                style={styles.spanLink}
              >
                SIGN UP
              </Text>
            </ThemedText>

            <View style={styles.formContainer}></View>
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
  },
  logo: {
    width: 110,
    height: 66,
    marginBottom: 30,
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
  forgotText: {
    fontSize: 13,
    color: "rgba(122, 122, 122, 1)",
    fontWeight: "400",
    lineHeight: 18,
    letterSpacing: -0.4,
    textAlign: "right",
    textDecorationLine: "underline",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginVertical: 1,
  },
  checkboxText: {
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 13,
    color: "#7D7D7D",
  },
  flexBox: {
    flexDirection: "row", // arrange items horizontally
    alignItems: "center",
    marginTop: 25,
    marginBottom: 15,
    gap: 15,
  },
  divider: {
    flex: 1, // takes up equal space
    height: 0.5,
    backgroundColor: "rgba(102, 112, 133, 1)",
    marginHorizontal: 1, // space around each side of "OR"
  },
  orText: {
    color: "rgba(142, 142, 147, 1)",
    textAlign: "center",
    fontFamily: "DMSansRegVar",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: -0.6,
  },
  button: {
    width: "90%",
    height: 40,
    backgroundColor: "#333",
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  extraStyle: {
    fontSize: 20,
  },
  flexContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  signinLinkText: {
    marginTop: 40,
  },
  scrollContainer: {
    paddingBottom: 50,
  }
});

export default LoginScreen;

/*
Super intersting

scrollContainer: {
    paddingBottom: 50,
  },
containedView: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(21, 23, 24, 1)",
    paddingTop: 45,
    paddingLeft: 25,
    paddingRight: 25,
  },
titleSpan: {
    fontWeight: "800",
    color: "rgba(0, 140, 255, 1)",
  },


// For external providers (e.g. Google, Facebook)
const credential = GoogleAuthProvider.credentialFromResult(authResult);
signInWithCredential(auth, credential)
  .then((userCredential) => {
    // Signed in
  })
  .catch((error) => {
    // Error
  });

// For email/password authentication
const email = 'user@example.com';
const password = 'password';
const credential = EmailAuthProvider.credential(email, password);
signInWithCredential(auth, credential)
  .then((userCredential) => {
    // Signed in
  })
  .catch((error) => {
    // Error
  });


  */
