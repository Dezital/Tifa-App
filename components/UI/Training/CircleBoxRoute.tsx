import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
const placeHolderBg = require("../../../assets/images/placeHolderBg.png");

interface CircleBoxRouteProps {
  title: string;
  active: boolean;
  onPress: () => void;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const circleDiameter = screenWidth * 0.241;
const activeCircleDiameter = screenWidth * 0.259;
const smallerDiameter = screenWidth * 0.245;

const CircleBoxRoute = ({ title, active, onPress }: CircleBoxRouteProps) => {
  const borderWidth = active ? 2 : 5;

  return (
    <TouchableOpacity onPress={onPress} style={CircleBoxRouteStyles.circleRouteContainer}>
      <View
        style={
          active
            ? CircleBoxRouteStyles.circleROuteOverlayactive
            : CircleBoxRouteStyles.circleROuteOverlay
        }
      >
        <Image source={placeHolderBg} style={[CircleBoxRouteStyles.circleRoute, { borderWidth }]} />
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
    width: smallerDiameter,
    height: smallerDiameter,
    borderRadius: smallerDiameter / 2,
    backgroundColor: "rgba(102, 102, 102, 1)",
    alignItems: "center",
    justifyContent: "center",
  },
  circleROuteOverlayactive: {
    width: activeCircleDiameter,
    height: activeCircleDiameter,
    borderRadius: activeCircleDiameter / 2,
    backgroundColor: "rgba(0, 140, 255, 1)",
    alignItems: "center",
    justifyContent: "center",
  },
  circleRoute: {
    width: circleDiameter,
    height: circleDiameter,
    borderRadius: circleDiameter / 2,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#111",
  },
  circleRouteText: {
    color: "rgba(102, 102, 102, 1)",
    fontWeight: "400",
    fontSize: 14,
    marginTop: 10,
  },
});
