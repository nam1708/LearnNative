import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListNew from '../components/ListNew'
import { useQuery } from 'react-query'

export default function FoodScreen() {
    const { isLoading, error, data, refetch } = useQuery(['Food'], () =>
        fetch('https://baomoi.com/_next/data/mRta369_2Y3g4NvF2wsee/category/am-thuc.json?slug=am-thuc')
            .then(res =>
                res.json()
            )
    )

    const listData = data?.pageProps.resp.data.content.sections[0].items

    if (error) return <Text>'An error has occurred: ' + error.message</Text>

    return (
        <ListNew listData={listData} isLoading={isLoading} refetch={refetch} />
    )
}

const styles = StyleSheet.create({})