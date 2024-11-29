import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';


interface NameViewProps { // Renamed to match the component name
  islistView?: boolean;
  setlistView: React.Dispatch<React.SetStateAction<boolean>>;
  text?: string;

}

const NameView = ({ islistView, text, setlistView }: NameViewProps) => {
  const marginTop = 65; // Changed to numeric values

  return (
    <View style={[NameContStyles.headerFlex, { marginTop }]}>
      <Text style={NameContStyles.headerText}>{text}</Text>
      <View style={{flexDirection:'row', gap:10}}>  
      <Ionicons onPress={() => setlistView(true)} name="square-outline" f size={27} color={islistView ? "rgba(0, 140, 255, 1)" : "#fff"} />
      <Ionicons onPress={() => setlistView(false)} name="grid" size={24} color={islistView ? "#fff" : "rgba(0, 140, 255, 1)"} />
      </View>
    </View>
  );
};

const NameContStyles = StyleSheet.create({
  headerFlex: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    marginBottom: 10,
    paddingRight: 20,
  },

  headerText: {
    fontWeight: "900",
    fontSize: 16,
    color: "rgba(255, 255, 255, 1)",
  },

  count: {
    color: "rgba(0, 140, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
  },
});

export default NameView;
