import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {HeaderLayoutDesign} from "../../components/HeaderLayoutDesign";
//const placeholder = require("../assets/images/Tifa-loading-Screen.jpg"); //use this as placeholder for all images
import CardLayout from "../../components/UI/Header/CardLayout";
import NameView from "../../components/UI/HomeWork/NameView";
import VideoView from "../../components/UI/HomeWork/VideoView";

export default function index() {
  const [islistView, setIslistView] = useState(false);
  return (
    <SafeAreaProvider style={{backgroundColor: "rgba(0, 54, 171, 1)"}}>
      <SafeAreaView style={styles.container}>
      <ScrollView style={{ width: "100%" }} contentContainerStyle={styles.scrollContainer}>
      <HeaderLayoutDesign routeName="homework" routeTitle="HOMEWORK"  />
      <View style={{marginTop: -27, paddingHorizontal: 20}}>
      <CardLayout routeName="homework" />
      </View>
      <NameView text={"Homework"} islistView={islistView} setlistView={setIslistView} />
      <VideoView isListView={islistView} />
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


