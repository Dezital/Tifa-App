import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
const placeholderImage = require("../../../assets/images/profile-placeHolder.png");
import { useRouter } from 'expo-router';

const ProfileIcon = () => {
  const router = useRouter();
  const renderProfile = () => {
    router.push({ pathname: '/(tabs)/profile' });
  }
    return (
      <TouchableOpacity onPress={renderProfile}>
        <Image source={placeholderImage} style={profileIconStyles.profileIcon} />
      </TouchableOpacity>
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