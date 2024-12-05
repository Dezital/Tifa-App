import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProfileIcon from "../components/UI/Header/ProfileIcon";
import NotificationComponent from "../components/UI/Header/NotificationComponent";
import BackPress from "./UI/BackPress";
import { useRouter } from "expo-router";

interface MainProps {
  routeName: string;
  routeTitle: string;
  setMenuitem?: React.Dispatch<React.SetStateAction<string>>
  goBackAllowed?: boolean
  menuitem?: string
}

const HeaderLayoutDesign = ({ routeName, routeTitle, setMenuitem, goBackAllowed, menuitem }: MainProps) => {
  const router = useRouter();
  
  const onBackPress = () => {
    if(!menuitem && goBackAllowed){
      router.back();
    } else if (goBackAllowed && menuitem === "profile"){ {
      router.back();
    } 
  } 
    else {
      router.back();
    }
  }

  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.headerFlex}>
          {routeName !== "profile" && <ProfileIcon />}
          {routeName === "profile" && <BackPress onBackPress={onBackPress} />}
          <View>
            <Text style={TextheaderStyles.headerText}>{routeTitle}</Text>
            <Text style={TextheaderStyles.typographyHeadertext}>T</Text>
          </View>
          {routeName !== "profile" && <NotificationComponent />}
          {routeName === "profile" && <Empty />}
        </View>
      </View>
    </>
  );
};

const TextheaderStyles = StyleSheet.create({
  headerText: {
    fontFamily: "Vermin",
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "400",
    fontSize: 15,
    //lineHeight: 18,
    marginTop: 17,
    letterSpacing: -0.17,
    textAlign: "center",
  },
  typographyHeadertext: {
    color: "rgba(255, 255, 255, 0.2)",
    fontFamily: "Vermin",
    fontWeight: "400",
    marginTop: -37,
    fontSize: 180,
    //lineHeight: 200,
    textAlign: "center",
  },
});

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "rgba(0, 54, 171, 1)",
    width: "100%", // Ensures it takes the full width
    alignItems: "center", // Center the text horizontally
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    height: 200,
    //paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerFlex: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    //paddingTop: 10,
  },
});

const Empty = () => {
  return(
    <View style={{width: 45}}>
      <Text style={{display: "none"}}>a</Text>
    </View>
  )
};

export { HeaderLayoutDesign };
