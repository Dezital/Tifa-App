import React, { useState } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import HeaderVariant from '@/components/UI/HeaderVariant/HeaderVariant';
import NameCount from '@/components/UI/Header/NameCount';
import VideoCard from '@/components/UI/VideoList/VideoCard';
import { useRouter, useLocalSearchParams } from'expo-router';
import VideoPlayer from '@/components/UI/VideoList/VideopLayer';

const TrainingList  = () => {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const onBackPress = () => {
      if (selectedVideo) {
        // Exit VideoPlayer view
        setSelectedVideo(null);
      } else {
        router.push('/(tabs)/training');
      }
    };
  
    const handleVideoSelect = (videoUrl: string) => {
      setSelectedVideo(videoUrl);
    };

    
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.containedView}>
        <HeaderVariant onBackPress={onBackPress} />
    </View>
    {selectedVideo ? (
        <VideoPlayer videoUrl={'https://res.cloudinary.com/dofjskceg/video/upload/v1732766993/1_to_1_Football_Practice_Ball_Control_Passing_and_Movement_xpg9ma.mp4'} onBackPress={onBackPress} />
        
      ) : (
        <>
    <NameCount headerVariant={true} />
    <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
    <VideoCard title="Inside foot right 45 degrees" description="Video Echter, zal tijdens deze sessies de bal altijd in de buurt zijn" active={true} onPress={() => handleVideoSelect('https://res.cloudinary.com/dofjskceg/video/upload/f_auto,q_auto/v1732766993/1_to_1_Football_Practice_Ball_Control_Passing_and_Movement_xpg9ma.mp4')}/>
    {/*<VideoCard title="Inside foot left 45 degrees" description="Video Echter, zal tijdens deze sessies de bal altijd in de buurt zijn" active={false} />
    <VideoCard title="Inside foot left 45 degrees" description="Video Echter, zal tijdens deze sessies de bal altijd in de buurt zijn" active={false} />
    <VideoCard title="Inside foot left 45 degrees" description="Video Echter, zal tijdens deze sessies de bal altijd in de buurt zijn" active={false} />
    <VideoCard title="Inside foot left 45 degrees" description="Video Echter, zal tijdens deze sessies de bal altijd in de buurt zijn" active={false} />
    <VideoCard title="Inside foot left 45 degrees" description="Video Echter, zal tijdens deze sessies de bal altijd in de buurt zijn" active={false} />
    <VideoCard title="Inside foot left 45 degrees" description="Video Echter, zal tijdens deze sessies de bal altijd in de buurt zijn" active={false} />
    */}
    </View>
    <Text style={styles.title}> {id || 'no id'} </Text>
        </>
  )
}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default TrainingList 

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

