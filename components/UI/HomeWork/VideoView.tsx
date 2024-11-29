import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from 'react'
import { Link } from "expo-router"
const placeholderImage = require("../../../assets/images/placeHolderBg.png");


interface VideoViewProps {
  isListView?: boolean
}

const VideoView = ({isListView}: VideoViewProps) => {
  return (
    <View>
      {
        isListView ? (
          <ListViewComponent />
        ) : (
          <GridView />
        )
      }  
    </View>
  )
}

export default VideoView

const items = [
  { id: 1, label: "Week 1-3" },
  { id: 2, label: "Week 4-6" },
  { id: 3, label: "Week 7-8" },
  { id: 4, label: "Week 9-10" },
  { id: 5, label: "Week 11-12" },
  { id: 6, label: "Week 13-15" },
  { id: 7, label: "Week 1-3" },
  { id: 8, label: "Week 4-6" },
  { id: 9, label: "Week 7-8" },
  { id: 10, label: "Week 9-10" },
  { id: 11, label: "Week 11-12" },
  { id: 12, label: "Week 13-15" },
];


const GridView = () => {
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <TouchableOpacity key={item.id} style={styles.card}>
        <Link
        style={styles.linkStyle}
        href={{
          pathname: '/(tabs)/homeworklist/[id]',
          params: { id: item.id },
        }}
      >
        {/* Link wraps everything, no need for inner elements */}
      </Link>
          {/* Use placeholderImage directly without uri */}
          <Image source={placeholderImage} style={styles.image} />
          <View style={styles.overlay}>
            <Text style={styles.label}>{item.label}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const ListViewComponent = () => {
  return (
    <>
    {items.map((item) => (
    <View style={listViewStyles.container} key={item.id} >
      <Image
        source={placeholderImage}
        style={listViewStyles.image}
      />
      <Link
        style={styles.linkStyle}
        href={{
          pathname: '/(tabs)/homeworklist/[id]',
          params: { id: item.id },
        }}
      ></Link>
      <View style={listViewStyles.badge}>
        <Text style={listViewStyles.badgeText}>25% Completed</Text>
      </View>
      <View style={listViewStyles.bottomBar}>
        <Text style={listViewStyles.bottomBarText}>{items[0].label}</Text>
      </View>
    </View>
     ))}
     </>
    )
};


const listViewStyles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: 'relative',
    width: '100%',
    height: 160,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  badge:{
    position: 'absolute', top: 15, left:25, backgroundColor:  "rgba(44, 44, 44, 1)", borderRadius: 10, padding: 5,
  },
  badgeText:{ color: 'white', fontSize: 12 },
  bottomBar:{ position: 'absolute', bottom: 10, left: 20, backgroundColor: 'rgba(0, 122, 226, 0.67)', borderBottomEndRadius: 10, borderBottomLeftRadius: 10, padding: 0, width: "100%", height: 25, },
  bottomBarText:{ color: 'white', fontSize: 16, textAlign: 'center' }
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  card: {
    width: "31%", 
    height: 135,
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden", 
    position: "relative", 
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0, 122, 226, 0.67)", 
    padding: 5,
    alignItems: "center",
  },
  label: {
    color: "#fff",
    fontWeight: "bold",
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