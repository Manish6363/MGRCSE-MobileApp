import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const TimeTable = () => {
    return (
        <ScrollView>
            <View style={{backgroundColor:'#ffe6cc'}}>
                <Text style={[styles.heading, { marginBottom: 15 }]}>Time Table</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        alignContent: 'center',
        color: 'red',
        fontFamily: 'lucida grande'
    },
})

export default TimeTable;