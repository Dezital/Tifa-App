import { Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'


interface Props {
  title: string | undefined;
  active: boolean;
  onPress: () => void;
}
const screenWidth = Dimensions.get('window').width;
const HomeTabs = ({title,  active, onPress}: Props) => {
  const backgroundColor = active ? "rgba(0, 140, 255, 1)" : "rgba(113, 191, 255, 1)";
  const calculatedWidth = screenWidth * 0.35;
  return (
      <TouchableOpacity onPress={onPress} style={[styles.tabbutton, { backgroundColor, width: calculatedWidth }]} >
      <Text style={styles.title}>{title || "title"}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  tabbutton: {
    //backgroundColor: "rgba(0, 140, 255, 1)",
    backgroundColor: "rgba(113, 191, 255, 1)",
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    height: 50,
    alignItems:"center",
    justifyContent:"center"
  },
  title: {
    color: "white",
    fontSize: 16
  }
})

export default HomeTabs