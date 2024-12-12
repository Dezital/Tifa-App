import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import HeaderVariant from '@/components/UI/HeaderVariant/HeaderVariant';
import HomeTabs from '../../../components/UI/Home/HomeTabs';
import VideoPlayer from '../../../components/UI/VideoList/VideopLayer';
import { LinearGradient } from 'expo-linear-gradient';
import { HeroItem } from '../../../components/UI/Home/SuperHeros';
import { useRouter, useLocalSearchParams } from'expo-router';
import Divider from '@/components/UI/Divider';
import IronStrikeHeading from '@/components/UI/TypoGrapghy/IronStrikeHeading';

const tabsHeadings = [
  {
    id: 111,
    title: "PROFILE",
  },
  {
    id: 112,
    title: "VIDEO INTRO",
  },
];

const data: HeroItem = 
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
  }



const SuperHerosDetails = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const onBack = () => {
    router.push('/(tabs)');
  };

  return (
    <LinearGradient
  colors={['rgba(23, 23, 23, 1)', 'rgba(9, 55, 120, 1)']}
  start={{ x: 0, y: 0 }}
  end={{ x: 0, y: 1 }}
  style={styles.gradient}
>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.containedView}>
              <HeaderVariant onBackPress={onBack} title={data.name || "redooo"} />
            </View>
            <View style={styles.headerOverLayFlex}>
              {tabsHeadings.map((item, index) => (
                <HomeTabs
                  title={item.title}
                  key={item.id}
                  active={index === activeIndex}
                  onPress={() => setActiveIndex(index)}
                />
              ))}
            </View>

            {/* Conditional rendering based on activeIndex */}
            {activeIndex === 0 && <SuperHeroProfile data={data} />}
            {activeIndex === 1 && (
              <VideoPlayer
                videoUrl={data.videoUrl}
                onBackPress={onBack}
              />
            )}
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </LinearGradient>
  );
};

const SuperHeroProfile: React.FC<{ data: HeroItem }> = ({ data }) => {
  return (
    <View style={superHeroProfileStyles.container}>
      <Image style={superHeroProfileStyles.image} source={data.image} />
      <IronStrikeHeading variant="playerName" title={data.name || ''} />
      <Text style={superHeroProfileStyles.descriptionText}>{data.desc}</Text>
      <View style={superHeroProfileStyles.rowContainer}>
        <Text style={superHeroProfileStyles.nationalityText}>Nationality </Text>
        <Image style={superHeroProfileStyles.nationalityFlag} source={data.nationalityFlag} />
      </View>
     <Divider />
      <View style={superHeroProfileStyles.rowContainer}>
        <Text style={superHeroProfileStyles.teamText}>Team </Text>
        <IronStrikeHeading variant="redColored" title={data.Team || ''} />
      </View>
      <View style={superHeroProfileStyles.statsContainer}>
        <View style={superHeroProfileStyles.statBox}>
          <IronStrikeHeading variant="largest" title={data.Position || ''} />
        </View>
        <View style={superHeroProfileStyles.statBox}>
          <IronStrikeHeading variant="number" title={data.Age || ''} />
        </View>
      </View>
      <View style={[superHeroProfileStyles.statsContainer, {marginTop: -5}]}>
      <View style={[superHeroProfileStyles.statBox, {backgroundColor: "transparent"}]}>
      <Text style={superHeroProfileStyles.statLabel}>Position</Text>
      </View>
      <View style={[superHeroProfileStyles.statBox, {backgroundColor: "transparent"}]}>
      <Text style={superHeroProfileStyles.statLabel}>Age</Text>
      </View>
      </View>
    </View>
  );
};

const superHeroProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 147,
    height: 437,
  },
  descriptionText: {
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 18,
    color: "rgba(221, 221, 221, 1)",
    marginTop: 5,
  },
  rowContainer: {
    flexDirection: "row",
    marginTop: 25,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  nationalityText: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18,
    color: "rgba(190, 190, 190, 1)",
  },
  nationalityFlag: {
    width: 28,
    height: 28,
  },
  teamText: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18,
    color: "rgba(190, 190, 190, 1)",
  },
  statBox: {
    flex: 1, 
    backgroundColor: "rgba(21, 30, 42, 1)",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 25,
    gap: 10, 
  },
  statLabel: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18,
    color: "rgba(190, 190, 190, 1)",
    paddingTop: 10,
  },
});


const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  containedView: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 17,
    paddingLeft: 25,
    paddingRight: 25,
  },
  scrollContainer: {
    paddingBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#ffffff",
    lineHeight: 32,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#ffffff",
    lineHeight: 24,
    textAlign: "center",
    marginTop: 10,
  },
  headerOverLayFlex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});



export default SuperHerosDetails;