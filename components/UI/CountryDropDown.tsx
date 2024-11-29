import React, { useState, memo } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props {
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}

interface Option {
  label: string;
  value: string;
}

const CountryDropDown = ({ selectedValue, setSelectedValue }: Props) => {
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

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdown} onPress={() => setModalVisible(true)}>
        <Text style={styles.selectedText}>{selectedValue || 'Select an Option'}</Text>
        <Ionicons name="chevron-down-outline" size={20} color="rgba(199, 199, 199, 1)" style={styles.icon} /> 
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <TouchableOpacity style={styles.overlay} onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <FlatList
              data={options}
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
  container: {
    width: '100%',
    marginVertical: 7,
  },
  dropdown: {
    backgroundColor: '#1E2021',
    borderRadius: 12,
    padding: 10,
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedText: {
    color: "rgba(142, 142, 147, 1)",
    fontSize: 15,
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