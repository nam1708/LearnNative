import React, { useEffect, useState } from 'react';
import { Input, Button, ListItem, Header } from '@rneui/themed';
import { View, Text, ScrollView } from 'react-native';
import { QueryCache, useQuery } from "react-query";

const Buoc = () => {

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const query = useQuery(['repoData'], () =>
        fetch('https://jsonplaceholder.typicode.com/todos').then(res =>
            res.json()
        )
    )

    const ChangeTextUser = (e) => {
        setUser(e);
    }

    const ChangeTextPass = (e) => {
        setPass(e);
    }



    const clickLogin = async () => {

    }


    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic" >
            <View>
                <Input
                    placeholder="User Name"
                    // leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    onChangeText={ChangeTextUser}
                />
                <Input
                    placeholder="Password" secureTextEntry={true}
                    // leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    onChangeText={ChangeTextPass}
                />
                <Button title="Login" onPress={clickLogin} />
                <View>
                    {query.isLoading
                        ? <Text>'Loading...'</Text>
                        : query.isError
                            ? <Text>'Error!'</Text>
                            : query.data
                                ? <View>
                                    {query.data.map(todo => <Text>{todo.id}: {todo.title}</Text>)}
                                </View>
                                : null}
                </View>
            </View>
        </ScrollView >
    );
};

export default Buoc;
