import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getRequest} from '../../service/verb';
import {EPİSODES_URL} from '../../service/url';
import EpisodesCard from '../../component/episodes';

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setİsLoading] = useState(false);

  const getEpisodes = () => {
    setİsLoading(true);
    getRequest(EPİSODES_URL)
      .then(res => {
        setEpisodes(res.data.results);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setİsLoading(false);
      });
  };
  useEffect(() => {
    getEpisodes();
  }, []);
  return (
    <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          numColumns={2}
          data={episodes}
          renderItem={({item, index}) => (
            <EpisodesCard item={item} index={index} />
          )}
          keyExtractor={item => '_' + item.id}
        />
      )}
    </View>
  );
};

export default Episodes;

const styles = StyleSheet.create({});
