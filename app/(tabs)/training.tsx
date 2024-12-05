import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {HeaderLayoutDesign} from "../../components/HeaderLayoutDesign";
import trainingData from "../../components/Training.json";
import HeaderOverlayBox from "../../components/UI/Training/HeaderOverlayBox";
import NameCount from "../../components/UI/Header/NameCount";
import ProgramView from "../../components/UI/Training/ProgramView";


export default function training() {
  const { Training } = trainingData;
  const [activeIndex, setActiveIndex] = useState(0);
  // Get the active courses based on the current active index
  const activeCourses = Training?.[activeIndex]?.courses || [];

  return (
    <SafeAreaProvider style={{backgroundColor: "rgba(0, 54, 171, 1)"}}>
      <SafeAreaView style={styles.container}>
      <ScrollView style={{ width: "100%" }} contentContainerStyle={styles.scrollContainer}>
      <HeaderLayoutDesign routeName="training" routeTitle="TRAINING"  />
      <View style={{marginTop: -7, paddingHorizontal: 20}}>
      <HeaderOverlayBox data={Training} activeIndex={activeIndex} setActiveIndex={setActiveIndex} routeName="training"/>
      </View>
      <NameCount text={Training?.[activeIndex]?.title} count={`${Training?.[activeIndex]?.courses?.length} Modules` || "0 Modules"} />
      <ProgramView courses={activeCourses} />
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


