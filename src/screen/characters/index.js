import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {getRequest} from '../../service/verb';
import {CHARACTERS_URL} from '../../service/url';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import {AppColors} from '../../theme/color';
import CharactersCard from '../../component/character';
import SearchBar from '../../component/ui';
import {status, width} from '../../utils/constant';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setİsLoading] = useState(false);
  const [filterStatus, setStatus] = useState();

  const bottomSheet = useRef();
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
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <BottomSheet
          hasDraggableIcon
          ref={bottomSheet}
          sheetBackgroundColor={AppColors.GREEN}
          height={600}
          onRequestClose={() => {
            bottomSheet.current.close();
          }}>
          <View>
            <Text style={{margin: 5, color: AppColors.WHITE, fontSize: 22}}>
              Status
            </Text>
            {status.map(item => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 10,
                    borderWidth: 0.41,
                    borderColor: AppColors.WHITE,
                    margin: 5,
                    borderRadius: 20,
                  }}
                  key={item.id}>
                  <Text style={{textAlign: 'center', fontWeight: '600'}}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <TouchableOpacity
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: AppColors.WHITE,
              position: 'absolute',
              bottom: 30,
              width: '100%',
              backgroundColor: AppColors.WHITE,
              borderRadius: 100,
              height: width / 8,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Filtrele</Text>
          </TouchableOpacity>
        </BottomSheet>
        {loading ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size={'large'} color={'black'} />
          </View>
        ) : (
          <FlatList
            ListHeaderComponent={
              <SearchBar openModal={() => bottomSheet.current.show()} />
            }
            numColumns={2}
            data={characters}
            renderItem={({item, index}) => (
              <CharactersCard item={item} index={index} />
            )}
            keyExtractor={item => '_' + item.id}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Characters;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
});
