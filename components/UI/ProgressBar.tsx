import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProgressBarProps {
  totalVideos: number;
  watchedVideos: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ totalVideos, watchedVideos }) => {
  // Calculate the progress percentage
  const progress = (watchedVideos / totalVideos) * 100;

  return (
    <View style={styles.container}>
      {/* Video Count */}
      <Text style={styles.videoCount}>
        {watchedVideos.toString().padStart(2, '0')}/{totalVideos.toString().padStart(2, '0')}
      </Text>

      {/* Progress Bar */}
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '85%', // Adjust the width to fit your layout
  },
  videoCount: {
    color: 'rgba(0, 140, 255, 1)',
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 6,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: 'rgba(51, 51, 51, 1)',
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
  },
  progressBar: {
    height: '100%',
    backgroundColor: "rgba(0, 140, 255, 1)", // progress bar color
  },
});

export default ProgressBar;
