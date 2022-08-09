import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from '@rneui/themed'

export default function ContentScreen({ route }) {
    const { data } = route.params;

    console.log(data);
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>{data.title}</Text>
                <Text >nhà xuất bản: {data.publisher.name}</Text>
                <Text style={styles.content}>{data.description}</Text>
                <Image
                    source={{ uri: data.thumb }}
                    containerStyle={styles.thumb}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingHorizontal: 10
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black'
    },
    content: {
        fontSize: 15,
        fontWeight: '300',
        color: 'black',
        marginTop: 20,
        marginBottom: 10
    },
    thumb: {
        aspectRatio: 1,
        width: '100%',
        flex: 1,
    }
})