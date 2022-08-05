import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { Avatar } from "@rneui/themed";

const TomTat = () => {
  const native = useNavigation()
  const d = new Date()
  const time = d.toLocaleTimeString("en-US");

  const onClickBuoc = () => {
    native.navigate('Buoc', { total: '131' })
  }

  const onClickNghe = () => {
    native.navigate('AmThanh')
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.summary}>
          <Text style={[styles.text, styles.textSummary]}>Tóm tắt</Text>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
        <View style={styles.favorite}>
          <Text style={[styles.text, styles.textFavorite]}>Mục ưa thích</Text>
          <Text style={[styles.text, styles.textEdit]}>Sửa</Text>
        </View>
        <Pressable style={styles.tag} onPress={onClickBuoc}>
          <View style={styles.header}>
            <Text style={[styles.orange, styles.text1]}>Bước</Text>
            <Text style={styles.grey}>{`${time.slice(0, -3)} >`}</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.text3}>311</Text>
            <Text style={styles.text4}>bước</Text>
          </View>
        </Pressable>
        <Pressable style={styles.tag} onPress={onClickNghe}>
          <View style={styles.header}>
            <Text style={[styles.blue, styles.text1]}>Mức âm thanh tai nghe</Text>
            <Text style={styles.grey}>Hôm qua {'>'}</Text>
          </View>
          <View>
            <Text style={styles.text3}>OK</Text>
            <Text style={styles.text4}>Tiếp xúc 7 ngày</Text>
          </View>
        </Pressable>
      </View>
      <Avatar
        size={64}
        rounded
        source={{ uri: 'https://randomuser.me/api/portraits/women/57.jpg' }}
        title="Bj"
        containerStyle={{ backgroundColor: 'grey' }}
      >
        <Avatar.Accessory size={23} />
      </Avatar>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'black',
  },
  container: {
    marginTop: 32,
    paddingHorizontal: 20,
  },
  text: {
    color: '#f0f8ff',
  },
  summary: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textSummary: {
    fontSize: 35,
    fontWeight: '900',
  },
  tinyLogo: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  favorite: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 5,
    marginBottom: 10
  },
  textFavorite: {
    fontSize: 20,
    fontWeight: '500',
  },
  textEdit: {
    color: '#1e90ff',
  },
  tag: {
    backgroundColor: '#242426',
    minHeight: 100,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 13
  },
  orange: {
    color: '#f1742c',

  },
  grey: {
    color: '#808080',
    fontSize: 15,
    fontWeight: '700'
  },
  body: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  text1: {
    fontSize: 15,
    fontWeight: '700'
  },
  text3: {
    color: '#f0f8ff',
    fontSize: 30,
    fontWeight: '500'
  },
  text4: {
    color: '#808080',
    marginBottom: 3,
    fontWeight: '500'
  },
  blue: {
    color: '#429afc'
  }
});

export default TomTat;
