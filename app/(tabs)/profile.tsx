import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Text, Image, Dimensions, Alert, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { HeaderLayoutDesign } from "../../components/HeaderLayoutDesign";
import ProfileIcon from "@/components/UI/Header/ProfileIcon";
import Divider from "@/components/UI/Divider";
import { AuthButton } from "@/components/UI/Button";
import { Ionicons } from "@expo/vector-icons";
const editinfo = require("../../assets/images/editInfo.png");
const bellIcon = require("../../assets/images/profileicons.png");
const subcriptionIcon = require("../../assets/images/subscriptionIcon.png");
const feedbackIcon = require("../../assets/images/feedBack.png");
import auth from "@react-native-firebase/auth"; // Import Firebase Auth
import { useSession } from "../../ctx";
import CountryDropDown from "@/components/UI/CountryDropDown";

const Screenheight = Dimensions.get("window").height;

export default function profile() {
  
  return (
    <SafeAreaProvider style={{ backgroundColor: "rgba(0, 54, 171, 1)" }}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={styles.scrollContainer}
        >
          <HeaderLayoutDesign routeName="profile" routeTitle="PROFILE" />
          <View style={styles.profilecontainer}>
            <ProfileContainer />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const ProfileContainer = () => {
  const [country, setCountry] = useState("");
  const { signOut } = useSession();
  const handleSignOut = async () => {
    try {
      await auth().signOut(); // Sign out from Firebase
      signOut();
      Alert.alert("Success", "You have successfully signed out.");
    } catch (error) {
      console.error("Sign out error: ", error);
      signOut();
    }

  };
  return (
    <View style={profileStyles.container}>
      <View>
      <ProfileHeader />
      <Divider/>
      <Text style={{color: "rgba(126, 126, 126, 1)",fontSize: 14, paddingTop: 10, fontWeight:"400"}}>Content</Text>
      <ProfileMenuItem icon={bellIcon} menuTitle="Notifications" onPress={() => {}} />
      <ProfileMenuItem icon={subcriptionIcon} menuTitle="Subscriptions" onPress={() => {}} />
      <ProfileMenuItem icon={feedbackIcon} menuTitle="Feedback" onPress={() => {}} />
      <CountryDropDown selectedValue={country} setSelectedValue={setCountry} isLanguageSwitcher={true}/>
      <Divider biggerMargin ={true} />
      <ProfileMenuItem icon={feedbackIcon} menuTitle="Change Password" onPress={() => {}} />
      <ProfileMenuItem icon={feedbackIcon} menuTitle="Delete Account" onPress={() => {}} />
      </View>
      <View>
        <AuthButton formatBlue="blue" asyncFunctionPass={handleSignOut} Title="LOGOUT" />
      </View>
    </View>
  );
};

const ProfileHeader = () => {
  return (
    <View style={profileHeaderStyles.container}>
      <View style={profileHeaderStyles.innerContainer}>
        <ProfileIcon widthbigger={true} />
        <View style={profileHeaderStyles.userdetails}>
          <Text style={profileHeaderStyles.username}>Joe</Text>
          <Text style={profileHeaderStyles.email}>Joejames@gmail.com</Text>
        </View>
      </View>
      <View style={profileHeaderStyles.innerContainer}>
        <View style={profileHeaderStyles.imageContainer}>
          <Image style={profileHeaderStyles.editIcon} source={editinfo} />
        </View>
      </View>
    </View>
  );
};

const ProfileMenuItem = ({icon, menuTitle, onPress}: {icon: any, menuTitle: string, onPress: () => void}) => {
  return (
    <TouchableOpacity style={prfileMenuItemStyles.container} onPress={onPress}>
      <View style={prfileMenuItemStyles.innerContainer}>
       <ProfileMenuIcon icon={icon}/>
        <Text style={prfileMenuItemStyles.menuItem}>{menuTitle}</Text>
      </View>
      <View>
        <Ionicons name="chevron-forward" size={24} color="#fff" />
      </View>
    </TouchableOpacity>
  );
}
const prfileMenuItemStyles = StyleSheet.create({
  container:{
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    alignItems: "center",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  menuItem: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
  },
})

const ProfileMenuIcon = ({icon}: {icon: any}) => {
  return (
    <View style={{padding: 15, backgroundColor: "rgba(21, 23, 24, 1)", borderRadius: 5}}>
      <Image style={{ width: 17, height: 17, resizeMode: "contain"}} source={icon || bellIcon} />
    </View>
  );
}
const profileStyles = StyleSheet.create({
  container: {
    padding: 17,
    backgroundColor: "rgba(30, 32, 33, 1)",
    borderRadius: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    height: Screenheight * 0.76,
  },
});

const profileHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "700",
  },
  userdetails: {
    marginLeft: 12,
  },
  email: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 14,
    fontWeight: "400",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  editIcon: {
    width: 19,
    height: 19,
    resizeMode: "contain",
  },
  imageContainer: {
    backgroundColor: "rgba(0, 140, 255, 1)",
    borderRadius: 100,
    padding: 11,
    alignItems: "center",
    justifyContent: "center",
  },
});

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
  profilecontainer: {
    flex: 1,
    padding: 20,
    borderRadius: 20,
    justifyContent: "center",
    marginTop: -145,
  },
});

export {ProfileMenuItem}