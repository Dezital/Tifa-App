import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ProfileMenuIcon from './ProfileMenuIcon';
import { Ionicons } from '@expo/vector-icons';

const ProfileMenuItem = ({icon, menuTitle, onPress}: {icon: any, menuTitle: string, onPress: () => void}) => {
    return (
      <TouchableOpacity style={prfileMenuItemStyles.container} onPress={onPress}>
        <View style={prfileMenuItemStyles.innerContainer}>
         <ProfileMenuIcon icon={icon}/>
          <Text style={prfileMenuItemStyles.menuItem}>{menuTitle}</Text>
        </View>
        <View>
          <Ionicons name="chevron-forward" size={24} color="#fff" />
        </View>
      </TouchableOpacity>
    );
  }
  const prfileMenuItemStyles = StyleSheet.create({
    container:{
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 10,
      alignItems: "center",
    },
    innerContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    menuItem: {
      color: "rgba(255, 255, 255, 1)",
      fontSize: 16,
      fontWeight: "600",
    },
  })

  
  export default ProfileMenuItem