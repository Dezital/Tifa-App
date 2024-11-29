import { StyleSheet, ScrollView, View } from 'react-native';
import React from 'react';
import CircleBoxRoute from "./CircleBoxRoute";

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

interface MainProps {
  data?: DataProps[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const HeaderOverlayBox = ({ data, activeIndex, setActiveIndex }: MainProps) => {
  return (
    <View style={headerOverlayBox.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={headerOverlayBox.headerOverLayFlex}
      >
        {data?.map((item, index) => (
          <CircleBoxRoute
            key={item.id}
            title={item.title}
            active={index === activeIndex}
            onPress={() => setActiveIndex(index)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HeaderOverlayBox;

const headerOverlayBox = StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      backgroundColor: "rgba(30, 32, 33, 1)",
      borderRadius: 20,
      marginTop: -80,
      marginBottom: -35,
      height: 170,
      overflow: "hidden",
    },
    headerOverLayFlex: {
      flexDirection: "row",
      alignItems: "center",
    },
  });