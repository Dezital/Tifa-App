import React from "react";
import { StyleSheet, ScrollView, View, Text, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { HeaderLayoutDesign } from "../../components/HeaderLayoutDesign";
import SearchBarModule from "@/components/UI/SearchBarModule";
import CountryDropDown from "@/components/UI/CountryDropDown";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
const magezinePlaceholder = require("../../assets/images/magezineImg.png");
const addTifa = require("../../assets/images/addTifa.png");

export default function magezine() {
  return (
    <SafeAreaProvider style={{ backgroundColor: "rgba(0, 54, 171, 1)" }}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={styles.scrollContainer}
        >
          <HeaderLayoutDesign routeName="magezine" routeTitle="MAGEZINE" />
          <View style={{ marginTop: -27, paddingHorizontal: 20 }}>
            <SearchandSort />
          </View>
          <View style={{ paddingHorizontal: 20, marginTop: -25 }}>
            <MagezineCard />
            <AdComp />
            <MagezineCard />
            <AdComp />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const SearchandSort = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
        marginTop: -110,
      }}
    >
      <View style={{ flex: 3 }}>
        <SearchBarModule
          password=""
          setPassword={() => {}}
          togglePasswordVisibility={() => {}}
          isdarkerBg={true}
        />
      </View>
      <View style={{ flex: 1 }}>
        <SortComponent />
      </View>
    </View>
  );
};

const SortComponent = () => {
  return (
    <View style={{ flex: 1 }}>
      <CountryDropDown
        isDarkBg={true}
        selectedValue={""}
        setSelectedValue={() => {}}
        isSortFilter={true}
      />
    </View>
  );
};

const MagezineCard = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={magezinePlaceholder}
        style={{ width: "100%", height: 194, borderRadius: 10 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 10,
          marginTop: 10,
        }}
      >
        <Text style={{ color: "rgba(136, 136, 136, 1)" }}>INSIDE TIFA</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginTop: 10,
          }}
        >
          <Ionicons name="calendar" size={24} color="rgba(136, 136, 136, 1)" />
          <Text style={{ color: "rgba(136, 136, 136, 1)" }}>22-Nov-2024</Text>
        </View>
      </View>
      <ThemedText style={{ fontWeight: "700", fontSize: 24, lineHeight: 32, color: "rgba(0, 140, 255, 1)" }}>TIFA Sports</ThemedText>
      <ThemedText style={{ fontWeight: "400", fontSize: 13, lineHeight: 18, color: "rgba(201, 201, 201, 1)" }}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremq. Sed ut perspiciatis unde omnis iste natus error
        sit voluptatem accusantium doloremq.Sed ut perspiciatis unde omnis iste
        natus error sit voluptatem accusantium doloremq.
      </ThemedText>
    </View>
  );
};

const AdComp = () => {
  return (
    <View
      style={{
        flex: 1,
        borderWidth: 1,
        borderColor: "rgba(102, 102, 102, 0.25)",
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        flexDirection: "row",
        gap: 15,
        marginVertical: 20,
      }}
    >
      <View style={{ flex: 1 }}>
        <Image
          source={addTifa}
          style={{ width: "100%", height: 80, borderRadius: 10 }}
        />
      </View>
      <View style={{ flex: 2 }}>
        <ThemedText style={{ fontWeight: "400", fontSize: 13, lineHeight: 18, color: "rgba(201, 201, 201, 1)" }}>
          Sed ut perspiciatis unde omnis nde omn perspiciatis
          uperspiciatierspiciatis uperspiciatis.
        </ThemedText>
      </View>
    </View>
  );
};

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
