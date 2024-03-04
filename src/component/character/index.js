import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CharactersCard = props => {
  const {item} = props;
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
};

export default CharactersCard;

const styles = StyleSheet.create({});
