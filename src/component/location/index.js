import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {width} from '../../utils/constant';
import {AppColors} from '../../theme/color';

const LocationsCard = props => {
  const {item} = props;
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
            width: '100',
            height: '100%',
            backgroundColor: 'black',

            alignItems: 'center',
            justifyContent: 'flex-start',
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              margin: 10,
              textAlign: 'center',
              fontWeight: 'bold',
              fontFamily: 'Serif',
            }}>
            {item.dimension}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: AppColors.GREEN,
            bottom: 0,
            position: 'absolute',
            width: width / 2 - 10,
            height: width / 5 - 10,
            padding: 10,
          }}>
          <Text
            numberOfLines={1}
            style={{
              color: AppColors.WHITE,
              fontWeight: 'bold',
            }}>
            {item.name}
          </Text>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 10,
            }}>
            <Text
              numberOfLines={1}
              style={{
                color: AppColors.WHITE,
                fontWeight: 'bold',
              }}>
              {item.type}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LocationsCard;

const styles = StyleSheet.create({});
