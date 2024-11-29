

import React, { useRef, useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

interface VideoPlayerProps {
  videoUrl: string;
  onBackPress: () => void; // Callback to handle back navigation
}

const VideoPlayer = ({ videoUrl, onBackPress }: VideoPlayerProps) => {
  const [isLoading, setIsLoading] = useState(true); // Loader state
  const videoRef = useRef(null);

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
    alignItems: 'center',
    paddingHorizontal: 25,
    marginTop: 20,
    borderRadius: 10,
  },
  video: {
    width: '100%', // Full screen width
    height: 300, // Set height; adjust to your design
    borderRadius: 10,
  },
  loader: {
    position: 'absolute',
    zIndex: 1, // Keep loader above the video
  },
});

export default VideoPlayer;