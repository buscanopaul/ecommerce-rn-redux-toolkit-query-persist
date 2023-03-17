import { Picker } from '@react-native-picker/picker';
import React, { useRef, useState } from 'react';
import { useClickOutside } from 'react-native-click-outside';

import { Text, TouchableOpacity, View } from 'react-native';
import { Sizes } from '../../typings';
import { WordUppercase } from '../utils/WordUppercase';

type Props = {
  sizes: Sizes[];
};

const ProductInfoSize = ({ sizes }: Props) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0].value);

  const [sizePicker, setSizePicker] = useState(false);

  const sizerRef = useRef(null);

  const pickerRef = useClickOutside<View>(() => setSizePicker(false));

  const handleSizePicker = () => {
    setSizePicker(!sizePicker);
  };

  return (
    <View className="relative w-[45%]">
      <View className="flex-row items-center justify-between py-3 px-6 border border-dashed rounded-full border-darkColor">
        <Text className="font-serif text-gray-400">Size</Text>
        <TouchableOpacity
          onPress={handleSizePicker}
          className="rounded-full bg-gray100 px-3 py-1"
        >
          <Text className="font-serif uppercase">{selectedSize}</Text>
        </TouchableOpacity>
      </View>
      {sizePicker && (
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
            ref={sizerRef}
            selectedValue={selectedSize}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedSize(itemValue);
              setSizePicker(false);
            }}
          >
            {sizes.map((size, index) => (
              <Picker.Item
                key={index}
                label={`${WordUppercase(size.value)}`}
                value={size.value}
              />
            ))}
          </Picker>
        </View>
      )}
    </View>
  );
};

export default ProductInfoSize;
