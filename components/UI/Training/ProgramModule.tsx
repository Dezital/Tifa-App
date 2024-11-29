import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
const placeHolderBg = require('../../../assets/images/placeHolderBg.png');
const padLockIcon = require('../../../assets/images/PadLock.png');
import ProgressBar from '../../../components/UI/ProgressBar';
import { Link } from "expo-router"

interface VideoProps {
  id: string;
  title: string;
  video: string;
  content: string;
  desc: string;
}

interface CourseProps {
  id: string;
  title?: string;
  content?: string;
  desc: string;
  image?: string;
  lock: boolean;
  progress: number;
  videos: VideoProps[];
}

interface ProgramModuleProps {
  course: CourseProps;
}

const ProgramModule: React.FC<ProgramModuleProps> = ({ course }) => {

  const {
    title,
    content,
    desc,
    image,
    lock,
    progress,
    videos
  } = course;

  const totalVideos = videos.length;
  const watchedVideos = Math.floor((progress / 100) * totalVideos);

  return (
    <View style={programModuleStyles.programModuleContainer}>
      <Link
        style={programModuleStyles.linkStyle}
        href={{
          pathname: '/traininglist/[id]',
          params: { id: course.id },
        }}
      >
        {/* Link wraps everything, no need for inner elements */}
      </Link>
      <ImageBackground
        source={placeHolderBg}
        resizeMode="cover"
        style={programModuleStyles.programModuleBg}
      >
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.84)', 'rgba(0, 0, 0, 0)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={programModuleStyles.overlay}
        />
        <Text style={programModuleStyles.programModuleHeading}>{title}</Text>
        <Text style={programModuleStyles.programModuleText}>{content}</Text>
        {/* Progress Bar and Lock */}
        <View style={programModuleStyles.programMduleflex}>
          <ProgressBar totalVideos={totalVideos} watchedVideos={watchedVideos} />
          {lock && (
            <View style={programModuleStyles.padLockBg}>
              <Image source={padLockIcon} style={programModuleStyles.padlock} />
            </View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProgramModule;

const programModuleStyles = StyleSheet.create({
  programModuleContainer: {
    backgroundColor: "#fff",
    height: 200,
    marginTop: 18,
    borderRadius: 20,
    overflow: "hidden", // Ensures the overlay stays within the border radius
    position: 'relative', // To ensure absolute positioning of the Link
  },
  programModuleBg: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Fills the entire ImageBackground
    borderRadius: 20,
  },
  programModuleHeading: {
    color: "white",
    fontSize: 18,
    paddingBottom: 10,
    lineHeight: 23,
    fontWeight: "700",
  },
  programModuleText: {
    fontSize: 13,
    lineHeight: 17,
    paddingBottom: 20,
    fontWeight: "400",
    color: "rgba(199, 199, 199, 1)",
    width: "60%",
  },
  programMduleflex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  padLockBg: {
    backgroundColor: "rgba(40, 42, 44, 1)",
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },
  padlock: {
    width: 13,
  },
  linkStyle: {
    position: 'absolute', // Ensure it covers the entire container
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10, // Make sure it's above other elements
    cursor: 'pointer',
  },
});
