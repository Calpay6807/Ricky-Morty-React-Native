import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {resizeMode, width} from '../../utils/constant';
import {AppColors} from '../../theme/color';

const Episodes = props => {
  const {item, index} = props;
  return (
    <TouchableOpacity>
      <View
        style={{
          flex: 1,
          width: width / 2 - 10,
          height: width / 2 - 30,
          margin: 5,
        }}>
        <View
          style={{
            backgroundColor: 'black',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: AppColors.WHITE,
              fontSize: 20,
            }}>
            {index}
          </Text>
          <Text
            style={{
              color: AppColors.GREEN,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Episode:
            {item.episode}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: AppColors.GREEN,
            bottom: 0,
            position: 'absolute',
            width: width / 2 - 10,
            padding: 10,
          }}>
          <Text
            numberOfLines={1}
            style={{color: AppColors.WHITE, fontWeight: 'bold'}}>
            {item.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Episodes;

const styles = StyleSheet.create({});
