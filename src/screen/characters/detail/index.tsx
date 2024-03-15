import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getRequest} from '../../../service/verb';
import {CHARACTERS_URL} from '../../../service/url';
import {AppColors} from '../../../theme/color';
import {height, width} from '../../../utils/constant';
import {ICharacter} from '../../../models/character';
import {INavigation} from '../../../models/navigation';

const CharactersDetail: React.FC = ({route}) => {
  console.log(route);
  //! yukarda proppertye props verirsek aşağıdaki yolu izlemeliyiz ama ({route })
  // yazarsak 2. adımı islemeliyiz
  //   const {
  //     route: {
  //       params: {item},
  //     },
  //   } = props;

  // 2.adım
  const item: ICharacter = route?.params.item;

  const [character, setCharacter] = useState([]);
  const [loading, setİsLoading] = useState(false);

  const getCharacter = async => {
    setİsLoading(true);
    getRequest(`${CHARACTERS_URL}/${item?.id}`)
      .then(res => {
        setCharacter(res.data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setİsLoading(false);
      });
  };

  useEffect(() => {
    getCharacter();
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View
        style={{
          backgroundColor: AppColors.GREEN,
          height: height / 2,
          margin: 10,
          borderStartStartRadius: 70,
          borderEndEndRadius: 70,
          padding: 15,
        }}>
        <Text
          style={{
            color: 'white',
            margin: 10,
            fontSize: 24,
            fontWeight: 'bold',
          }}>
          {character.status}
        </Text>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10,
          }}>
          <Image
            source={{uri: character?.image}}
            style={{width: width / 1.7, height: width / 1.7}}
          />
          <Text
            style={{
              color: 'white',
              margin: 10,
              fontSize: 24,
              fontWeight: 'bold',
            }}>
            {character.name}
          </Text>
          <Text
            style={{
              color: 'white',
              margin: 10,
              fontSize: 24,
              fontWeight: 'bold',
            }}>
            {character.species}
          </Text>
        </View>
        <Text
          style={{
            color: 'white',
            marginBottom: 10,
            fontSize: 24,
            fontWeight: 'bold',
          }}>
          {character.gender}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: AppColors.GREEN,
          height: height / 5,
          margin: 10,
          padding: 10,
          borderStartStartRadius: 50,
          borderEndEndRadius: 50,
        }}>
        <Text
          style={{
            color: 'white',
            margin: 10,
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Origin
        </Text>
        <Text
          style={{
            color: 'white',
            margin: 10,
            fontSize: 18,
          }}>
          {character?.name}
        </Text>
        <Text
          style={{
            color: 'white',
            margin: 10,
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Location
        </Text>
        <Text
          style={{
            color: 'white',
            margin: 10,
            fontSize: 18,
          }}>
          {character?.location?.name}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CharactersDetail;

const styles = StyleSheet.create({});
