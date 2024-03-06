import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CharactersDetail = ({route}) => {
  //! yukarda proppertye props verirsek aşağıdaki yolu izlemeliyiz ama ({route })
  // yazarsak 2. adımı islemeliyiz
  //   const {
  //     route: {
  //       params: {item},
  //     },
  //   } = props;

  // 2.adım
  const {item} = route.params;
  return (
    <SafeAreaView>
      <Text>{item.name}</Text>
    </SafeAreaView>
  );
};

export default CharactersDetail;

const styles = StyleSheet.create({});
