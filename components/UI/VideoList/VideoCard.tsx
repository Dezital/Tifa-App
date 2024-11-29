import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PlaceHolderImage = require("../../../assets/images/placeHolderBg.png");

interface VideoCardProps {
  title: string;
  description: string;
  image?: any;
  active?: boolean;
  onPress?: () => void;
}

const VideoCard = ({ title, description, image = PlaceHolderImage, active, onPress }: VideoCardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress} // Call onPress when card is tapped
      style={[
        styles.card,
        active ? styles.activeCard : styles.inactiveCard,
      ]}
    >
      {active && <View style={styles.overlay} />}
      <View style={styles.cardFlex}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={image}
            style={styles.image}
            imageStyle={{ borderRadius: 10 }}
          >
            <View style={styles.playIconContainer}>
              <Ionicons name="play" size={18} color="#fff" />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  cardFlex: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  activeCard: {
    borderWidth: 1,
    borderColor: '#007BFF',
    backgroundColor: '#1F1F1F',
  },
  inactiveCard: {
    borderWidth: 1,
    borderColor: 'rgba(102, 102, 102, 1)',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(63, 99, 246, 0.1)',
    borderRadius: 10,
    zIndex: 1,
  },
  imageContainer: {
    height: 104,
    width: 104,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 140, 255, 1)',
    borderRadius: 50,
    width: 30,
    height: 30,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    flexWrap: 'wrap',
    lineHeight: 20,
  },
  description: {
    color: 'rgba(216, 216, 216, 1)',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    marginTop: 5,
    flexWrap: 'wrap',
    flexShrink: 1,
  },
});

export default VideoCard;
