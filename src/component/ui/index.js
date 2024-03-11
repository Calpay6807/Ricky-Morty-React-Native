import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CostumeInput from './costumeInput';
import {FilterSearch, FilterSquare} from 'iconsax-react-native';
import {AppColors} from '../../theme/color';

const SearchBar = props => {
  const {openModal, setSearchText, searchText, searchCharacters} = props;

  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <CostumeInput
        placeholder={'Search'}
        value={searchText}
        onChangeText={text => setSearchText(text)}
        onSubmitEditing={() => searchCharacters()}
      />
      <TouchableOpacity
        onPress={openModal}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: AppColors.GREEN,
          borderStartEndRadius: 10,
          borderEndEndRadius: 10,
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          <FilterSquare color="white" size={35} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
