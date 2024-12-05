import { View, Text, StyleSheet, TouchableOpacity,  } from 'react-native';
import React from 'react';
import { HeroItem } from './SuperHeros';

interface Props {
    items: HeroItem[];
    paginationIndex: number;  
  onPrevious: () => void;
  onNext: () => void;
}

const SliderControls = ({ items, paginationIndex, onPrevious, onNext }: Props) => {
    return (
      <View style={[styles.controls]}>
        <TouchableOpacity onPress={onPrevious}>
          <Text style={styles.textstyle}>◀</Text>
        </TouchableOpacity>
        <Text style={styles.textstyle}>
          {items[paginationIndex]?.name || ''}
        </Text>
        <TouchableOpacity onPress={onNext}>
          <Text style={styles.textstyle}>▶</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    textstyle: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '900',
      fontStyle: 'italic',
      paddingTop: 70,
      paddingBottom: 20,
    },
    controls: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: -55,
      width: '60%',
      textAlign: 'center',
      margin: "auto"
    },
  });
  
  export default SliderControls;
