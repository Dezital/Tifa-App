import { View, Image, Text, StyleSheet, TouchableOpacity  } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
const pingpongImage = require("../../../../assets/images/pingpong.png")
import { useRouter } from 'expo-router'
const GameView = () => {

  return (
    <CardLayoutGame />
  )
}

const CardLayoutGame = () => {
  const router = useRouter()
  const onPlay = () => {
    router.push({ pathname: '/(tabs)/pingpong/[id]' , params: { id: 1} })
  }

  return (
    <View style={styles.viewContainer}>
      <View style={styles.wrapper}>
        <Image source={pingpongImage} style={styles.image} />
        <View style={styles.innerwrapper}>
        <Text style={styles.textstyle}>PING PONG</Text>
        <TouchableOpacity style={styles.flexdis} onPress={onPlay}>
            <View style={styles.playbutton}>
            <Ionicons name="play" size={18} color="rgba(255, 255, 255, 1)" />
            <Text style={styles.playtext}>PLAY</Text>
            </View>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: "rgba(30, 32, 33, 1)",
    borderRadius: 20,
    marginTop: -100,
    marginBottom: 15,
    width: "100%"
  },
  wrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    padding: 15,
  },
  image: {
    width: "100%",
    height: 180,
    resizeMode: "contain",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 1)",
    borderRadius: 20,
    backgroundColor: "#000",
  },
  innerwrapper: {
    width: "100%",
    padding: 15,
    marginTop: 10
  },
  textstyle: {
      fontWeight: "700",
      fontSize: 20,
      color: "#fff",
  },
  flexdis:{
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    gap: 10
  },
  playbutton: {
    backgroundColor:"rgba(0, 140, 255, 1)",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 35,
    gap: 5
  },
  playtext: {
      fontSize: 16,
      fontWeight: "500",
      color: "rgba(255, 255, 255, 1)"
  }

})

export default GameView
