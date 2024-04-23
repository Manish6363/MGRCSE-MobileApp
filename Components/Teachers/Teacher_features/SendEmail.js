import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Mailer from 'react-native-mail';
import { RadioButton } from 'react-native-paper';

const sendEmail = () => {
  const [name, setName] = useState('');
  const [empId, setEmpId] = useState('');
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState('Professor');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [reason, setReason] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [appointTeacher, setAppointTeacher] = useState('');
  const [isStartDatePickerVisible, setStartDatePickerVisible] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisible] = useState(false);

  const showStartDatePicker = () => setStartDatePickerVisible(true);
  const hideStartDatePicker = () => setStartDatePickerVisible(false);
  const handleStartDateChange = (event, selectedDate) => {
    hideStartDatePicker();
    if (selectedDate) {
      setStartDate(selectedDate);
    }
  };

  const showEndDatePicker = () => setEndDatePickerVisible(true);
  const hideEndDatePicker = () => setEndDatePickerVisible(false);
  const handleEndDateChange = (event, selectedDate) => {
    hideEndDatePicker();
    if (selectedDate) {
      setEndDate(selectedDate);
    }
  };

  const sendEmail = () => {
    const receiverEmail = 'manishsing6363@gmail.com';

    const emailBody = `Dear Dr. S. Geetha\nHOD of CSE Department\nDr. M.G.R. Educational and Research Institute, Chennai\n\n\tI trust this email finds you well. I am writing to formally request a leave of absence as a ${role} in the ${department}. The intended leave period is from ${startDate.toISOString().split('T')[0]} to ${endDate.toISOString().split('T')[0]}.\n\tThe primary reason for my leave is ${reason}. I believe this time away is essential to ensure that I can fulfill my duties effectively upon my return.\n\tI have made arrangements for a smooth transition during my absence. ${appointTeacher}, a qualified colleague, has kindly agreed to take over my classes and responsibilities in my stead. I am confident that he/she will uphold the standards of our department.\n\tI recognize the importance of my responsibilities and am committed to minimizing any impact on departmental operations. Throughout my leave, I will remain accessible via my departmental email and will address any urgent matters promptly.\n\tI kindly seek your approval for this leave and appreciate your understanding of the necessity for this temporary absence. I assure you of my dedication to resume my duties promptly the next day of ${endDate.toISOString().split('T')[0]}.\nThank you for your consideration.\n\nBest regards,\n${name}\nEmp ID: ${empId}\n${department}`;

    Mailer.mail(
      {
        subject: emailSubject || 'Leave Application',
        recipients: [receiverEmail],
        body: emailBody,
        isHTML: false,
      },
      (error, event) => {
        if (error) {
          console.error('Could not open email app:', error);
        }
      }
    );
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      
      <Text style={styles.title}>Teacher Leave Application</Text>
      <View style={styles.innerContainer}>
        <Text></Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="EmpId"
        value={empId}
        onChangeText={(text) => setEmpId(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Department"
        value={department}
        onChangeText={(text) => setDepartment(text)}
      />

      <Text style={styles.label}>Role:</Text>
      <View style={[styles.radioGroup]}>
        <RadioButton.Group onValueChange={(value) => setRole(value)} value={role}>
          <View style={styles.radioButtonContainer}>
            <Text>Professor</Text>
            <RadioButton value="Professor" />
          </View>
          <View style={styles.radioButtonContainer}>
            <Text>Associate Professor</Text>
            <RadioButton value="Associate Professor" />
          </View>
          
        </RadioButton.Group>
      </View>

      <TouchableOpacity
        style={styles.datePickerButton}
        onPress={showStartDatePicker}
      >
        <Text>{`Start Date: ${startDate.toISOString().split('T')[0]}`}</Text>
      </TouchableOpacity>

      {isStartDatePickerVisible && (
        <DateTimePicker
          value={startDate}
          mode="date"
          display="default"
          onChange={handleStartDateChange}
        />
      )}

      <TouchableOpacity
        style={styles.datePickerButton}
        onPress={showEndDatePicker}
      >
        <Text>{`End Date: ${endDate.toISOString().split('T')[0]}`}</Text>
      </TouchableOpacity>

      {isEndDatePickerVisible && (
        <DateTimePicker
          value={endDate}
          mode="date"
          display="default"
          onChange={handleEndDateChange}
        />
      )}

      <TextInput
        style={styles.input}
        placeholder="Reason for leave"
        multiline
        numberOfLines={4}
        value={reason}
        onChangeText={(text) => setReason(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter email subject"
        value={emailSubject}
        onChangeText={(text) => setEmailSubject(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Appointed Teacher name for leave day"
        value={appointTeacher}
        onChangeText={(text) => setAppointTeacher(text)}
      />

      <TouchableOpacity onPress={sendEmail} style={styles.button}>
        <Text style={styles.buttonText}>Send Email</Text>
      </TouchableOpacity>
    </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding:30,
    backgroundColor:"rgb(253,228,251)"
  },
  innerContainer:{
    backgroundColor:'cyan',
    borderWidth:2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderTopRightRadius:80,
    borderBottomLeftRadius:80,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color:'red',
    fontWeight:'bold',
    textAlign:'center'
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor:'white'
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  radioGroup: {
    marginBottom: 20,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  datePickerButton: {
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize:25,
    fontWeight:'bold'
  },
});

export default sendEmail;
