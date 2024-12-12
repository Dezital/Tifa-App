
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';
import {useSegments} from 'expo-router'
import { setStatusBarHidden } from 'expo-status-bar';

interface VideoPlayerProps {
  videoUrl: string;
  onBackPress: () => void; // Callback to handle back navigation
}

const VideoPlayer = ({ videoUrl, onBackPress }: VideoPlayerProps) => {


  const segments = useSegments();
  const [isLoading, setIsLoading] = useState(true); // Loader state
  const videoRef = useRef<Video>(null);

  useEffect(() => {
    // Lock orientation to landscape when component mounts
    const lockOrientation = async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    };

    lockOrientation();
    setStatusBarHidden(true);

    // Reset orientation to portrait on unmount
    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
      setStatusBarHidden(false);
    };
  }, []);

  useEffect(() => {
    // Unmount component when `segments` changes
    if (JSON.stringify(segments) !== JSON.stringify(['(tabs)', 'traininglist', '[id]'])) {
      setStatusBarHidden(true);
      onBackPress(); // Trigger the callback to handle unmount
    }
  }, [segments]);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{ uri: videoUrl }}
        shouldPlay // Auto-play video
        isLooping // Loop the video
        onLoadStart={() => setIsLoading(true)} // Show loader while video is loading
        onLoad={() => setIsLoading(false)} // Hide loader after video is loaded
        onError={(error) => console.error('Video Error:', error)} // Handle playback errors
        style={styles.video}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 20
  },
  video: {
    width: '100%',
    height: 300, 
    borderRadius: 10,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    zIndex: 2,
  },
  loader: {
    position: 'absolute',
    zIndex: 1, 
  },
});

export default VideoPlayer;