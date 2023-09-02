import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

const ViewMoreIcon = () => {
  const [isDialogVisible, setDialogVisible] = useState(false);

  const toggleDialog = () => {
    setDialogVisible(!isDialogVisible);
  };

  const handleOptionSelect = (selectedOption: any) => {
    // Handle the selected option here
    alert(`You selected: ${selectedOption}`);
    toggleDialog();
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleDialog}>
        <View style={{ marginRight: 10 }}>
          <SimpleLineIcons name="options-vertical" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ViewMoreIcon;
