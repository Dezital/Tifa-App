import React, { useState, memo } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import ProfileMenuItem from './Profile/ProfileMenuItem';

const languageIcon = require("../../assets/images/language.png");
interface Props {
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  isLanguageSwitcher?: boolean;
  isDarkBg?: boolean
  isFeedback?: boolean
  isSortFilter?: boolean
}

interface Option {
  label: string;
  value: string;
}

const CountryDropDown = ({ selectedValue, setSelectedValue, isLanguageSwitcher, isDarkBg, isFeedback, isSortFilter }: Props) => {
  const darker = isDarkBg ? "rgba(21, 23, 24, 1)" : "#1E2021";
  const [modalVisible, setModalVisible] = useState(false);
  const options = [
    { label: 'Netherlands', value: 'Netherlands' },
    { label: 'Germany', value: 'Germany' },
    { label: 'United Kingdom', value: 'United Kingdom' },
    { label: 'France', value: 'France' },
    { label: 'United States', value: 'United States' },
    { label: 'Canada', value: 'Canada' },
    { label: 'Sweden', value: 'Sweden' },
    { label: 'Belgium', value: 'Belgium' },
    { label: 'Luxembourg', value: 'Luxembourg' },
    { label: 'Other', value: 'Other' },
  ];
  const LanguageOption =[
    { label: 'English', value: 'English'},
    { label: 'Dutch', value: 'Dutch'},
    { label: 'Spanish', value: 'Spanish'}
  ]
  const feedbackoption =[
    { label: 'Bugs', value: 'Bugs'},
    { label: 'Functionality', value: 'Functionality'},
    { label: 'Design', value: 'Design'},
    { label: 'Suggestions', value: 'Suggestions'},
    { label: 'Other', value: 'Other'},
  ]
  
  const filteroptions =[
    { label: 'New on top', value: 'Not'},
    { label: 'Old on top', value: 'Oot'},
    { label: 'Alphabetical', value: 'Alphabetical'},
  ]

  const optionToRender = isLanguageSwitcher ? LanguageOption : isFeedback ? feedbackoption : isSortFilter ? filteroptions : options 

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setModalVisible(false);
  };

  // Memoized OptionItem to prevent unnecessary re-renders
  const OptionItem = memo(({ item }: { item: Option }) => (
    <TouchableOpacity style={styles.option} onPress={() => handleSelect(item.value)}>
      <Text style={styles.optionText}>{item.label}</Text>
    </TouchableOpacity>
  ));

  // Ensure keyExtractor is stable and unique
  const keyExtractor = (item: Option) => item.value;
  const marginver = isLanguageSwitcher ? 0 : 7
  const widthfull = isLanguageSwitcher ? "auto" : "100%"

  return (
    <View style={{ marginVertical: marginver, width: widthfull}}>
      {isLanguageSwitcher  && <ProfileMenuItem icon={languageIcon} menuTitle="Language" onPress={() => setModalVisible(true)}/> }
      {!isLanguageSwitcher &&  !isFeedback && !isSortFilter &&<TouchableOpacity style={[styles.dropdown, { backgroundColor: darker }]} onPress={() => setModalVisible(true)}>
        <Text style={styles.selectedText}>{selectedValue || 'Select an Option'}</Text>
        <Ionicons name="chevron-down-outline" size={20} color="rgba(199, 199, 199, 1)" style={styles.icon} /> 
      </TouchableOpacity>
      }
      {isSortFilter &&
      <TouchableOpacity style={[styles.filter, { backgroundColor: darker }]} onPress={() => setModalVisible(true)}>
          <Ionicons name="filter" size={19} color="rgba(199, 199, 199, 1)" style={styles.icon} /> 
        <Text style={styles.selectedText}>{selectedValue || 'Sort'}</Text>
        </TouchableOpacity>
      }

      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <TouchableOpacity style={styles.overlay} onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <FlatList
              data={optionToRender}
              renderItem={({ item }) => <OptionItem item={item} />}  // Render memoized items
              keyExtractor={keyExtractor}
              initialNumToRender={20}  // Render only a small number of items initially
              maxToRenderPerBatch={20}  // Render items in smaller batches
              windowSize={5}  // Number of items to keep in memory on either side of the viewport
              removeClippedSubviews={true}  // Unmount offscreen items to improve performance
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  dropdown: {
    borderRadius: 12,
    padding: 10,
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filter:{
    borderRadius: 12,
    marginTop: 4,
    paddingVertical: 15,
    justifyContent: 'space-between',
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedText: {
    color: "rgba(142, 142, 147, 1)",
    fontSize: 14,
    flex: 1,
  },
  icon: {
    marginLeft: 10,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .7)',
  },
  modalContainer: {
    backgroundColor: '#1E2021',
    borderRadius: 12,
    width: '80%',
    maxHeight: 300,
    padding: 10,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  optionText: {
    color: '#fff',
  },
});

export default CountryDropDown;