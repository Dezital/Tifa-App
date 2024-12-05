import { StyleSheet, ScrollView, View } from 'react-native';
import React from 'react';
import CircleBoxRoute from "./CircleBoxRoute";
import HomeTabs from '../Home/HomeTabs';

interface DataProps {
  id: string;
  title: string;
  content: string;
  image?: string;
  courses?: Array<{
    id: string;
    title: string;
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
interface dataIndexProps {
  id: number;
  title: string;
}

interface MainProps {
  data?: DataProps[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  routeName: string;
  dataInd?: dataIndexProps[]
}

const HeaderOverlayBox = ({ data, activeIndex, setActiveIndex, routeName, dataInd }: MainProps) => {
  const backgroundColor = routeName === "index" ? "transparent" : "rgba(30, 32, 33, 1)";
  const marginBottom = routeName === "index" ? 15 : -35;
  const paddingHorizontal = routeName === "index" ? 0 : 10;
  return (
    <View style={[headerOverlayBox.container, { backgroundColor, marginBottom, paddingHorizontal }]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={headerOverlayBox.headerOverLayFlex}
      >
      {routeName === "training" && 
        data?.map((item, index) => (
          <CircleBoxRoute
            key={item.id}
            title={item.title}
            active={index === activeIndex}
            onPress={() => setActiveIndex(index)}
          />
        ))}
        {routeName === "index" && 
         dataInd?.map((item, index) => (
          <HomeTabs title={item.title} key={item.id} active={index === activeIndex} onPress={() => setActiveIndex(index)} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HeaderOverlayBox;

const headerOverlayBox = StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      borderRadius: 20,
      marginTop: -120,
      marginBottom: -35,
      height: 170,
      overflow: "hidden",
    },
    headerOverLayFlex: {
      flexDirection: "row",
      alignItems: "center",
    },
  });