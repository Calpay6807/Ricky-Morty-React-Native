import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {resizeMode, width} from '../../utils/constant';
import {AppColors} from '../../theme/color';
import {CHDETAİL} from '../../utils/router';
import {useNavigation} from '@react-navigation/native';

const CharactersCard = props => {
  const {item} = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(CHDETAİL, {item: item})}>
      <ImageBackground
        source={{uri: item.image}}
        resizeMode={resizeMode.CONTAIN}
        style={{
          flex: 1,
          width: width / 2 - 20,
          height: width / 2 - 10,
          margin: 5,
        }}>
        <View
          style={{
            backgroundColor: AppColors.GREEN,
            bottom: 0,
            position: 'absolute',
            width: width / 2 - 20,
            padding: 10,
          }}>
          <Text
            numberOfLines={1}
            style={{color: AppColors.WHITE, fontWeight: 'bold'}}>
            {item.name}
          </Text>
          <Text
            style={{
              color: AppColors.BLACK,
              fontWeight: '500',
            }}>
            {item.status}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CharactersCard;

const styles = StyleSheet.create({});
