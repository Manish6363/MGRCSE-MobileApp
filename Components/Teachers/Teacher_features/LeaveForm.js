import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import SendEmail from "./SendEmail";

const LeaveForm = () => {
    return (
        <ScrollView>
            <View style={{backgroundColor:'#ffe6cc'}}>
                <SendEmail />
            </View>
        </ScrollView>
    )
}

export default LeaveForm;