import React, { useState } from "react";
import auth from "@react-native-firebase/auth"; // Import Firebase Auth
import { useSession } from "../../../ctx";
import { Alert, Text, View, Dimensions } from "react-native";
import ProfileHeader from "./ProfileHeader";
import ProfileMenuItem from "./ProfileMenuItem";
import CountryDropDown from "../CountryDropDown"
import Divider from "../Divider";
import { AuthButton } from "../Button";
const bellIcon = require("../../../assets/images/profileicons.png");
const subcriptionIcon = require("../../../assets/images/subscriptionIcon.png");
const feedbackIcon = require("../../../assets/images/feedBack.png");

const Screenheight = Dimensions.get("window").height;
const ProfileContainer = ({setMenuitem}:{setMenuitem: React.Dispatch<React.SetStateAction<string>>}) => {

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
       <>
        <View style={{height: Screenheight * 0.66,}}>
        <ProfileHeader setMenuitem={setMenuitem} />
        <Divider/>
        <Text style={{color: "rgba(126, 126, 126, 1)",fontSize: 14, paddingTop: 10, fontWeight:"400"}}>Content</Text>
        <ProfileMenuItem icon={bellIcon} menuTitle="Notifications" onPress={ () => {setMenuitem("notifications")}} />
        <ProfileMenuItem icon={subcriptionIcon} menuTitle="Subscriptions" onPress={() => {setMenuitem("subscriptions")}} />
        <ProfileMenuItem icon={feedbackIcon} menuTitle="Feedback" onPress={() => {setMenuitem("feedback")}} />
        <CountryDropDown selectedValue={country} setSelectedValue={setCountry} isLanguageSwitcher={true}/>
        <Divider biggerMargin ={true} />
        <ProfileMenuItem icon={feedbackIcon} menuTitle="Change Password" onPress={() => {setMenuitem("changePassword")}} />
        <ProfileMenuItem icon={feedbackIcon} menuTitle="Delete Account" onPress={() => {setMenuitem("deleteAccount")}} />
        </View>
        <View>
          <AuthButton formatBlue="blue" asyncFunctionPass={handleSignOut} Title="LOGOUT" />
        </View>
        </>
    );
  };

  export default ProfileContainer