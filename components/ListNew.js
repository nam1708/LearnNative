import { ScrollView, StyleSheet, View, Pressable, Text, RefreshControl, ActivityIndicator } from 'react-native'
import React from 'react'
import { ListItem, Image, makeStyles } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function ListNew({ listData, isLoading, refetch }) {
    const navigation = useNavigation()

    const clickNew = (item) => {
        navigation.navigate('Content', { data: item })
    }

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => {
            setRefreshing(false)
            refetch();
        });
    }, []);

    if (isLoading) {
        return (
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
            style={styles.ScrollView}
        >
            <View>
                {
                    listData?.map((item, i) => (
                        <Pressable onPress={() => clickNew(item)} key={i}>
                            <ListItem bottomDivider >
                                <Image
                                    source={{ uri: item.thumb }}
                                    containerStyle={styles.thumb}
                                />
                                <ListItem.Content>
                                    <ListItem.Title>{item.title}</ListItem.Title>
                                    <ListItem.Subtitle
                                        style={styles.Subtitle}
                                    >
                                        {item.publisher.name}
                                    </ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        </Pressable>
                    ))
                }
            </View>
        </ScrollView >

    )
}

const styles = StyleSheet.create({
    thumb: {
        width: 90,
        height: 70
    },
    Subtitle: {
        color: '#6c757d'
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
})