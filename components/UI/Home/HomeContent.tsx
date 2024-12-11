import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardLayout from '../Header/CardLayout';
import TifaIconBox from './TifaIconBox';
import SuperHeroSlider from './SuperHeros';
import GameView from './Games/GameView';
import IronStrikeHeading from '../TypoGrapghy/IronStrikeHeading';
import { ThemedText } from '@/components/ThemedText';

interface HomeContentProps {
  activeIndex: number;
  routeName: string
}
const noPlayers = require("../../../assets/images/noPlayers.png");
const academy = require("../../../assets/images/academy.png");
const turnedPro = require("../../../assets/images/turnedPro.png");
const internationalCup = require("../../../assets/images/internationalCup.png");
const mvp = require("../../../assets/images/mvp.png");

const HomeContent = ({ activeIndex, routeName }: HomeContentProps) => {
  const renderContent = () => {
    switch (activeIndex) {
      case 0:
        return <Stats />;
      case 1:
        return <Superheros />;
      case 2:
        return <Games />;
      default:
        return <Text>Select a tab to view content</Text>;
    }
  };

  return <View>{renderContent()}</View>;
};

const Stats = () => {
  return (
    <View style={[styles.tifaSportsContainer, {padding: 20}]} >
        <CardLayout routeName='index' />
      <ThemedText style={styles.tifatext}>TIFA Sports Institute is all about the individual talent development of every player as we focus on functional technique. Apart from the technical aspects we also value motivation, self-believe, and mentality. All these aspects are incorporated into our training philosophy and conversations we have with our players. All this makes us prides the best talent developing institute of The Netherlands.</ThemedText>
      <IronStrikeHeading variant='default'  title="Tifa Stats" />
      <View style={{marginTop: 5}}>
      <View style={styles.IconBoxContainer}>
      <TifaIconBox iconurl={noPlayers} title="750" subtitle="No. of Players" />
      <TifaIconBox iconurl={academy} title="55%" subtitle="% Academy"  />
      <TifaIconBox iconurl={turnedPro} title="04" subtitle="No. of players turned pro" />
      </View>
      <View style={styles.IconBoxContainer}>
      <TifaIconBox iconurl={turnedPro} title="09" subtitle="No. of Players in UEFA Youth Leage" />
      <TifaIconBox iconurl={internationalCup} title="194" subtitle="Winner International Youth Cup" />
      <TifaIconBox iconurl={mvp} title="19" subtitle="MVP International Youth Cup" />
      </View>
      </View>
    </View>
  );
};


const Superheros = () => {
  return (
    <View  style={styles.tifaSportsContainer} >
      <SuperHeroSlider />
    </View>
  );
};

const Games = () => {
  return (
    <View style={[styles.tifaSportsContainer, {padding: 20}]}>
      <GameView />
    </View>
  );
};

const styles = StyleSheet.create({
    tifaSportsContainer: {
      marginTop: 20,
    },
    tifatext: {
        marginTop: 50,
        color: 'rgba(174, 174, 174, 1)',
        lineHeight: 18,
        fontWeight: '400',
        fontSize: 13,
    },
    IconBoxContainer: {
      flexDirection: 'row',           // Keeps items in a row
      justifyContent: 'space-evenly', // Evenly spaces the items
      marginTop: 15,
      gap: 15,                        // Adds space between the items
      flexWrap: 'nowrap',             // Prevents wrapping; ensures 3 boxes per row
      width: '100%',                  // Ensures the container takes full width
    },
    sliderContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }
});

export default HomeContent;
