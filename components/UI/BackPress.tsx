import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const BackPress = ({onBackPress}:{onBackPress: () => void}) => {
  return (
    <TouchableOpacity style={[NotificationComponentStyles.notificationContainer]} onPress={onBackPress}>
        <Ionicons
          name="chevron-back-outline"
          size={24}
          color={'rgba(255, 255, 255, 1)'}
        />
      </TouchableOpacity>
  )
}

const NotificationComponentStyles = StyleSheet.create({
    notificationContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderRadius: 150,
      borderWidth: 1,
      borderColor: "transparent",
      width: 45,
      height: 45,
    },
    notificationIcon: {
      width: 19,
    },
  });
  
export default BackPress