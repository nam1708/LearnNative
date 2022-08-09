import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ListItem, Avatar, Switch, makeStyles, useThemeMode } from '@rneui/themed'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useQuery } from 'react-query';

export default function SettingScreen() {

    const [checked, setChecked] = useState(false);

    const toggleSwitch = (value) => {
        setChecked(value)
    };

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