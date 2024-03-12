import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Add from './images/Add.png'
import dotblue from './images/dotblue.png'
import more from './images/more.png'
import alarm from './images/alarm.png'
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

export default Home= () => {

  const navigation = useNavigation();
  const swiper = useRef();

  const [value, setValue] = useState(new Date());
  const [week, setWeek] = useState(0);

  const weeks = React.useMemo(() => {
    const start = moment().add(week, 'weeks').startOf('week');

    return [-1, 0, 1].map(adj => {
      return Array.from({ length: 7 }).map((_, index) => {
        const date = moment(start).add(adj, 'week').add(index, 'day');

        return {
          weekday: date.format('ddd'),
          date: date.toDate(),
        };
      });
    });
  }, [week]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Design new UX flow</Text>
        </View>

        <View style={styles.picker}>
        <Swiper
            index={1}
            ref={swiper}
            loop={false}
            showsPagination={false}
            onIndexChanged={ind => {
              if (ind === 1) {
                return;
              }
              setTimeout(() => {
                const newIndex = ind - 1;
                const newWeek = week + newIndex;
                setWeek(newWeek);
                setValue(moment(value).add(newIndex, 'week').toDate());
                swiper.current.scrollTo(1, false);
              }, 100);
            }}>
            {weeks.map((dates, index) => (
              <View
                style={[styles.itemRow, { paddingHorizontal: 16 }]}
                key={index}>
                {dates.map((item, dateIndex) => {
                  const isActive =
                    value.toDateString() === item.date.toDateString();
                  return (
                    <TouchableWithoutFeedback
                      key={dateIndex}
                      onPress={() => setValue(item.date)}>
                      <View
                        style={[
                          styles.item,
                          isActive && {
                            backgroundColor: '#111',
                            borderColor: '#111',
                          },
                        ]}>
                        <Text
                          style={[
                            styles.itemWeekday,
                            isActive && { color: '#fff' },
                          ]}>
                          {item.weekday}
                        </Text>
                        <Text
                          style={[
                            styles.itemDate,
                            isActive && { color: '#fff' },
                          ]}>
                          {item.date.getDate()}
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  );
                })}
              </View>
            ))}
          </Swiper>
        </View>

        <View style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 24 }}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('List')
          }}>
          <View>
          <Text style={styles.subtitle}>{value.toDateString()}</Text>    
          <Image style={{
            position:'absolute',
            alignSelf:'flex-end'
          }} source={Add}></Image>
          </View></TouchableOpacity>

       <TouchableOpacity onPress={() => {
            navigation.navigate('HomePage')
          }}>
          <View> 
          <Image style={{
            position:'absolute',
            alignSelf:'flex-start',
            marginTop:5
          }} source={dotblue}></Image>
          <Image style={{
            position:'absolute',
            alignSelf:'flex-end',
            marginTop:10,
            
          }} source={more}></Image>
          <Text style={{ fontSize: 18, paddingHorizontal: 25, color: '#0E4D92' }}>Design new UX flow</Text>
          </View></TouchableOpacity>

          <Image style={{ position: 'absolute', flexDirection: 'row', alignSelf: 'flex-start', marginTop: 108, marginLeft: 20 }} source={alarm}></Image>
          <Text style={{ color: '#F80C0C', marginTop: 20, fontSize: 16, paddingHorizontal: 20 }} >08.30 PM</Text>
          <Text style={{ marginTop: 10 }}>Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem
            Ipsum has been the industry's standard
            dummy text ever since the 1500s, when
            an unknown printer took a galley of type
            and scrambled it to make a type
            specimen book.</Text>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingVertical: 24,
  },
  header: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: '700',
    color: '#1d1d1d',
    marginTop: 50,
    marginBottom: 12,

  },
  picker: {
    flex: 1,
    maxHeight: 74,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 17,
    fontWeight: '600',
    color: 'black',
    marginBottom: 12,

  },
  footer: {
    marginTop: 'auto',
    paddingHorizontal: 16,
  },
  /** Item */
  item: {
    flex: 1,
    height: 50,
    marginHorizontal: 4,
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#e3e3e3',
    flexDirection: 'column',
    alignItems: 'center',
  },
  itemRow: {
    //width: width,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginHorizontal: -4,
    //overflow:'scroll'
  },
  itemWeekday: {
    fontSize: 13,
    fontWeight: '500',
    color: '#737373',
    marginBottom: 4,
  },
  itemDate: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111',
  },
});