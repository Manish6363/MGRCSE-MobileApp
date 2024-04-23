import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'CSE', value: '1' },
    { label: 'CSE-AI', value: '2' },
    { label: 'CSE-DS&AI', value: '3' }
];

const BranchList = () => {
    const [value, setValue] = useState(null);

    return (
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search            
            labelField="label"
            valueField="value"
            placeholder="Select Branch"
            searchPlaceholder="Search..."
            value={value}
            onChange={item => {
                setValue(item.value);
            }}
        />
    );
};

export default BranchList;

const styles = StyleSheet.create({
    dropdown: {
        borderBottomColor: 'gray',
        borderWidth:1,
        borderRadius:6,
        width:'auto'
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 20,
        fontWeight:'bold',
        width:'auto'
    },
    inputSearchStyle: {
        fontSize: 16,
    },
});