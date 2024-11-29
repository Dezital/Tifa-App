import { StyleSheet, Button, View } from 'react-native'
import React from 'react'

const magezine = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Button  title="Press me" onPress={() => { throw new Error('Hello, again, Sentry!'); }}/>
    </View>
  )
}

export default magezine

const styles = StyleSheet.create({})