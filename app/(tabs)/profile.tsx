import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { HeaderLayoutDesign } from "../../components/HeaderLayoutDesign";
import ProfileContainer from "@/components/UI/Profile/ProfileContainer";
import EditProfile from "@/components/UI/Profile/EditProfile";
import Notifications from "@/components/UI/Profile/Notifications";
import Subscriptions from "@/components/UI/Profile/Subscriptions";
import Feedback from "@/components/UI/Profile/Feedback";
import ChangePassword from "@/components/UI/Profile/ChangePassword";
import DeleteAccount from "@/components/UI/Profile/DeleteAccount";


export default function profile() {
  const [menuitem, setMenuitem] = React.useState("profile");

  const displayToRender = ({ menuitem} :{menuitem: string}) => {
    switch (menuitem) { 
      case "editProfile":
        return <EditProfile />;
      case "profile":
        return <ProfileContainer setMenuitem={setMenuitem} />;
      case "notifications":
        return <Notifications />;
      case "subscriptions":
        return <Subscriptions />;
      case "feedback":
        return <Feedback />;
      case "changePassword":
        return <ChangePassword  />;
      case "deleteAccount":
        return <DeleteAccount/>;
      default:
        return <ProfileContainer setMenuitem={setMenuitem} />;
    }
  };
  
  const menuItemTitles: { [key: string]: string } = {
    profile: "PROFILE",
    editProfile: "EDIT PROFILE",
    notifications: "NOTIFICATIONS",
    subscriptions: "SUBSCRIPTIONS",
    feedback: "FEEDBACK",
    changePassword: "PASSWORD",
    deleteAccount: "ACCOUNT",
  };

  return (
    <SafeAreaProvider style={{ backgroundColor: "rgba(0, 54, 171, 1)" }}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={styles.scrollContainer}
        >
          <HeaderLayoutDesign routeName="profile"  routeTitle={menuItemTitles[menuitem] || "PROFILE"} setMenuitem={setMenuitem} menuitem={menuitem} />
          <View style={styles.profilecontainer}>
          <View style={styles.innercontainer}>
            {displayToRender({ menuitem })}
          </View>
          </View>
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
    paddingBottom: 50,
  },
  profilecontainer: {
    flex: 1,
    padding: 20,
    borderRadius: 20,
    justifyContent: "center",
    marginTop: -145,
  },
  innercontainer: {
    paddingTop: 17,
    paddingLeft: 17,
    paddingRight: 17,
    paddingBottom: 25,
    backgroundColor: "rgba(30, 32, 33, 1)",
    borderRadius: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
