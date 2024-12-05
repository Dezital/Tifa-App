import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import ProfileIcon from "../Header/ProfileIcon";

const editinfo = require("../../../assets/images/editInfo.png");

const ProfileHeader = ({setMenuitem}: {setMenuitem: React.Dispatch<React.SetStateAction<string>>}) => {
    return (
      <View style={profileHeaderStyles.container}>
        <View style={profileHeaderStyles.innerContainer}>
          <ProfileIcon widthbigger={true} />
          <View style={profileHeaderStyles.userdetails}>
            <Text style={profileHeaderStyles.username}>Joe</Text>
            <Text style={profileHeaderStyles.email}>Joejames@gmail.com</Text>
          </View>
        </View>
        <View style={profileHeaderStyles.innerContainer}>
          <TouchableOpacity onPress={() => setMenuitem("editProfile")} style={profileHeaderStyles.imageContainer}>
            <Image style={profileHeaderStyles.editIcon} source={editinfo} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const profileHeaderStyles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
    },
    username: {
      fontSize: 24,
      color: "rgba(255, 255, 255, 1)",
      fontWeight: "700",
    },
    userdetails: {
      marginLeft: 12,
    },
    email: {
      color: "rgba(102, 102, 102, 1)",
      fontSize: 14,
      fontWeight: "400",
    },
    innerContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    editIcon: {
      width: 19,
      height: 19,
      resizeMode: "contain",
    },
    imageContainer: {
      backgroundColor: "rgba(0, 140, 255, 1)",
      borderRadius: 100,
      padding: 11,
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default ProfileHeader