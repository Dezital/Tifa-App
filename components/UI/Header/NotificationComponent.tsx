import { StyleSheet, Image, View } from 'react-native';
import React from 'react';

const ProfileIconImage = require("../../../assets/images/profileicons.png");

interface NotificationComponentProps {
  headerVariant?: boolean; 
}

const NotificationComponent = ({ headerVariant }: NotificationComponentProps) => {
  // Color Varinat for notification component based on header des
  const backgroundColor = headerVariant ? "rgba(40, 42, 44, 1)" : "rgba(0, 140, 255, 0.3)";

  return (
    <View style={[NotificationComponentStyles.notificationContainer, { backgroundColor }]}>
      <Image
        source={ProfileIconImage}
        style={NotificationComponentStyles.notificationIcon}
      />
    </View>
  );
};

export default NotificationComponent;

const NotificationComponentStyles = StyleSheet.create({
  notificationContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    //borderWidth: 1.2, // Fixed the border issue (border: 1.2px solid)
    //borderColor: "rgba(255, 255, 255, 1)",
    width: 45,
    height: 45,
  },
  notificationIcon: {
    width: 19,
    height: 19,
    resizeMode: "contain",
  },
});
