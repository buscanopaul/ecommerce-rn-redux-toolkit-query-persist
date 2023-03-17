import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import React, { useRef, useState } from 'react';
import { useClickOutside } from 'react-native-click-outside';

import { Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../typings';
import { WordCapitalize } from '../utils/WordCapitalize';

type Props = {
  colors: Colors[];
};

const ProductInfoColor = ({ colors }: Props) => {
  const [selectedColor, setSelectedColor] = useState(colors[0].value);

  const [colorPicker, setColorPicker] = useState(false);

  const colorRef = useRef(null);

  const pickerRef = useClickOutside<View>(() => setColorPicker(false));

  const handleColorPicker = () => {
    setColorPicker(!colorPicker);
  };

  return (
    <View className="relative w-[45%]">
      <View className="flex-row items-center justify-between py-3 px-6 border border-dashed rounded-full border-darkColor">
        <Text className="font-serif text-gray-400">Color</Text>
        <TouchableOpacity
          onPress={handleColorPicker}
          className="rounded-full shadow-lg"
          style={{ backgroundColor: selectedColor }}
        >
          <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {colorPicker && (
        <View
          ref={pickerRef}
          style={{ position: 'absolute', width: '100%', top: 50 }}
        >
          <Picker
            mode="dropdown"
            style={{
              borderWidth: 1,
              borderRadius: 20,
              marginTop: 10,
              borderColor: 'lightgray',
            }}
            ref={colorRef}
            selectedValue={selectedColor}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedColor(itemValue);
              setColorPicker(false);
            }}
          >
            {colors.map((color, index) => (
              <Picker.Item
                key={index}
                label={`${WordCapitalize(color.value)}`}
                color={color.value}
                value={color.value}
              />
            ))}
          </Picker>
        </View>
      )}
    </View>
  );
};

export default ProductInfoColor;
