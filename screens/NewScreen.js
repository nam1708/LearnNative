import { ScrollView, StyleSheet, Text, RefreshControl } from 'react-native'
import React from 'react'
import ListNew from '../components/ListNew'
import { useQuery } from 'react-query'

export default function NewScreen() {
    const { isLoading, error, data, refetch } = useQuery(['New'], () =>
        fetch('https://baomoi.com/_next/data/mRta369_2Y3g4NvF2wsee/new.json')
            .then(res =>
                res.json()
            )
    )

    const listdata = data?.pageProps.resp.data.content.items


    if (error) return <Text>'An error has occurred: ' + error.message</Text>
    return (
        <ListNew listData={listdata} isLoading={isLoading} refetch={refetch} />
    )
}

const styles = StyleSheet.create({})