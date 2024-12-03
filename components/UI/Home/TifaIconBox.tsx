import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'
const placeholder = require("../../../assets/images/mvp.png");
const screenWidth = Dimensions.get('window').width;

interface TifaIconBoxProps {
    iconurl: string;
    title: string;
    subtitle: string;
}



const TifaIconBox = ({iconurl, title, subtitle} : TifaIconBoxProps) => {
  const calculatedWidth = screenWidth * 0.27;
  return (
    <View style={[styles.IconBoxContainer, { width: calculatedWidth }]}>
        <Image style={styles.imageStyle} source={iconurl ? iconurl : placeholder} />
      <Text style={styles.titleStyle}>{title}</Text>
      <Text  style={styles.subtitleStyle}>{subtitle}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    IconBoxContainer:{
    backgroundColor: "rgba(30, 32, 33, 1)",
    borderColor: "rgba(126, 126, 126, 0.31)",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 3,
    alignItems: "center",
    },
    imageStyle: {
        width: 21,
        height: 21,
        marginTop: 7,
        marginBottom: 7
    },
    titleStyle: {
        color: "rgba(0, 140, 255, 1)",
        fontWeight: "700",
        fontSize: 18,
        fontStyle: "italic",
        textAlign: "center",
        marginVertical: 7
    },
    subtitleStyle: {
        color: 'rgba(221, 221, 221, 1)',
        fontSize: 11,
        marginTop: 10,
        textAlign: 'center',
        fontWeight: '300',
        paddingBottom: 3,
      }
})
export default TifaIconBox