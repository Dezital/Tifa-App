import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import Game from '../../../components/UI/Home/Games/Game'

const PingPongGame = () => {
  const { id } = useLocalSearchParams();
  return (
    <GestureHandlerRootView style={styles.container}>
    <Game />
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
})

export default PingPongGame
