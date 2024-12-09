import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText';
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
      <ThemedText style={styles.titleStyle}>{title}</ThemedText>
      <ThemedText  style={styles.subtitleStyle}>{subtitle}</ThemedText>
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
        marginVertical: 5
    },
    subtitleStyle: {
        color: 'rgba(221, 221, 221, 1)',
        fontSize: 12,
        marginTop: 10,
        textAlign: 'center',
        fontWeight: '300',
        lineHeight: 15
      }
})
export default TifaIconBox