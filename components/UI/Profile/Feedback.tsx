import { View, Text, StyleSheet, TextInput, Dimensions } from "react-native";
import React from "react";
import CountryDropDown from "../CountryDropDown";
import { AuthButton } from "../Button";
const height = Dimensions.get("window").height;

const Feedback = () => {
  return (
    <View>
      <View style={styles.container}>
        <View>
        <View style={{ marginTop: -15 }} />
        <Text style={styles.textfieldlabel}>Select Option</Text>
        <CountryDropDown
          selectedValue={""}
          setSelectedValue={() => {}}
          isDarkBg={true}
          isFeedback={true}
        />
        <Text style={styles.textfieldlabel}>
          Tell us more about what you have in mind
        </Text>
        <TextInput multiline style={styles.richText}></TextInput>
      </View>
      <AuthButton formatBlue="blue" asyncFunctionPass={() => {}} Title="SEND" />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: height * 0.71,
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
  richText: {
    minHeight: 325,
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
    textAlignVertical: "top",
  },
});

export default Feedback;
