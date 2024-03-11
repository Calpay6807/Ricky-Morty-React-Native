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
  const [filterStatus, setStatus] = useState({});
  const [searchText, setSearchText] = useState(null);

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
  const filterCharacters = async => {
    setİsLoading(true);
    getRequest(CHARACTERS_URL, {name: searchText, status: filterStatus.value})
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
  const searchCharacters = async => {
    setİsLoading(true);
    if (searchText) {
      getRequest(CHARACTERS_URL, {name: searchText})
        .then(res => {
          setCharacters(res.data.results);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          setİsLoading(false);
        });
    }
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
                  onPress={() => {
                    setStatus(item);
                  }}
                  style={{
                    padding: 10,
                    borderWidth: 0.41,
                    borderColor: AppColors.WHITE,
                    margin: 5,
                    borderRadius: 20,
                    backgroundColor:
                      filterStatus.value == item.value
                        ? AppColors.WHITE
                        : AppColors.GREEN,
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
            onPress={() => {
              bottomSheet.current.close();
              filterCharacters();
            }}
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
              <SearchBar
                openModal={() => bottomSheet.current.show()}
                setSearchText={setSearchText}
                searchText={searchText}
                searchCharacters={searchCharacters}
              />
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
