// TabBarIcon.tsx
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, StyleSheet } from 'react-native';
import { type ComponentProps } from 'react';

// Define IconProps with conditional type for 'name'
type IconProps = {
  name: ComponentProps<typeof Ionicons>['name'];
  color: string;
  focused: boolean;
};

// Import custom icon if needed
const homeIcon = require('../../assets/images/tifa-home.png');
const kickTifa = require('../../assets/images/kickTifa.png');
const magezine = require('../../assets/images/magezine.png');
const balltifa = require('../../assets/images/ballTifa.png');

export function TabBarIcon({ name, color, focused, ...rest }: IconProps) {
  if (name === 'home') {
    // Example of using a custom image for the focused "Home" tab
    return <Image source={homeIcon} style={[styles.icon, { tintColor: color }]} />;
  }
  else if (name === 'football') {
    return <Image source={kickTifa} style={[styles.icon, { tintColor: color }]} />;
  }
  else if(name === 'newspaper') {
    return <Image source={magezine} style={[styles.icon, { tintColor: color }]} />;
  }
  else if (name === 'tennisball') {
    return <Image source={balltifa} style={[styles.icon, { tintColor: color }]} />;
  }
  else{
  return <Ionicons name={name} size={28} color={color} style={styles.icon} {...rest} />;
  }
}

const styles = StyleSheet.create({
  icon: {
    marginBottom: -3,
  },
});
