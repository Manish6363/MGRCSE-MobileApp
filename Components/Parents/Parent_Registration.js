import React, { Component } from "react";
import { Dimensions, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;


class Parent_Regitration extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameError: '',
      childName: '',
      childNameError: '',
      regNo: '',
      regNoError: '',
      phone: '',
      phoneError: '',
      email: '',
      emailError: '',
      address: '',
      addressError: '',
      password: '',
      passwordError: '',
      confirmPassword: '',
      confirmPasswordError: ''
    }
  }
  
  validate = () => {
    this.setState({
      nameError: '',
      childNameError: '',
      regNoError: '',
      phoneError: '',
      emailError: '',
      addressError: '',
      passwordError: '',
      confirmPasswordError: ''
    });
    
    const nameexp = /^[A-Za-z\s]*$/;
    const numexp = /^[0-9]*$/;
    const add = /^[a-zA-Z -:/+]*\d{6}$/;
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

    if (this.state.childName.length == 0) {
      this.setState({ childNameError: 'Candidate name should be filled.' });
      return false;
    }
    else if (!nameexp.test(this.state.childName)) {
      this.setState({ childNameError: 'Only CHARACTERS are allowed.' });
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

    else if (this.state.email.length == 0) {
      this.setState({ emailError: 'Email should be filled.' });
      return false;
    }
    else if (!emailexp.test(this.state.email)) {
      this.setState({ emailError: 'Invalid Email.' });
      return false;
    }

    if (this.state.address.length == 0) {
      this.setState({ addressError: 'Address should be filled.' });
      return false;
    }
    else if (!add.test(this.state.address)) {
      this.setState({ addressError: 'Only specific special characters (-, :, /, +) for separation in address and\nEnter PIN CODE at the end of address.' });
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
    var childName = this.state.childName;
    var regNo = this.state.regNo;
    var phone = this.state.phone;
    var email = this.state.email;
    var address = this.state.address;
    var password = this.state.password;
    var confirmPassword = this.state.confirmPassword;

    var insertAPIUrl = "http://192.168.125.126:80/php/Parent_Registration.php";
    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application.json'
    };

    var Data = {
      name: name,
      childName: childName,
      regNo: regNo,
      phone: phone,
      email: email,
      address: address,
      password: password,
      confirmPassword: confirmPassword
    };

    if (name.length == 0 || childName.length == 0 || regNo.length == 0 || phone.length == 0 || email.length == 0 || address.length == 0 || password.length == 0 || confirmPassword.length == 0) {
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
          alert("Register number or Mobile Number has already registered. \nTRY with new candidate.\nError encountered: " + error);
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

            <View>
              <Text style={styles.heading}>Candidate Name<Text style={styles.star}>*</Text>:{' '}</Text>
              <TextInput
                placeholder="  Enter Candidate Full Name  "
                style={styles.InputBox}
                onChangeText={(childName) => this.setState({ childName }, this.validate)}
              />
              {
                (this.state.childNameError === 0) ? null : <Text style={styles.errorsMessage}>{this.state.childNameError}</Text>
              }
            </View>

            <View>
              <Text style={styles.heading}>Candidate Register Number<Text style={styles.star}>*</Text>:</Text>
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

            <View>
              <Text style={styles.heading}>Your Mobile Number<Text style={styles.star}>*</Text>:</Text>
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
              <Text style={styles.heading}>Your Email<Text style={styles.star}>*</Text>:{' '}</Text>
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
              <Text style={styles.heading}>Your Permanent Address<Text style={styles.star}>*</Text>:{' '}</Text>
              <TextInput
                placeholder="  Enter Permanent address with PIN Code  "
                style={styles.InputBox}
                onChangeText={(address) => this.setState({ address }, this.validate)}
              />
              {
                (this.state.addressError === 0) ? null : <Text style={styles.errorsMessage}>{this.state.addressError}</Text>
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
      backgroundColor: '#d4b3da',
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
      color:'#3126fa'
    },
    errorsMessage: {
      fontSize: 12,
      fontStyle: 'italic',
      fontWeight: 'bold',
      color: 'red'
    }
  })

export default Parent_Regitration;