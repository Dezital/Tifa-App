import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import NotificationComponent from '../Header/NotificationComponent'
import Ionicons from '@expo/vector-icons/Ionicons';
interface Props {
  onBackPress: () => void
}
const HeaderVariant = ({onBackPress}: Props) => {
  
  return (
    <View style={styles.headerFlex}>
      <View style={[NotificationComponentStyles.notificationContainer]}>
          <Ionicons onPress={onBackPress} name='chevron-back-outline' size={24} color={'rgba(255, 255, 255, 1)'} />
          </View>
          <View >
            <Text style={TextheaderStyles.headerText}>{" Open Control"}</Text>
          </View>
          <NotificationComponent headerVariant={true} />
        </View>
  )
}

export default HeaderVariant
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "rgba(0, 54, 171, 1)",
    //backgroundColor: "transparent",
    width: "100%", // Ensures it takes the full width
    alignItems: "center", // Center the text horizontally
    height: 200,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerFlex: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const TextheaderStyles = StyleSheet.create({
  headerText: {
    fontFamily: "Vermin",
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "400",
    fontSize: 13,
    //lineHeight: 18,
    marginTop: 17,
    letterSpacing: -0.17,
    textAlign: "center",
  },
  typographyHeadertext: {
    color: "rgba(255, 255, 255, 0.2)",
    fontFamily: "Vermin",
    fontWeight: "400",
    marginTop: -37,
    fontSize: 180,
    //lineHeight: 200,
    textAlign: "center",
  },
});

const NotificationComponentStyles = StyleSheet.create({
  notificationContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 150,
    borderWidth: 1,
    borderColor: "transparent",
    width: 45,
    height: 45,
  },
  notificationIcon: {
    width: 19,
  },
});