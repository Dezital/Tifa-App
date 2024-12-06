import { View, Text } from 'react-native'
import React from 'react'

const Divider = ({biggerMargin, transparent} : {biggerMargin?: boolean, transparent?: boolean}) => {
    const marginVariant = biggerMargin ? 20 : 10
    const backgroundColor = transparent ? "transparent" : "rgba(102, 102, 102, 0.5)"
  return (
    <View style={{
        height: 1,
        backgroundColor: backgroundColor,
        width: "100%",
        marginVertical: marginVariant
        }}/>
  )
}

export default Divider