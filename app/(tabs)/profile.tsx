import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {HeaderLayoutDesign} from "../../components/HeaderLayoutDesign";
import trainingData from "../../components/Training.json";



export default function profile() {
  const { Training } = trainingData;
  return (
    <SafeAreaProvider style={{backgroundColor: "rgba(0, 54, 171, 1)"}}>
      <SafeAreaView style={styles.container}>
      <ScrollView style={{ width: "100%" }} contentContainerStyle={styles.scrollContainer}>
      <HeaderLayoutDesign routeName="profile" routeTitle="PROFILE" data={Training} />
    </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: 10,
  },
  scrollContainer: {
    width: "100%", // Ensures full-width
    backgroundColor: "rgba(21, 23, 24, 1)",
    
  },
});

