import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getRequest} from '../../service/verb';
import {CHARACTERS_URL} from '../../service/url';

import {AppColors} from '../../theme/color';
import CharactersCard from '../../component/character';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setİsLoading] = useState(false);

  const getCharacters = async => {
    setİsLoading(true);
    getRequest(CHARACTERS_URL)
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setİsLoading(false);
      });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} color={'black'} />
        </View>
      ) : (
        <FlatList
          numColumns={2}
          data={characters}
          renderItem={({item, index}) => (
            <CharactersCard item={item} index={index} />
          )}
          keyExtractor={item => '_' + item.id}
        />
      )}
    </View>
  );
};

export default Characters;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
});
