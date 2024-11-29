import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import ProfileIcon from "../components/UI/Header/ProfileIcon";
import NameCount from "../components/UI/Header/NameCount";
import NotificationComponent from "../components/UI/Header/NotificationComponent";
import CardLayout from "./UI/Header/CardLayout";
import HeaderOverlayBox from "./UI/Training/HeaderOverlayBox";
import ProgramView from "./UI/Training/ProgramView";
import NameView from "./UI/HomeWork/NameView";
import VideoView from "./UI/HomeWork/VideoView";

interface DataProps {
  id: string;
  title: string;
  content: string;
  image?: string;
  courses?: Array<{
    id: string;
    title: string;
    image?: string;
    desc: string;
    lock: boolean;
    progress: number;
    videos: Array<{
      id: string;
      title: string;
      video: string;
      content: string;
      desc: string;
    }>;
  }>;
}


interface CourseProps {
  id: string;
  title?: string;
  content?: string;
  desc: string;
  image?: string;
  lock: boolean;
  progress: number;
  videos: Array<VideoProps>;
}

interface VideoProps {
  id: string;
  title: string;
  video: string;
  content: string;
  desc: string;
}

interface MainProps {
  routeName: string;
  routeTitle: string;
  data?: DataProps[];
}

const HeaderLayoutDesign = ({ routeName, routeTitle, data }: MainProps) => {
  const [islistView, setIslistView] = useState(false);
  const [loaded] = useFonts({
    Vermin: require("../assets/fonts/VerminVibesSlant.ttf"),
  });

  // State to manage active selection
  const [activeIndex, setActiveIndex] = useState(0);

  // Get the active courses based on the current active index
  const activeCourses = data?.[activeIndex]?.courses || [];

  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.headerFlex}>
          <ProfileIcon />
          <View>
            <Text style={TextheaderStyles.headerText}>{routeTitle}</Text>
            <Text style={TextheaderStyles.typographyHeadertext}>T</Text>
          </View>
          <NotificationComponent />
        </View>
        {routeName === "training" ? (
          <HeaderOverlayBox
            data={data}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ) : (
          <CardLayout />
        )}
      </View>
      {routeName !== "homework" ?
      <NameCount text={data?.[activeIndex]?.title} count={`${data?.[activeIndex]?.courses?.length} Modules` || "0 Modules"} />
      :
      <NameView text={"Homework"} islistView={islistView} setlistView={setIslistView} />
      }
      {/* For Training tab */ }
      {routeName === "training" && <ProgramView courses={activeCourses} />}
      {/* For homework tab */ }
      {routeName === "homework" && <VideoView isListView={islistView} />}

      
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
    //backgroundColor: "transparent",
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

export { HeaderLayoutDesign };
