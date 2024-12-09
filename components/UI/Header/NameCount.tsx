import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import IronStrikeHeading from '../TypoGrapghy/IronStrikeHeading';

interface NameCountProps { // Renamed to match the component name
  headerVariant?: boolean;
  text?: string;
  count?: string;
}

const NameCount = ({ headerVariant, text, count }: NameCountProps) => {
  const marginTop = headerVariant ? 25 : 65; // Changed to numeric values

  return (
    <View style={[NameContStyles.headerFlex, { marginTop }]}>
      <IronStrikeHeading variant="ballcontrol" title={headerVariant ? "" : text || ''}/>
      <Text style={NameContStyles.count}>{headerVariant ? "8 Videos" : count}</Text>
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

  count: {
    color: "rgba(0, 140, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
  },
});

export default NameCount;
