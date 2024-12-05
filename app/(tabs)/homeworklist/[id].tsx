
import React from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router"
import HeaderVariant from '@/components/UI/HeaderVariant/HeaderVariant';
import NameCount from '@/components/UI/Header/NameCount';
import VideoCard from '@/components/UI/VideoList/VideoCard';

const Homeworklist  = () => {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const onBackPress = () => {
      router.push('/(tabs)/homework');
    }
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.containedView}>
        <HeaderVariant onBackPress={onBackPress} title={"Open Control"} />
    </View>
    <NameCount headerVariant={true} />
    <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
    <VideoCard title="Drill 1" description="Video Echter, zal tijdens deze sessies de bal altijd in de buurt zijn" active={true} />
    <VideoCard title="Drill 1" description="Video Echter, zal tijdens deze sessies de bal altijd in de buurt zijn" active={false} />
    <VideoCard title="Drill 1" description="Video Echter, zal tijdens deze sessies de bal altijd in de buurt zijn" active={false} />
    <VideoCard title="Extra Challenge" description="Video Echter, zal tijdens deze sessies de bal altijd in de buurt zijn" active={false} />
    </View>
    <Text style={styles.title}> {id || 'no id'} </Text>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Homeworklist 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21, 23, 24, 1)",
  },
  containedView: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(21, 23, 24, 1)",
    paddingTop: 45,
    paddingLeft: 25,
    paddingRight: 25,
  },
  logo: {
    width: 110,
    height: 66,
    marginBottom: 30,
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
  }
});
