import React, { useRef, useEffect } from "react";
import { View, Image, StyleSheet, Dimensions, FlatList, Text } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
  SharedValue,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

interface HeroItem {
  id: number;
  name?: string;
  title?: string;
  desc: string;
  Nationality: string;
  Team: string;
  Position: string;
  Age: string;
  image: any;
}

interface SliderItemProps {
  item: HeroItem;
  index: number;
  scrollX: SharedValue<number>;
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
  },
];

const SuperHeroSlider: React.FC = () => {
  const scrollX = useSharedValue(0);
  const flatListRef = useRef<FlatList<HeroItem> | null>(null);

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

  return (
    <>
    <View style={style.container}>
      <Animated.FlatList
        ref={flatListRef}
        data={superherosData}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} scrollX={scrollX} />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScrollHandler}
        removeClippedSubviews={false}
        getItemLayout={getItemLayout}
        scrollEventThrottle={16}
      />
    </View>
     </>
  );
};

const SliderItem: React.FC<SliderItemProps> = ({ item, index, scrollX }) => {
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
    <Animated.View style={[style.itemContainer, animatedStyle]}>
      <Image source={item.image} />
      <View style={style.controls}>
      <Text style={style.textstyle}>{item.name}</Text>
    </View>
    </Animated.View>
  );
}

const style = StyleSheet.create({
  container: {
    paddingBottom: 130,
  },
  itemContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    width: width,
  },
  controls: {display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", paddingBottom: 100, gap: 20},
  textstyle:{
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
    fontStyle: "italic",
    paddingTop: 30
  }
});

export default SuperHeroSlider;
//      <Text style={style.textstyle}> &gt; </Text>
//      <Text style={style.textstyle}> &lt; </Text>