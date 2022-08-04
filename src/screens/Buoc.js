import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

const Buoc = ({ navigation }) => {

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Text style={[styles.text, styles.textFavorite]}>Mục ưa thích</Text>
                <Text style={[styles.text, styles.textEdit]}>Sửa</Text>
            </View>
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'black',
    },
})

export default Buoc;
