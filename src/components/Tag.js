import React from 'react';
import { Text, View, StyleSheet, Button, Alert, Pressable } from 'react-native';

const Tag = ({ navigation }) => {
  const d = new Date()
  let hour = d.getHours();
  let minutes = d.getMinutes();

  const onClick = () => {
    // navigation.navigate('PageTwo')
  }

  return (
    <Pressable style={styles.container} onPress={onClick}>
      <View style={styles.header}>
        <Text style={styles.orange}>Bước</Text>
        <Text style={styles.grey}>{`${hour}:${minutes}`}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.text1}>311</Text>
        <Text style={styles.text2}>bước</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#242426',
    minHeight: 100,
    borderRadius: 10,
    padding: 15
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  orange: {
    color: '#f1742c',
    fontSize: 15,
    fontWeight: '700'
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
    color: '#f0f8ff',
    fontSize: 30,
    fontWeight: '500'
  },
  text2: {
    color: '#808080',
    marginBottom: 3
  }
})

export default Tag;
