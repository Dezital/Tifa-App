
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Dimensions } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';

interface VideoPlayerProps {
  videoUrl: string;
  onBackPress: () => void; // Callback to handle back navigation
}

const VideoPlayer = ({ videoUrl, onBackPress }: VideoPlayerProps) => {
  const [isLoading, setIsLoading] = useState(true); // Loader state
  const videoRef = useRef<Video>(null);

  useEffect(() => {
    // Lock orientation to landscape when component mounts
    const lockOrientation = async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    };

    lockOrientation();

    // Reset orientation to portrait on unmount
    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    };
  }, []);

  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator size="large" color="#fff" style={styles.loader} />
      )}

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
    justifyContent: 'center',
    borderRadius: 10,
  },
  video: {
    width: '100%',
    height: Dimensions.get('window').height, // Full height for landscape
    borderRadius: 10,
  },
  loader: {
    position: 'absolute',
    zIndex: 1, // Keep loader above the video
  },
});

export default VideoPlayer;