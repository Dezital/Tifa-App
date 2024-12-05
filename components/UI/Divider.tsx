import { View, Text } from 'react-native'
import React from 'react'

const Divider = ({biggerMargin}: {biggerMargin?: boolean}) => {
    const marginVariant = biggerMargin ? 20 : 10
  return (
    <View style={{
        height: 1,
        backgroundColor: "rgba(102, 102, 102, 0.5)",
        width: "100%",
        marginVertical: marginVariant
        }}/>
  )
}

export default Divider