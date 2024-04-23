import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const Materials = () => {
    return (
        <ScrollView>
            <View style={{backgroundColor:'#ffe6cc'}}>
                <Text style={[styles.heading, { marginBottom: 15 }]}>E-materials{'\n'}👇Prepared by Expert👇</Text>
                <TouchableOpacity>
                    <View style={[styles.button, {backgroundColor: '#0000ff'}]}>
                        <Text style={styles.buttonText}>📝 C Programming</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={[styles.button, {backgroundColor: '#ff0000'}]}>
                        <Text style={styles.buttonText}>📝 C++ Programming</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={[styles.button, {backgroundColor: '#40ff00'}]}>
                        <Text style={styles.buttonText}>📝 C# Programming</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={[styles.button, {backgroundColor: '#ff00ff'}]}>
                        <Text style={styles.buttonText}>📝 C Objective</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={[styles.button, {backgroundColor: '#bf00ff'}]}>
                        <Text style={styles.buttonText}>📝 PYTHON</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={[styles.button, {backgroundColor: '#ff9900'}]}>
                        <Text style={styles.buttonText}>📝 Data Structure</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <View style={[styles.button, {backgroundColor: '#999900'}]}>
                        <Text style={styles.buttonText}>📝 JAVA</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <View style={[styles.button, {backgroundColor: 'green'}]}>
                        <Text style={styles.buttonText}>📝 DBMS</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <View style={[styles.button, {backgroundColor: 'red'}]}>
                        <Text style={styles.buttonText}>📝 HTML/CSS/JavaScript</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <View style={[styles.button, {backgroundColor: '#ff33cc'}]}>
                        <Text style={styles.buttonText}>📝 PHP/MySQL</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <View style={[styles.button, {backgroundColor: 'blue'}]}>
                        <Text style={styles.buttonText}>📝 Digital System</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <View style={[styles.button, {backgroundColor: '#ff0000'}]}>
                        <Text style={styles.buttonText}>📝 Computer Organization</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={[styles.button, {backgroundColor: '#40ff00'}]}>
                        <Text style={styles.buttonText}>📝 Operating System</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={[styles.button, {backgroundColor: '#ff00ff'}]}>
                        <Text style={styles.buttonText}>📝 Computer Networks</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={[styles.button, {backgroundColor: '#bf00ff'}]}>
                        <Text style={styles.buttonText}>📝 Dot Net Framework</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={[styles.button, {backgroundColor: '#ff9900'}]}>
                        <Text style={styles.buttonText}>📝 Dataminig & Warehouse</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <View style={[styles.button, {backgroundColor: '#999900'}]}>
                        <Text style={styles.buttonText}>📝 Statistics</Text>
                    </View>
                </TouchableOpacity>

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
    button: {
        width:'85%',
        alignSelf:'center',        
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,     
        elevation: 6,
        marginBottom:20
      },
      buttonText: {
        textAlign:'center',
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
      },
})

export default Materials;