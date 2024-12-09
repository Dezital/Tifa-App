import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import NotificationComponent from '../Header/NotificationComponent';
import BackPress from '../BackPress';


interface Props {
  onBackPress: () => void;
  title: string;
}

const HeaderVariant = ({ onBackPress, title }: Props) => {
  // Extract the first word from the title
  const shortTitle = title.split(' ')[0];

  return (
    <View style={styles.headerFlex}>
     <BackPress onBackPress={onBackPress} />
      <View>
        <Text style={TextheaderStyles.headerText}>{shortTitle}</Text>
      </View>
      <NotificationComponent headerVariant={true} />
    </View>
  );
};



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
    minWidth:"50%"
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