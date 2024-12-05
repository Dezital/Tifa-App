import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ViewToken,
} from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
  SharedValue,
} from "react-native-reanimated";
import SliderControls from "./SliderControls";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export type HeroItem = {
  id: number;
  name?: string;
  title?: string;
  desc: string;
  Nationality: string;
  Team: string;
  Position: string;
  Age: string;
  image: any;
  videoUrl: string;
  nationalityFlag: string | any;
};

interface SliderItemProps {
  item: HeroItem;
  index: number;
  scrollX: SharedValue<number>;
  onPress:  () => void;
}

const superherosData: HeroItem[] = [
  {
    id: 111,
    name: "Shuryjano Cornecion",
    desc: "Playing at Feyenoord since: 7 years old",
    Nationality: "England",
    Team: "PSV Eindhoven",
    Position: "Central Midfielder",
    Age: "16",
    image: require("../../../assets/images/heroImg.png"),
    videoUrl: "https://res.cloudinary.com/dofjskceg/video/upload/v1732766993/1_to_1_Football_Practice_Ball_Control_Passing_and_Movement_xpg9ma.mp4",
    nationalityFlag: require("../../../assets/images/neatherland.png")
  },
  {
    id: 112,
    name: "Superheros",
    desc: "Playing at Feyenoord since: 7 years old",
    Nationality: "England",
    Team: "PSV Eindhoven",
    Position: "Central Midfielder",
    Age: "16",
    image: require("../../../assets/images/heroImg.png"),
    videoUrl: "https://res.cloudinary.com/dofjskceg/video/upload/v1732766993/1_to_1_Football_Practice_Ball_Control_Passing_and_Movement_xpg9ma.mp4",
    nationalityFlag: require("../../../assets/images/neatherland.png")
  },
  {
    id: 113,
    name: "Gsaacradavfeames",
    desc: "Playing at Feyenoord since: 7 years old",
    Nationality: "England",
    Team: "PSV Eindhoven",
    Position: "Central Midfielder",
    Age: "16",
    image: require("../../../assets/images/heroImg.png"),
    videoUrl: "https://res.cloudinary.com/dofjskceg/video/upload/v1732766993/1_to_1_Football_Practice_Ball_Control_Passing_and_Movement_xpg9ma.mp4",
    nationalityFlag: require("../../../assets/images/neatherland.png")
  },
  {
    id: 133,
    name: "sasacrvr",
    desc: "Playing at Feyenoord since: 7 years old",
    Nationality: "England",
    Team: "PSV Eindhoven",
    Position: "Central Midfielder",
    Age: "16",
    image: require("../../../assets/images/heroImg.png"),
    videoUrl: "https://res.cloudinary.com/dofjskceg/video/upload/v1732766993/1_to_1_Football_Practice_Ball_Control_Passing_and_Movement_xpg9ma.mp4",
    nationalityFlag: require("../../../assets/images/neatherland.png")
  },
];

const SuperHeroSlider: React.FC = () => {
  const router = useRouter();
  const scrollX = useSharedValue(0);
  const flatListRef = useRef<FlatList<HeroItem> | null>(null);
  const [paginationIndex, setPaginationIndex] = React.useState(0);
  const [selectedHero, setSelectedHero] = useState<number | null>(null);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });
  const getItemLayout = (_: any, index: number) => ({
    length: width,
    offset: width * index,
    index,
  });

  useEffect(() => {
    flatListRef.current?.scrollToIndex({ index: 1, animated: false });
  }, []);

  const navigateToPrevious = () => {
    if (paginationIndex > 0) {
      flatListRef.current?.scrollToIndex({
        index: paginationIndex - 1,
        animated: true,
      });
    }
  };

  const navigateToNext = () => {
    if (paginationIndex < superherosData.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: paginationIndex + 1,
        animated: true,
      });
    }
  };
  const onViewableItemsChanged = useRef<({ viewableItems }: { viewableItems: Array<ViewToken> }) => void>(
    ({ viewableItems }) => {
      if (viewableItems.length > 0) {
        setPaginationIndex(viewableItems[0].index!); 
      }
    }
  ).current;

  const handlePresshero = (item: HeroItem) => {
    setSelectedHero(item.id); 
    router.push({ pathname: '/superheros/[id]', params: { id: item.id} })
  };

  return (
    <>
      <View style={style.container}>
        <Animated.FlatList
          ref={flatListRef}
          data={superherosData}
          renderItem={({ item, index }) => (
            <SliderItem item={item} index={index} scrollX={scrollX} onPress={() => handlePresshero(item)}  />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={onScrollHandler}
          removeClippedSubviews={false}
          getItemLayout={getItemLayout}
          scrollEventThrottle={16}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
        />
        <SliderControls
          items={superherosData}
          paginationIndex={paginationIndex}
          onPrevious={navigateToPrevious}
          onNext={navigateToNext}
        />
      </View>
    </>
  );
};

const SliderItem: React.FC<SliderItemProps> = ({ item, index, scrollX, onPress }) => {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          scrollX.value,
          [(index - 1) * width, index * width, (index + 1) * width],
          [-width * 0.6, 0, width * 0.6],
          Extrapolation.CLAMP
        ),
      },
      {
        scale: interpolate(
          scrollX.value,
          [(index - 1) * width, index * width, (index + 1) * width],
          [0.75, 1, 0.75],
          Extrapolation.CLAMP
        ),
      },
    ],
    opacity: interpolate(
      scrollX.value,
      [
        (index - 1) * width, // previous item
        index * width, // current item
        (index + 1) * width, // next item
      ],
      [0.4, 1, 0.4], // opacity: 0.5 for inactive items, 1 for active item
      Extrapolation.CLAMP
    ),
  }));

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
    <Animated.View style={[style.itemContainer, animatedStyle]}>
      <Image source={item.image} />
      <View style={style.controls}>
      </View>
    </Animated.View>
    </TouchableOpacity>
  );
};

/// thing we need to do is every item should have an toucable opacity which call the <SuperHerosDetails data= /> with active object 

const style = StyleSheet.create({
  container: {
    paddingBottom: 50,
  },
  itemContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    width: width,
  },
  controls: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  textstyle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
    fontStyle: "italic",
    paddingTop: 30,
  },
});

export default SuperHeroSlider;
