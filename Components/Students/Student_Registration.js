import React, { Component } from "react";
import { Dimensions, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import DatePicker from "./DatePicker";
import BranchList from "./BranchList";
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;


class Student_Regitration extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameError: '',
      regNo: '',
      regNoError: '',
      dob: '',
      dobError: '',
      phone: '',
      phoneError: '',
      fatherName: '',
      fatherNameError: '',
      motherName: '',
      motherNameError: '',
      batch: '',
      batchError: '',
      branch: '',
      branchError: '',
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      confirmPassword: '',
      confirmPasswordError: ''
    }
  }

  validate = () => {
    this.setState({
      nameError: '',
      regNoError: '',
      dobError: '',
      phoneError: '',
      fatherNameError: '',
      motherNameError: '',
      batchError: '',
      branchError: '',
      emailError: '',
      passwordError: '',
      confirmPasswordError: ''
    });

    const nameexp = /^[A-Za-z\s]*$/;
    const numexp = /^[0-9]*$/;
    const dobexp = /^[0-9]{4}-[0-1][0-9]-[0-3]\d$/;
    const emailexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passexp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (this.state.name.length == 0) {
      this.setState({ nameError: 'Name should be filled.' });
      return false;
    }
    else if (!nameexp.test(this.state.name)) {
      this.setState({ nameError: 'Only CHARACTERS are allowed.' });
      return false;
    }

    else if (this.state.regNo.length == 0) {
      this.setState({ regNoError: 'Register number should be filled.' });
      return false;
    }
    else if (!numexp.test(this.state.regNo)) {
      this.setState({ regNoError: 'Only NUMBERS are allowed.' });
      return false;
    }
    else if (this.state.regNo.length < 12 || this.state.regNo.length > 12) {
      this.setState({ regNoError: 'Register Number is Wrong(<12).' });
      return false;
    }

    else if (this.state.dob.length == 0) {
      this.setState({ dobError: 'Date of birth\nshould be filled' });
      return false;
    }
    else if (!dobexp.test(this.state.dob)) {
      this.setState({ dobError: 'Wrong Format,\ngive format\n(YYYY-MM-DD).' });
      return false;
    }

    else if (this.state.phone.length == 0) {
      this.setState({ phoneError: 'Phone number should be filled.' });
      return false;
    }
    else if (!numexp.test(this.state.phone)) {
      this.setState({ phoneError: 'Only NUMBERS are allowed.' });
      return false;
    }
    else if (this.state.phone.length < 10 || this.state.phone.length > 10) {
      this.setState({ phoneError: 'Phone Number is Wrong.' });
      return false;
    }

    else if (this.state.fatherName.length == 0) {
      this.setState({ fatherNameError: 'Father\'s name should be filled.' });
      return false;
    }
    else if (!nameexp.test(this.state.fatherName)) {
      this.setState({ fatherNameError: 'Only CHARACTERS are allowed.' });
      return false;
    }

    else if (this.state.motherName.length == 0) {
      this.setState({ motherNameError: 'Mother\'s name should be filled.' });
      return false;
    }
    else if (!nameexp.test(this.state.motherName)) {
      this.setState({ motherNameError: 'Only CHARACTERS are allowed.' });
      return false;
    }

    else if (this.state.batch.length == 0) {
      this.setState({ batchError: 'Batch year should be filled.' });
      return false;
    }
    else if (!numexp.test(this.state.batch)) {
      this.setState({ batchError: 'Only NUMBERS are allowed.' });
      return false;
    }
    else if (this.state.batch.length < 4 || this.state.batch.length > 4) {
      this.setState({ batchError: 'Batch Year is Wrong, should be \nin YYYY.' });
      return false;
    }

    else if (this.state.branch.length == 0) {
      this.setState({ branchError: 'Branch name should be filled.' });
      return false;
    }
    else if (!nameexp.test(this.state.branch)) {
      this.setState({ branchError: 'Only CHARACTERS are allowed,\neg: CSE/AI etc.' });
      return false;
    }

    else if (this.state.email.length == 0) {
      this.setState({ emailError: 'Email should be filled.' });
      return false;
    }
    else if (!emailexp.test(this.state.email)) {
      this.setState({ emailError: 'Invalid Email.' });
      return false;
    }

    else if (this.state.password.length == 0) {
      this.setState({ passwordError: 'Password should be filled.' });
      return false;
    }
    else if (!passexp.test(this.state.password)) {
      this.setState({ passwordError: 'Must be at least one upper-case letter, one loer-case letter, one number and one special-character.' });
      return false;
    }
    else if (this.state.password.length < 8) {
      this.setState({ passwordError: 'Password must be >=8 characters.' });
      return false;
    }

    else if (this.state.password != this.state.confirmPassword) {
      this.setState({ confirmPasswordError: 'Password must matched with previous.' });
      return false;
    }

    return true;
  }

  insertRecord = () => {
    var name = this.state.name;
    var regNo = this.state.regNo;
    var dob = this.state.dob;
    var phone = this.state.phone;
    var fatherName = this.state.fatherName;
    var motherName = this.state.motherName;
    var batch = this.state.batch;
    var branch = this.state.branch;
    var email = this.state.email;
    var password = this.state.password;
    var confirmPassword = this.state.confirmPassword;

    var insertAPIUrl = "http://192.168.125.126:80/php/Student_Registration.php";
    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application.json'
    };

    var Data = {
      name: name,
      regNo: regNo,
      dob: dob,
      phone: phone,
      fatherName: fatherName,
      motherName: motherName,
      batch: batch,
      branch: branch,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };

    if (name.length == 0 || regNo.length == 0 || dob.length == 0 || phone.length == 0 || fatherName.length == 0 || motherName.length == 0 || batch.length == 0 || branch.length == 0 || email.length == 0 || password.length == 0 || confirmPassword.length == 0) {
      alert("Required field is mandatory");
    }
    else {
      fetch(insertAPIUrl,
        {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(Data)
        }
      )
        .then((response) => response.json())
        .then((response) => {
          alert(response[0].Message);
        }
        )
        .catch((error) => {
          alert("Register number or Mobile Number has already registered. \n TRY with new candidate.\nError encountered: " + error);
        })
      }
    }



    render() {
      return (
        <ScrollView>
          <View style={styles.main}>

            <View>
              <Text style={styles.heading}>Name<Text style={styles.star}>*</Text>:{' '}</Text>
              <TextInput
                placeholder="  Enter Your Full Name  "
                style={styles.InputBox}
                onChangeText={(name) => this.setState({ name }, this.validate)}
              />
              {
                (this.state.nameError === 0) ? null : <Text style={styles.errorsMessage}>{this.state.nameError}</Text>
              }
            </View>

            <View>
              <Text style={styles.heading}>Register Number<Text style={styles.star}>*</Text>:</Text>
              <TextInput
                placeholder=" X X X X X X X"
                style={styles.InputBox}
                keyboardType='phone-pad'
                onChangeText={(regNo) => this.setState({ regNo }, this.validate)}
              />
              {
                (this.state.regNoError === 0) ? null : <Text style={styles.errorsMessage}>{this.state.regNoError}</Text>
              }
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.heading}>Date of Birth<Text style={styles.star}>*</Text>:{' '}</Text>
              <TextInput
                placeholder=" YYYY-MM-DD "
                style={styles.InputBox}
                keyboardType='phone-pad'
                onChangeText={(dob) => this.setState({ dob }, this.validate)}
              />
              {
                (this.state.dobError === 0) ? null : <Text style={styles.errorsMessage}>{this.state.dobError}</Text>
              }
            </View>

            <View>
              <Text style={styles.heading}>Mobile Number<Text style={styles.star}>*</Text>:</Text>
              <TextInput
                placeholder=" X X X X X X X"
                style={styles.InputBox}
                keyboardType='phone-pad'
                onChangeText={(phone) => this.setState({ phone }, this.validate)}
              />
              {
                (this.state.phoneError === 0) ? null : <Text style={styles.errorsMessage}>{this.state.phoneError}</Text>
              }
            </View>

            <View>
              <Text style={styles.heading}>Father's Name<Text style={styles.star}>*</Text></Text>
              <TextInput
                placeholder=" Father's full name "
                style={styles.InputBox}
                onChangeText={(fatherName) => this.setState({ fatherName }, this.validate)}
              />
              {
                (this.state.fatherNameError === 0) ? null : <Text style={styles.errorsMessage}>{this.state.fatherNameError}</Text>
              }
            </View>

            <View>
              <Text style={styles.heading}>Mother's Name<Text style={styles.star}>*</Text></Text>
              <TextInput
                placeholder=" Mother's full name "
                style={styles.InputBox}
                onChangeText={(motherName) => this.setState({ motherName }, this.validate)}
              />
              {
                (this.state.motherNameError === 0) ? null : <Text style={styles.errorsMessage}>{this.state.motherNameError}</Text>
              }
            </View>

            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Text style={styles.heading}>Batch<Text style={styles.star}>*</Text>:{' '}</Text>
              <TextInput
                placeholder=" YYYY "
                style={[styles.InputBox, { marginBottom: 10, width: 'auto' }]}
                keyboardType='phone-pad'
                onChangeText={(batch) => this.setState({ batch }, this.validate)}
              />
              {
                (this.state.batchError === 0) ? null : <Text style={styles.errorsMessage}>{this.state.batchError}</Text>
              }
            </View>

            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Text style={styles.heading}>Branch<Text style={styles.star}>* </Text> </Text>
              <TextInput
                placeholder=" CSE "
                style={styles.InputBox}
                onChangeText={(branch) => this.setState({ branch }, this.validate)}
              />
              {
                (this.state.branchError === 0) ? null : <Text style={styles.errorsMessage}>{this.state.branchError}</Text>
              }
            </View>

            <View>
              <Text style={styles.heading}>Email<Text style={styles.star}>*</Text>:{' '}</Text>
              <TextInput
                placeholder=" example@gmail.com "
                style={[styles.InputBox, { marginBottom: 10, width: 'auto' }]}
                keyboardType='email-address'
                onChangeText={(email) => this.setState({ email }, this.validate)}
              />
              {
                (this.state.emailError === 0) ? null : <Text style={styles.errorsMessage}>{this.state.emailError}</Text>
              }
            </View>

            <View>
              <Text style={styles.heading}>Password<Text style={styles.star}>*</Text>:{' '}</Text>
              <TextInput
                placeholder=" Should be minimum 8-characters. "
                style={[styles.InputBox, { marginBottom: 10, width: 'auto' }]}
                onChangeText={(password) => this.setState({ password }, this.validate)}
              />
              {
                (this.state.passwordError === 0) ? null : <Text style={styles.errorsMessage}>{this.state.passwordError}</Text>
              }
            </View>

            <View>
              <Text style={styles.heading}>Confirm Password<Text style={styles.star}>*</Text>:{' '}</Text>
              <TextInput
                placeholder=" Should be matched with above password. "
                style={[styles.InputBox, { marginBottom: 10, width: 'auto' }]}
                onChangeText={(confirmPassword) => this.setState({ confirmPassword }, this.validate)}
              />
              {
                (this.state.confirmPasswordError === 0) ? null : <Text style={styles.errorsMessage}>{this.state.confirmPasswordError}</Text>
              }
            </View>

            <TouchableOpacity
              onPress={this.insertRecord}
              style={[styles.Button, {backgroundColor:'green'}]}          >
              <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>REGISTER</Text>
            </TouchableOpacity>
            <Text>{"\n"}</Text>
          </View>
        </ScrollView>
      )
    }
  }

  const styles = StyleSheet.create({
    main: {
      backgroundColor: 'cyan',
      borderRadius: 30,
      borderWidth: 1,
      borderColor: 'lightyellow'

    },
    heading: {
      fontSize: Width * 0.06,
      marginLeft: 5
    },
    star: {
      color: 'red',
      fontSize: 20
    },
    Button: {
      marginTop: '2%',
      borderWidth: 2,
      borderColor: 'black',
      padding: 5,
      borderRadius: 20,
      width: '50%',
      alignItems: 'center',
      alignSelf: 'center',

    },
    InputBox: {
      borderWidth: 1,
      borderRadius: 8,
      marginRight: 10,
      marginLeft: 10,
      fontSize: 20,
      fontWeight:'bold',
      height: Height * 0.05,
      padding: 1,
      margin: 2,
      backgroundColor:'white',
      color:'blue'
    },
    errorsMessage: {
      fontSize: 12,
      fontStyle: 'italic',
      fontWeight: 'bold',
      color: 'red'
    }
  })

export default Student_Regitration;