import { Text, StyleSheet } from "react-native";
import React from "react";

const IronStrikeHeading = ({
  title,
  variant,
}: {
  title: string;
  variant: string;
}) => {
  return (
      <Text
        style={[
          variant === "default" ? styles.tifaStatsHeading : undefined,
          variant === "title" ? styles.title : undefined,
          variant === "playerName" ? styles.playerName : undefined,
          variant === "redColored" ? styles.redColored : undefined,
          variant === "largest" ? styles.largest : undefined,
          variant === "number" ? styles.number : undefined,
          variant === "cardlayout" ? styles.cardlayout : undefined,
          variant === "ballcontrol" ? styles.ballcontrol : undefined,
        ]}
      >
        {title}{" "}
      </Text>
  );
};

const styles = StyleSheet.create({
  tifaStatsHeading: {
    fontFamily: "Ironstrike",
    marginTop: 30,
    fontSize: 16,
    lineHeight: 16,
    color: "#fff",
  },
  ballcontrol: {
    fontFamily: "Ironstrike",
    fontSize: 16,
    color: "#fff",
  },
  title: {
    fontFamily: "Ironstrike",
    fontSize: 18,
    lineHeight: 18,
    color: "#fff",
    paddingTop: 77,
    paddingBottom: 20,
  },
  playerName:{
    fontFamily: "Ironstrike",
    fontSize: 18,
    lineHeight: 18,
    color: "#fff",
    paddingTop:30
  },
  redColored: {
    color: "rgba(255, 0, 0, 1)",
    fontFamily: "Ironstrike",
  },
  largest:{
    fontFamily: "Ironstrike",
    fontSize: 28,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "rgba(190, 190, 190, 1)",
    flex:1,
  },
  number: {
    fontFamily: "Ironstrike",
    paddingTop: 10,
    fontSize: 50,
    lineHeight: 50,
    textAlign: "center",
    color: "rgba(190, 190, 190, 1)",
    flex:1,
  },
  cardlayout:{
    fontSize: 34,
    lineHeight: 34,
    color: "rgba(0, 140, 255, 1)",
    textAlign: "center",
    fontFamily: "Ironstrike",
  }
});

export default IronStrikeHeading;
