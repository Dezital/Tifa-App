import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";


interface Props {
    password: string;
    setPassword: (password: string) => void;
    togglePasswordVisibility: () => void;
    isdarkerBg?: boolean
  }

const SearchBarModule = ({
  password,
  setPassword,
  togglePasswordVisibility,
  isdarkerBg,
}: Props) => {
  const searchIcon = (
    <Ionicons name="search-outline" size={20} color="rgba(0, 140, 255, 1)" />
  );
  const backgroundColor = isdarkerBg ? "rgba(23, 23, 23, 1)" : "#1E2021"

  return (
    <View style={[styles.passwordContainer, {backgroundColor: backgroundColor}]}>
      <TextInput
        style={styles.passwordInput}
        placeholder="Search"
        placeholderTextColor="#7D7D7D"
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={togglePasswordVisibility}>
        <Text style={styles.eyeIcon}>
          {searchIcon}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordContainer: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    borderRadius: 12,
    marginTop: 7,
    paddingTop: 8,
    paddingRight: 40,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingHorizontal: 15,
    width: "100%",
  },
  eyeIcon: {
    fontSize: 18,
    color: "rgba(0, 140, 255, 1)",
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
});

export default SearchBarModule