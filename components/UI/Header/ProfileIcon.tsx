import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
const placeholderImage = require("../../../assets/images/profile-placeHolder.png");
import { useRouter } from 'expo-router';

const ProfileIcon = ({widthbigger}:{widthbigger?: boolean}) => {
  const widthrange = widthbigger ? 60 : 45
  const heightrange = widthbigger ? 60 : 45
  const router = useRouter();
  
  const renderProfile = () => {
    if(!widthbigger){
    router.push({ pathname: '/(tabs)/profile' });
    }
  }
    return (
      <TouchableOpacity onPress={renderProfile}>
        <Image source={placeholderImage} style={[profileIconStyles.profileIcon, {width:widthrange, height:heightrange}]} />
      </TouchableOpacity>
    );
  };

  const profileIconStyles = StyleSheet.create({
    profileIcon: {
      borderRadius: 50,
      resizeMode: "contain",
    },
  });

  export default ProfileIcon;