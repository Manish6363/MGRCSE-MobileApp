import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DatePicker = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(' Select Date ');
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleDateConfirm = (date) => {
        const dt = new Date(date);
        const format = dt.toISOString().split("T");
        const dob = format[0].split('-');
        setSelectedDate(dob[2] + '/' + dob[1] + '/' + dob[0]);
        hideDatePicker();
    };

    return (
        <View>
            <TouchableOpacity style={styles.Button} onPress={showDatePicker} >
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{selectedDate}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    Button: {
        borderWidth: 1,
        borderColor: 'black',
        width: 'auto',
        marginTop: 6
    }
})

export default DatePicker;