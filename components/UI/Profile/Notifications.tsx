import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Divider from "../Divider";
const plusCircle = require("../../../assets/images/PlusCircle.png");
const notIcon = require("../../../assets/images/notIcon.png");
const CreditCardIcon = require("../../../assets/images/CreditCard.png");

const Notifications = () => {
  return (
    <View>
      <View style={{ marginTop: -15 }} />
      <Text style={notificationsStyles.notificationRangeText}>TODAY</Text>
      <View style={notificationsStyles.notificationbox}>
        <NotificationsBox
          icon={notIcon}
          notificationText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          time="11.00 AM"
        />
        <Divider />
        <NotificationsBox
          icon={plusCircle}
          notificationText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          time="11.00 AM"
        />
        <Divider />
        <NotificationsBox
          icon={CreditCardIcon}
          notificationText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          time="11.00 AM"
        />
        <Divider transparent={true} />
      </View>
      <Text style={notificationsStyles.notificationRangeText}>YESTERDAY</Text>
      <View style={notificationsStyles.notificationbox}>
        <NotificationsBox
          icon={notIcon}
          notificationText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          time="11.00 AM"
        />
        <Divider />
        <NotificationsBox
          icon={plusCircle}
          notificationText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          time="11.00 AM"
        />
        <Divider />
        <NotificationsBox
          icon={CreditCardIcon}
          notificationText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          time="11.00 AM"
        />
        <Divider transparent={true} />
      </View>
      <Text style={notificationsStyles.notificationRangeText}>Older</Text>
      <View style={notificationsStyles.notificationbox}>
        <NotificationsBox
          icon={notIcon}
          notificationText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          time="11.00 AM"
        />
        <Divider />
        <NotificationsBox
          icon={plusCircle}
          notificationText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          time="11.00 AM"
        />
        <Divider />
        <NotificationsBox
          icon={CreditCardIcon}
          notificationText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          time="11.00 AM"
        />
        <Divider transparent={true} />
      </View>
    </View>
  );
};

const NotificationsBox = ({
  icon,
  notificationText,
  time,
}: {
  icon?: any;
  notificationText?: string;
  time?: string;
}) => {
  return (
    <View style={notificationsStyles.notificationBoxContainer}>
      <View style={notificationsStyles.notificationBoxIcon}>
        <Image source={icon} style={{ width: 19, height: 19 }} />
      </View>
      <View style={notificationsStyles.notificationBoxContent}>
        <Text style={notificationsStyles.notficationBoxText}>
          {notificationText}
        </Text>
        <Text style={notificationsStyles.notifcatonBoxTime}>{time}</Text>
      </View>
    </View>
  );
};

const notificationsStyles = StyleSheet.create({
  notificationRangeText: {
    fontSize: 14,
    fontWeight: "400",
    color: "rgba(221, 221, 221, 1)",
    marginTop: 15,
    marginBottom: 20,
  },
  notificationbox: {
    backgroundColor: "rgba(21, 23, 24, 1)",
    borderRadius: 12,
  },
  notificationBoxContainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  notficationBoxText: {
    fontSize: 14,
    fontWeight: "500",
    color: "rgba(221, 221, 221, 1)",
    lineHeight: 20,
    paddingBottom: 5,
  },
  notifcatonBoxTime: {
    fontSize: 12,
    fontWeight: "500",
    color: "rgba(172, 174, 190, 1)",
    wordWrap: "wrap",
  },
  notificationBoxIcon: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(216, 227, 254, 1)",
    borderRadius: 50,
    height: 40,
    width: 40,
  },
  notificationBoxContent: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
export default Notifications;
