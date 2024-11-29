import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
const placeholderImage = require("../../../assets/images/profile-placeHolder.png");

const ProfileIcon = () => {
    return (
      <View>
        <Image source={placeholderImage} style={profileIconStyles.profileIcon} />
      </View>
    );
  };

  const profileIconStyles = StyleSheet.create({
    profileIcon: {
      width: 45,
      height: 45,
      borderRadius: 50,
    },
  });

  export default ProfileIcon;