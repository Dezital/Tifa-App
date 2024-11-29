import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
const placeHolderBg = require("../../../assets/images/placeHolderBg.png");

interface CircleBoxRouteProps {
  title: string;
  active: boolean;
  onPress: () => void;
}

const CircleBoxRoute = ({ title, active, onPress }: CircleBoxRouteProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={CircleBoxRouteStyles.circleRouteContainer}>
      <View
        style={
          active
            ? CircleBoxRouteStyles.circleROuteOverlayactive
            : CircleBoxRouteStyles.circleROuteOverlay
        }
      >
        <Image source={placeHolderBg} style={CircleBoxRouteStyles.circleRoute} />
      </View>
      <Text style={CircleBoxRouteStyles.circleRouteText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CircleBoxRoute;

const CircleBoxRouteStyles = StyleSheet.create({
  circleRouteContainer: {
    display: "flex",
    alignItems: "center",
    marginRight: 8,
    zIndex: 1,
  },
  circleROuteOverlay: {
    width: 105,
    height: 105,
    borderRadius: 100,
    backgroundColor: "rgba(102, 102, 102, 1)",
    alignItems: "center",
    justifyContent: "center",
  },
  circleROuteOverlayactive: {
    width: 107,
    height: 107,
    borderRadius: 100,
    backgroundColor: "rgba(0, 140, 255, 1)",
    alignItems: "center",
    justifyContent: "center",
  },
  circleRoute: {
    width: 104,
    height: 104,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#111",
    borderWidth: 5,
  },
  circleRouteText: {
    color: "rgba(102, 102, 102, 1)",
    fontWeight: "400",
    fontSize: 14,
    marginTop: 10,
  },
});
