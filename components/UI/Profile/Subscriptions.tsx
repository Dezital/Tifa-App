import { View, Dimensions, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import List from "../List";
import { AuthButton } from "../Button";
const height = Dimensions.get("window").height;

const CreditCardIcon = require("../../../assets/images/tick.png");
const Currency = require("../../../assets/images/Currency.png");
const Subscriptions = () => {
  return (
    <View>
      <View style={{flexDirection: "column", justifyContent: "space-between", gap: 20}}>
      <View style={styles.container}>
        <View>
          <Text style={styles.textfieldlabel}>Current Plans</Text>
          <SubscriptionsBox isActive={true} onPress={() => {}} />
          <Text style={[styles.textfieldlabel, {marginTop: 21}]}>Other Plans</Text>
          <SubscriptionsBox isActive={false} onPress={() => {}} />
          <SubscriptionsBox isActive={false} onPress={() => {}} />
        </View>
      </View>
      <View>
        <View style={{marginTop: 20}}>
      <AuthButton formatBlue="blue" asyncFunctionPass={() => {}} Title="CHANGE SUBSCRIPTION" />
      </View>
      <Text onPress={() => {}} style={styles.spanLink} >CANCEL SUBSCRIPTION</Text>
      </View>
      </View>
    </View>
  );
};

const SubscriptionsBox = ({isActive, onPress}:{isActive: boolean, onPress: () => void}) => {
  const backgroundColor = isActive ? "rgba(0, 54, 171, 1)" : "rgba(1, 135, 250, 0.11)";
  const boderColor = isActive ? "rgba(0, 140, 255, 1)" : "transparent";
  return (
    <View style={[subscriptionsStyles.subsContainer, {backgroundColor: backgroundColor, borderColor: boderColor}]}>
      <View style={subscriptionsStyles.innerContainer}>
        <View style={subscriptionsStyles.planContainer}>
        <Text style={subscriptionsStyles.planText}>01 Month Plan</Text>
        {!isActive && <Badge />}
        </View>
        <IconBoxPressAble icon={CreditCardIcon} onPress={onPress} isActive={isActive} />
      </View>
      <View style={subscriptionsStyles.currencyContainer}>
      <Text  style={subscriptionsStyles.currency} >10</Text>
      <Image source={Currency}  style={subscriptionsStyles.iconStyle}/>
      </View>
      <List />
    </View>
  );
};

const subscriptionsStyles = StyleSheet.create({
  subsContainer:{marginTop: 17, borderRadius: 20, paddingVertical: 10, paddingHorizontal: 20, borderWidth: 1},
  innerContainer:{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  planText: { fontSize: 16, fontWeight: "400", color: "rgba(255, 255, 255, 1)" },
  currencyContainer: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center" },
  currency:{ fontSize: 30, fontWeight: "700", color: "rgba(255, 255, 255, 1)" },
  iconStyle:{ width: 12, height: 12, marginLeft: 5, marginTop: 5 },
  planContainer:{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 10 },
});

const IconBoxPressAble = ({ icon, onPress, isActive}: { icon: any, onPress: () => void, isActive?: boolean }) => {
  const borderColor = isActive ? "rgba(216, 227, 254, 1)" : "rgba(0, 140, 255, 1)";
  const backgroundColor = isActive ? "rgba(216, 227, 254, 1)" : "transparent";
  return (
    <TouchableOpacity onPress={onPress} style={[IconBoxPressAbleStyles.notificationBoxIcon, { borderColor, backgroundColor }]}>
      {isActive && <Image source={icon} style={{ width: 19, height: 19 }} />}
  </TouchableOpacity>
  );
}

const Badge = () => {
  return (
    <View style={badgeStyles.container}>
      <Text style={badgeStyles.text}>25% Completed</Text>
    </View>
  );
}

const badgeStyles = StyleSheet.create({
  container:{
    backgroundColor: "rgba(2, 147, 0, 1)",
    borderRadius: 100,
    paddingVertical: 3,
    paddingHorizontal: 8
  },
  text: {
    fontSize: 12,
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
  }
})
const IconBoxPressAbleStyles = StyleSheet.create({
  notificationBoxIcon: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    height: 40,
    width: 40,
    borderWidth: 1,
  },
})
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  textfieldlabel: {
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: -0.4,
    color: "#fff",
    textAlign: "left",
    alignSelf: "flex-start",
  },
  spanLink: {
    color: "rgba(255, 255, 255, 1)",
    marginTop: 15,
    textAlign: "center",
    cursor: "pointer",
    fontWeight: "400",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});
export default Subscriptions;
