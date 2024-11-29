import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {HeaderLayoutDesign} from "../../components/HeaderLayoutDesign";
//const placeholder = require("../assets/images/Tifa-loading-Screen.jpg"); //use this as placeholder for all images

export default function index() {
  return (
    <SafeAreaProvider style={{backgroundColor: "rgba(0, 54, 171, 1)"}}>
      <SafeAreaView style={styles.container}>
      <ScrollView style={{ width: "100%" }} contentContainerStyle={styles.scrollContainer}>
      <HeaderLayoutDesign routeName="homework" routeTitle="HOMEWORK" />
    </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: 24,
  },
  scrollContainer: {
    width: "100%", // Ensures full-width
    backgroundColor: "rgba(21, 23, 24, 1)",
    
  },
});


