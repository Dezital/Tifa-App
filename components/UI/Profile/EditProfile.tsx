import { View, TextInput, StyleSheet, Image, Text, Dimensions } from "react-native";
import React from "react";
import ProfileIcon from "../Header/ProfileIcon";
import DateOfBirthInput from "../DateOfBirthInput";
import CountryDropDown from "../CountryDropDown";
import { AuthButton } from "../Button";
const cameraIcon = require("../../../assets/images/cameraIcon.png");
const height = Dimensions.get("window").height;
const EditProfile = () => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [country, setCountry] = React.useState("");
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <ProfileIcon widthbigger={true} />
        <UploadImage />
        <View style={{ width: "100%", flexDirection: "column", justifyContent: "space-between", height: height * 0.64 }}>
          <View>
          <Text style={styles.textfieldlabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="E-mail address"
            placeholderTextColor="#7D7D7D"
            value={email}
            onChangeText={setEmail}
            autoComplete="email"
          />
          <Text style={styles.textfieldlabel}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#7D7D7D"
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.textfieldlabel}>Date of Birth</Text>
          <DateOfBirthInput dob={dob} setDob={setDob} isDarkcolor={true} />
          <Text style={styles.textfieldlabel}>Country</Text>
          <CountryDropDown
            selectedValue={country}
            setSelectedValue={setCountry}
            isDarkBg={true}
          />
          </View>
          <AuthButton formatBlue="blue" asyncFunctionPass={() => {}} Title="DONE" />
        </View>
      </View>
    </View>
  );
};

const UploadImage = () => {
  return (
    <View style={styles.innerContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.editIcon} source={cameraIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: -15,
    marginLeft: 40,
  },
  editIcon: {
    width: 11,
    height: 10,
    resizeMode: "contain",
  },
  imageContainer: {
    backgroundColor: "rgba(0, 140, 255, 1)",
    borderRadius: 100,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
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
    backgroundColor: "rgba(21, 23, 24, 1)",
    borderRadius: 12,
    marginVertical: 7,
    paddingHorizontal: 15,
    fontSize: 16,
    fontWeight: "400",
    // lineHeight: 2,
  },
});

export default EditProfile;
