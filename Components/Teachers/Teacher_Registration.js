import React, { Component } from "react";
import { Dimensions, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;


class Teacher_Registration extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameError: '',
      empId: '',
      empIdError: '',
      dob: '',
      dobError: '',
      phone: '',
      phoneError: '',
      exp: '',
      expError: '',
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
      empIdError: '',
      dobError: '',
      phoneError: '',
      expError: '',
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

    else if (this.state.empId.length == 0) {
      this.setState({ empIdError: 'Your Employee\nID should be\nfilled.' });
      return false;
    }
    else if (!numexp.test(this.state.empId)) {
      this.setState({ empIdError: 'Only NUMBERS\nare allowed.' });
      return false;
    }
    else if (this.state.empId.length < 3 || this.state.empId.length > 5) {
      this.setState({ empIdError: 'Employee ID \nis Wrong.' });
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

    else if (this.state.exp.length == 0) {
      this.setState({ expError: 'Experience should be filled.' });
      return false;
    }
    else if (this.state.exp.length > 40) {
      this.setState({ expError: '40+ years of experi-\nence. Is it right???' });
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
    var empId = this.state.empId;
    var dob = this.state.dob;
    var phone = this.state.phone;
    var exp = this.state.exp;
    var email = this.state.email;
    var password = this.state.password;
    var confirmPassword = this.state.confirmPassword;

    var insertAPIUrl = "http://192.168.125.126:80/php/Teacher_Registration.php";
    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application.json'
    };

    var Data = {
      name: name,
      empId: empId,
      dob: dob,
      phone: phone,
      exp: exp,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };

    if (name.length == 0 || empId.length == 0 || dob.length == 0 || phone.length == 0 || exp.length == 0 || email.length == 0 || password.length == 0 || confirmPassword.length == 0) {
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
          alert("Employee ID or Mobile Number has been already registered. \nTRY with new candidate.\nError encountered: " + error);
        })
      }
    }



    render() {
      return (
        <ScrollView>
          <View style={styles.main}>

            <View>
              <Text style={styles.heading}>Your Name<Text style={styles.star}>*</Text>:{' '}</Text>
              <TextInput
                placeholder="  Enter Your Full Name  "
                style={styles.InputBox}
                onChangeText={(name) => this.setState({ name }, this.validate)}
              />
              {
                (this.state.nameError === 0) ? null : <Text style={styles.errorsMessage}>{this.state.nameError}</Text>
              }
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.heading}>Your Employee ID<Text style={styles.star}>*</Text>:{' '}</Text>
              <TextInput
                placeholder=" X X X X "
                style={styles.InputBox}
                keyboardType='phone-pad'
                onChangeText={(empId) => this.setState({ empId }, this.validate)}
              />
              {
                (this.state.empIdError === 0) ? null : <Text style={styles.errorsMessage}>{this.state.empIdError}</Text>
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

            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Text style={styles.heading}>Year's of Experience<Text style={styles.star}>* </Text> </Text>
              <TextInput
                placeholder=" 00 "
                style={styles.InputBox}
                onChangeText={(exp) => this.setState({ exp }, this.validate)}
              />
              {
                (this.state.expError === 0) ? null : <Text style={styles.errorsMessage}>{this.state.expError}</Text>
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
      backgroundColor: '#ffccff',
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
      color:'#0066ff'
    },
    errorsMessage: {
      fontSize: 12,
      fontStyle: 'italic',
      fontWeight: 'bold',
      color: 'red'
    }
  })

export default Teacher_Registration;