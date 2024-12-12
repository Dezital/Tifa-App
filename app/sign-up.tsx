import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Inputfields } from "@/components/UI/Inputfields";
import { useSession } from "../ctx";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
const image = require("../assets/images/tifa_logo.png");
GoogleSignin.configure({
  webClientId:
    "1028669389718-55gk78eo8r2ctf0uc7481aunbhup90hu.apps.googleusercontent.com",
});
import { AuthProviderButton, AuthButton } from "@/components/UI/Button";
import CountryDropDown from "@/components/UI/CountryDropDown";
import CheckBoxComponent from "@/components/UI/CheckBoxComponent";
import DateOfBirthInput from "@/components/UI/DateOfBirthInput";
import { setStatusBarBackgroundColor, setStatusBarHidden, setStatusBarStyle } from "expo-status-bar";

const signup = () => {
  const { signIn } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the checked state
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
      console.log("error===", error);
      Alert.alert("Error", "An unexpected error occurred. Please try again.");
    }
  };  
  
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSignUp = async () => {
    try {
      if(!email.trim() || !password.trim() || !name.trim() || !surname.trim() || !dob.trim() || !country.trim() || !isChecked) {
        alert("Please fill in all fields.");
        return;
      }
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password
      );
      // Update user profile with additional info if needed
      await userCredential.user.updateProfile({
        displayName: `${name} ${surname}`,
      });
      alert("User registered successfully!");
      router.replace("/sign-in");
    } catch (error: any) {
      console.log("Sign-Up Error:", error);
      alert(`Sign-Up Failed: ${error.message}`);
    }
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
              <Text style={styles.title}>
                Welcome to <Text style={styles.titleSpan}>TIFA!</Text>
              </Text>
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
              <Text style={styles.textfieldlabel}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="E-mail address"
                placeholderTextColor="#7D7D7D"
                value={email}
                onChangeText={setEmail}
                autoComplete="email"
              />
              <Text style={styles.textfieldlabel}>Password</Text>
              <Inputfields
                password={password}
                setPassword={setPassword}
                isPasswordVisible={isPasswordVisible}
                togglePasswordVisibility={togglePasswordVisibility}
              />
              <Text style={styles.textfieldlabel}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#7D7D7D"
                value={name}
                onChangeText={setName}
              />
              <Text style={styles.textfieldlabel}>Surname</Text>
              <TextInput
                style={styles.input}
                placeholder="Surname"
                placeholderTextColor="#7D7D7D"
                value={surname}
                onChangeText={setSurname}
              />
              <Text style={styles.textfieldlabel}>Date of Birth</Text>
              <DateOfBirthInput
                dob={dob}
                setDob={setDob}
              />
              <Text style={styles.textfieldlabel}>Country</Text>
              <CountryDropDown
                selectedValue={country}
                setSelectedValue={setCountry}
              />
              <View style={styles.checkboxContainer}>
              <CheckBoxComponent
                isChecked={isChecked}
                onValueChange={handleCheckboxChange}
                setIsChecked={setIsChecked}
              />
              </View>
              <AuthButton
                formatBlue="blue"
                asyncFunctionPass={handleSignUp}
                Title="SIGN UP"
              />
            </View>
            <View>
            <Text style={[styles.futuretext, styles.signinLinkText]}>
              Already a member?{" "}
              <Text
                onPress={() => router.push("/login-in")}
                style={styles.spanLink}
              >
                SIGN IN
              </Text>
            </Text>
            </View>
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
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#ffffff",
    lineHeight: 32,
    marginBottom: 10,
    textAlign: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 30,
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
  },
});
export default signup;

/*
/////get sah1 key by 
eas build
eas build:configure
eas credentials
keystore get sah1 key

////then put they sah1 key in firebase 
download the newly generated file
google services.json
and paste it in the root

////Then add authentication provider in app
/// for start just  go with google and after completion of google add email, password also

////Then install npm google-sign-in library
//// npm react native firebase/ auth
//// npm react native firebase/ app
//// we are going going to be using the original google sign in


/// npx expo prebuild

//// npx run:andriod


//// add app.json changes

//// error fix if occurs

//// expo install expo-build-propertise

/// expo prebuild

//// 
*/

/*
Key store generated from running eas credentials



*/

/*
if this fails then may be crack the course where it is done and try that method
Configuration: Build Credentials 8JW81QB3Yv (Default)
Keystore
Type                JKS
Key Alias           482e1cce0cb0fb61d58af7a157db9cd8
MD5 Fingerprint     82:27:80:60:46:76:EA:63:EE:55:7F:D8:C8:A3:A5:58
SHA1 Fingerprint    4C:92:B3:C6:94:88:61:5E:A9:FC:88:C5:8F:48:DB:06:81:F4:3D:7E
SHA256 Fingerprint  5B:03:5B:95:00:91:B1:A8:C3:42:DE:93:2F:DC:2B:7D:EB:E7:C1:60:55:D5:1B:25:E9:13:B4:6F:BA:F0:D0:EF
Updated             10 minutes ago



/// andriod debug.keystore
SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
         SHA256: FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C


         #1: ObjectId: 2.5.29.14 Criticality=false
SubjectKeyIdentifier [
KeyIdentifier [
0000: 0B F9 FE 38 89 D2 8A 9C   58 F0 C1 0A B7 0E 43 28  ...8....X.....C(
0010: D8 23 F3 20                                        .#.
]
]
*/
