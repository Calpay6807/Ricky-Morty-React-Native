import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {height, width} from '../../utils/constant';
import {AppColors} from '../../theme/color';

const CostumeInput = props => {
  return (
    <View>
      <TextInput
        style={{
          minHeight: height / 20,
          borderColor: AppColors.GREEN,
          borderWidth: 10,
          borderStartStartRadius: 10,
          borderEndStartRadius: 10,
          fontSize: 18,
          padding: 10,
          width: width / 1.2,
        }}
        {...props}
        keyboardType="default"
        returnKeyType="search"
        clearButtonMode="always"
      />
    </View>
  );
};

export default CostumeInput;

const styles = StyleSheet.create({});
