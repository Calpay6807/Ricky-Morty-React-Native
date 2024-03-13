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
import {Man, Woman} from 'iconsax-react-native';

const CharactersCard = props => {
  const {item, index} = props;
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
            width: width / 14,
            height: width / 14,
            backgroundColor: 'black',
            position: 'absolute',
            top: 5,
            right: 5,
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
        </View>
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: AppColors.BLACK,
                fontWeight: '500',
              }}>
              {item.status}
            </Text>
            <Text
              style={{
                color: AppColors.BLACK,
                fontWeight: '500',

                flexDirection: 'row',
              }}>
              {item.gender === 'Male' ? <Man /> : <Woman />}
              {item.gender}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CharactersCard;

const styles = StyleSheet.create({});
