import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {HeaderLayoutDesign} from "../../components/HeaderLayoutDesign";
import SearchBarModule from "@/components/UI/SearchBarModule";
//const placeholder = require("../assets/images/Tifa-loading-Screen.jpg"); //use this as placeholder for all images

export default function magezine() {
  return (
    <SafeAreaProvider style={{backgroundColor: "rgba(0, 54, 171, 1)"}}>
      <SafeAreaView style={styles.container}>
      <ScrollView style={{ width: "100%" }} contentContainerStyle={styles.scrollContainer}>
      <HeaderLayoutDesign routeName="magezine" routeTitle="MAGEZINE"  />
      <View style={{marginTop: -27, paddingHorizontal: 20}}>
        <SearchandSort />
      </View>
  
    </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


const SearchandSort = () => {
  return (
    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 10, marginTop: -105}}>
      <View style={{flex: 3}}>
        <SearchBarModule password="" setPassword={() => {}} togglePasswordVisibility={() => {}}  isdarkerBg={true} />
      </View>
      <View  style={{backgroundColor: "red", flex: 1}}></View>
    </View>
  )
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


