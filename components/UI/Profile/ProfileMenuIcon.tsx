import React from 'react';
import { View, Image } from 'react-native';

const ProfileMenuIcon = ({icon}: {icon: any}) => {
    return (
      <View style={{padding: 15, backgroundColor: "rgba(21, 23, 24, 1)", borderRadius: 5}}>
        <Image style={{ width: 17, height: 17, resizeMode: "contain"}} source={icon} />
      </View>
    );
  }

  export default ProfileMenuIcon