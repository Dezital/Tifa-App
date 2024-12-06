import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const List = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.bullet}>{'\u2022'}</Text>
        <Text style={styles.text}>Unlock full access to all features</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.bullet}>{'\u2022'}</Text>
        <Text style={styles.text}>
          We’ll remind you about when your trial will end
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    justifyContent: 'flex-start',
  },
  bullet: {
    fontSize: 16,
    marginRight: 8,
    color: '#fff',
  },
  text: {
    fontSize: 13,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)',
    flexShrink: 1,
  },
});

export default List;
