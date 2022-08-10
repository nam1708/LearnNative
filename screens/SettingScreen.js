import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ListItem, Avatar, Switch, makeStyles, useThemeMode } from '@rneui/themed'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useQuery, useQueryClient, useMutation } from 'react-query';

const addUser = async (formData) => {
    try {
        const Options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(formData)
        }
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', Options)
        const json = await res.json()
        return json
    } catch (error) {
        return error
    }
}

const updateUser = async (formData) => {
    try {
        const Options = {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(formData)
        }
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', Options)
        const json = await res.json()
        return json
    } catch (error) {
        return error
    }
}

const getUserByPage = async (page) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${page}`)
    return res.json()
}

export default function SettingScreen() {

    const queryClient = useQueryClient()

    const [checked, setChecked] = useState(false);

    const toggleSwitch = (value) => {
        setChecked(value)
    };

    const [page, setPage] = useState(1)

    const { mutate: mutate2, data: data2 } = useMutation(addUser,
        {
            onSuccess: () => {
                console.log(data2);
            }
        })

    const { mutate, data } = useMutation(updateUser,
        {
            onSuccess: () => {
                console.log(data);
            }
        })

    const { data: data3, status } = useQuery(['User', page], () => getUserByPage(page))

    console.log(data3);

    const post = () => {
        // mutate({
        //     title: 'haha',
        // })

        // mutate2({
        //     title: 'foo',
        //     body: 'bar',
        //     userId: 1,
        // })

    }

    return (
        <ScrollView style={styles.container}>
            <View>
                <ListItem bottomDivider>
                    <Ionicons name='contrast-outline' size={20}
                        color='black' />
                    <ListItem.Content>
                        <ListItem.Title>Chế độ tối</ListItem.Title>
                    </ListItem.Content>
                    <Switch
                        value={checked}
                        onValueChange={(value) => toggleSwitch(value)}
                    />
                </ListItem>
                <Button title='post user' onPress={post} />
                <Button title='post user' onPress={() => setPage(page + 1)} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingHorizontal: 10,
    },
})