import React from "react";
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const College_Home = () => {
    const Width = Dimensions.get('window').width;
    return (
        <View>
            <Text style={[styles.mgr, { color: 'red', fontSize: Width * 0.075, marginTop: '1.5%',lineHeight:29 }]}>Dr. M.G.R</Text>

            <Text style={[styles.mgr, { color: 'blue', fontSize: Width * 0.027, lineHeight:12}]}>EDUCATIONAL AND RESEARCH INSTITUTE{"     "}</Text>

            <Text style={[styles.mgr, { color: 'red', fontSize: Width * 0.027 ,lineHeight:12}]}>DEEMED TO BE UNIVERSITY</Text>

            <Text style={[styles.mgr, { color: 'blue', fontSize: Width * 0.0179, lineHeight:8 }]}>University with Graded Autonomy Status</Text>

            <Text style={[styles.mgr, { fontSize: Width * 0.018 }]}>(An ISO 21001 : 2018 Certified Institution)</Text>

            <Text style={[styles.mgr, { fontSize: Width * 0.015 }]}>Periyar E.V.R. High Road, Maduravoyal, Chennai-95, Tamilnadu, India.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    pic: {
        position: 'absolute',
    },
    mgr: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'serif'
    }
})

export default College_Home;