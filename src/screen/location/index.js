import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {LOCATİONS_URL} from '../../service/url';
import {getRequest} from '../../service/verb';
import LocationsCard from '../../component/location';

const Locations = () => {
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setİsLoading] = useState(false);

  const getLocations = () => {
    setİsLoading(true);
    getRequest(LOCATİONS_URL)
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
    getLocations();
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
            <LocationsCard item={item} index={index} />
          )}
          keyExtractor={item => '_' + item.id}
        />
      )}
    </View>
  );
};

export default Locations;

const styles = StyleSheet.create({});
