import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import IronStrikeHeading from '../TypoGrapghy/IronStrikeHeading';
const placeHolderBg = require("../../../assets/images/placeHolderBg.png");
const indexImage = require("../../../assets/images/homeImage.png");
interface Props {
  routeName: string
}

const CardLayout = ({routeName}: Props) => {
  const imageSource = routeName === "homework" ? placeHolderBg :  indexImage;
    return (
      <View style={headerOverlayBoxCard.container}>
        <ImageBackground
          source={imageSource}
          resizeMode="cover"
          style={headerOverlayBoxCard.programModuleBg}
        >
          {/* Gradient Overlay */}
          { routeName === "homework" &&
          <>
          <View style={headerOverlayBoxCard.overlay} />
          <IronStrikeHeading variant="cardlayout" title="Homework" />
          <Text style={headerOverlayBoxCard.desc}>
            Below is the list of homework related activities that comes under your
            subscription. Follow the text and the relevant video provided with each.
          </Text>
          </>
           }
        </ImageBackground>
      </View>
    );
  };

export default CardLayout

const headerOverlayBoxCard = StyleSheet.create({
    container: {
      backgroundColor: "rgba(30, 32, 33, 1)",
      borderRadius: 20,
      marginTop: -100,
      marginBottom: -35,
      height: 170,
      overflow: "hidden",
    },
    programModuleBg: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 20,
      },
    desc: {
      fontSize: 14,
      lineHeight: 19,
      textAlign: "center",
      fontWeight: "500",
      color: "rgba(255, 255, 255, 1)",
    },
    overlay: {
      ...StyleSheet.absoluteFillObject, // Fills the ImageBackground completely
      backgroundColor: "rgba(0, 0, 0, 0.6)", // 60% black overlay
    },
  });
  