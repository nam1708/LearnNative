import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Tag from '../components/Tag';

const HomePage = () => {
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
        <Tag />
      </View>
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
});

export default HomePage;
