import React, { Component, useState } from 'react';
import { StyleSheet, Image, Dimensions, View, Text, FlatList, TouchableOpacity, ScrollView, TextInput, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather';

import Teacher_Registration from './Components/Parents/Parent_Registration';
import Student_Regitration from './Components/Students/Student_Registration';
import Parent_Registration from './Components/Parents/Parent_Registration';
import College_Home from './Components/College_Home';
import Books from './Components/Features/Books';
import Materials from './Components/Features/Materials';
import Videos from './Components/Features/Videos';
import Attendance from './Components/Features/Attendance';
import ProjectBasedLearning from './Components/Features/ProjectBasedLearning';
import FacultyLeaveStatus from './Components/Students/Student_Features/FacultyLeaveStatus';
import LeaveForm from './Components/Teachers/Teacher_features/LeaveForm';
import Performance from './Components/Features/Performance';
import TimeTable from './Components/Features/TimeTable';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').width;


const coolegeDesk = [
  {
    id: 1,
    title: 'I am immensely gratified in extending a warm welcome to you, to this prestigious - Dr. M.G.R. Educational and Research Institute which caters to the demands of tens of thousands of students for quality higher education in Technology, Dental and Para Medical disciplines of study, for the past twenty five years. The Educational system is undergoing a paradigm shift in the recent past. Currently Education has become no longer an option but a mandate for survival. Dr. M.G.R. Educational and Research Institute has been playing a major role in providing higher education to the younger generation with updated knowledge and requisite skills to become economic competitors and career seekers. Creditably Dr. M.G.R Educational and Research Institute galvanize high impact academic education which is universally recognised and easily viable for enrollment in the various programmes of interest and optimum career opportunities. Curricular, Co-curricular and extra-Curricular activities are specially designed by the Experienced and Expert staff to achieve excellent grades in Academic exercises. Sports, Games, Debates, Seminars, Culturals etc., thus promoting wide study experience. As a sequel to advancement in educational programmes, specially devised and updated courses such as Bio Technology, Bio Medical Instrumentation, Computer Science, Networking and Communication, Dentistry Medicine etc., are introduced on par with studies abroad. A wide range of programmes are duly accredited by the premier Statutory Authorities of our country like the UGC, NAAC, MCI, DCI etc. Excellent Research Oriented Courses sustaining high-tech development and advantages of the 21st Century technology are offered to students at our University. Leveraging the capabilities and competitions extended across disciplines and organizational boundaries, a large percentage of our students have since turned out to be successful entrepreneurs and captains of industries across our nation, befitting the voice of Thirukkural) "The mother who hears her son called a wise man will rejoice more than she did at his birth"(Kural - 69) With immense happiness, I say that Students drawn from all parts of India and abroad, join our university and provide for a potential social, cultural diversity and experience unto themselves. - Thiru A.C. SHANMUGAM',
    imageUrl: 'https://www.drmgrdu.ac.in/images/towimage/founder_Chancellor.jpg',
    desig: 'Founder\'s Desk',
    name: 'Thiru A C Shanmugam',
    degree: 'B.A., B.L., Ex M.P, Ex. M.L.A'
  },
  {
    id: 2,
    title: 'Education is presently undergoing a welcoming seismic change. In tune with the changing time Dr. M.G.R. Educational and Research Institute (Dr. M.G.R. University - Estd U/s 3 of UGC Act 1956) aims to help students to excel in the various fields of study of their choice. Being in the field of education for past 25 years, Dr. M.G.R. University is looking at engaging the students in overall developmental processes. With the experience and wisdom gained during the last 25 years we have designed co-curricular and extra-curricular activities for the students to be involved in actively. The dedicated staff is devoted to the task of incorporating latest teaching methods with modern equipments and electronic gadgets for the benefit of the students. These proactive teaching methodologies have resulted in higher performance in examinations and academic activities. The main focus of our university is to empower students with sound knowledge, wisdom, experience and training both in the academic level of Engineering, Medical, Dental and in the highly competitive global industrial market. The infrastructure facilities and state-of-the-art equipments contribute to an enjoyable and an easy learning experience. The research and part-time courses enable all the aspirants to acquire higher academic qualifications. Adequate care is taken to give every student an enjoyable, well-rounded and secure educational environment. Help and care is always at hand for the students. We wish the best for all our students, and the members of the University who reiterate their aims at providing the best in academic and extra-curricular fields on excellent lines. - Er. A.C.S. ARUN KUMAR',
    imageUrl: 'https://www.drmgrdu.ac.in/images/towimage/045209president.jpg',
    desig: 'President\'s Desk',
    name: 'Er. A C S. ARUNKUMAR',
    degree: 'B.Tech (Hons), LMISTE, MIEE, LMCSI, CEng (India)',
  },
  {
    id: 3,
    title: 'Higher Education is the backbone of every nation and is the stepping stone for a country to move into the slot of a developed nation. In this role of creating the Schools / Universities of Higher Education, the Government and the Private Sector have an important role to play. Understanding the difficulty of the Government of India to spend significant resources for Higher Education, the Government has conferred the status of "Deemed Universities" under sec 3 of UGC Act 1956 to a very few selected colleges in India and we are pleased to inform that Dr. M.G.R. Educational and Research Institute is one amongst them. Having been a premier college in Chennai, Tamilnadu for more than 15 years and successfully conducting UG/PG /Research programmes of various faculties of Engineering and Technology and Dental Sciences, we have been elevated as a "Deemed University" in 2003. From then on, we have grown leaps and bounds in providing Quality Education. The University has a well orchestered Research Programme leading to MS and PhD with stringent norms right from Admission process to the award of degree. We have initiated a number of Centres of Excellence in the University where a significant number of Sponsored research programme from Governmental agencies as well as industries are in progress. I welcome you to our University and we would be pleased to mould you as a great scholar and a great Citizen of India. - Padmasri R.M.Vasagam',
    imageUrl: 'https://www.drmgrdu.ac.in/images/towimage/050057chancellor.png',
    desig: 'Chancellor\'s Desk',
    name: 'Padmasri R.M.Vasagam'
  },
  {
    id: 4,
    title: 'India tops the youngest population of the world having 45% of its people in the age group of 15 to 35. Grooming our youth is the most important task of both central and state government. There are 1000+ universities in our country. Students passing out from these institutions need to have additional qualities to compete globally. With this focus, Dr. MGR Educational and Research Institute, Deemed to be University provides its students with an opportunity to reflect on the social, economic, cultural and moral issues facing humanity. This truly multifaceted university having medical, dental, engineering, management, law, architecture, education, hotel management, humanities & sciences, arts & commerce, allied health sciences, nursing, pharmacy and physiotherapy gives opportunity for our students to obtain knowledge across multiple domains. Our curriculum is designed in such a way to mould our students as design thinkers to provide innovative solution to various problems of the world. The high intensity education driven by technology will help them surmount any challenge they are likely to face in the modern and competitive world. They aim to create not mere job seekers but ambitious "Job Creators" who will be the architects of tomorrow\'s world. The University is accredited by NAAC and accorded with "A" Grade (3.31 out of 4) rating by the National Assessment and Accreditation Council (NAAC). Our University Engineering Departments - Biotechnology, Computer Science and Engineering, Electronics and Communication Engineering, Electrical and Electronics Engineering, Civil Engineering, Mechanical Engineering and Faculty of Management Studies - have been accredited by National Board of Accreditation (NBA), New Delhi. Two of our University Departments - Biotechnology (under ANSAC) and Computer Science and Engineering (under CAC & EAC) were Internationally accredited by the world famous Accreditation Board for Engineering and Technology, Inc. (ABET) for six years up to 2025. We are proud to announce that ours is the first and only University in India who has achieved the QMS accreditation of ISO 21001:2018 TUV, Germany. Moreover our constituent unit RajaRajeswari Medical College and Hospital (RRMCH), Bengaluru and A.C.S Medical College and Hospital (ACSMCH), Chennai have been accredited by National Accreditation Board for Hospitals (NABH) for Quality Maintenance of our hospitals. In addition, the above institution labs and Sri Lalithambigai Medical College and Hospital (SLMCH), Chennai are also accredited by National Accreditation Board for Testing and Calibration Laboratories (NABL). Innovation ecosystem is actively nurtured in our University. Efforts for sustainable energy development and green campus initiatives are regularly pursued. University has Pre-Incubation centers called Dr. APJ Abdul Kalam Center of Excellence in Innovation & Entrepreneurship, which is funded by Department of Science and Technology under NewGen IEDC Scheme and Ministry of MSME through which students are benefitted by developing their ideas into business. Dr. MGR Educational & Research Institute has been awarded 4.0 Stars from Institution\'s Innovation Council from Ministry of Education and awarded Excellent band in ATAL Ranking of Institutions Innovation Achievements. 35+ years of experience of mine in professional education is helping me to augment the teaching learning process happening in this University. Hope student will have unique experience during their stay in this campus and emerge as trend setters in their domain. - Prof. Dr. S. GEETHALAKSHMI',
    imageUrl: 'https://www.drmgrdu.ac.in/images/towimage/vc.jpg',
    desig: 'Vice-Chancellor\'s Desk',
    name: 'Prof. Dr. S. GEETHALAKSHMI',
    degree: 'M.B.B.S., M.D, Ph.D., F.M.M.C., F.I.A.T.P., F.I.I.O.P.M., (UK), F.A.C.H.S.M. (AUS)'
  },
  {
    id: 5,
    title: 'I, Dr. S. GEETHA, Head of Computer Science and Engineering Department, hereby declare that this copy of the syllabus (B.Tech –Computer Science and Engineering - Full Time 2018 Regulation) is the final version which is being taught in the class and uploaded in our University website.  I assure that the Syllabi available in our University website is verified and found correct. The Curriculum and Syllabi have been ratified by our Academic Council / Vice Chancellor.',
    imageUrl: 'https://scontent.fmaa2-4.fna.fbcdn.net/v/t31.18172-8/1102752_4443553465353_1942208521_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=zo4hRbUqFOYAX9meuGh&_nc_ht=scontent.fmaa2-4.fna&oh=00_AfAVGnbUaQBvecOm7coBVtWz9ufl7bLLPWFe2KyEeK8sDg&oe=653885D6',
    desig: 'Head of CSE Dept.',
    name: 'Dr. S. GEETHA',
    degree: 'B.Tech, M.Tech, Ph.D'
  }

]




const Student_Drawer = () => {
  return (
    <Drawer.Navigator initialRouteName='Computer Science and Engineering'>
      <Drawer.Screen name='E-Books' component={Books} />
      <Drawer.Screen name='Expert prepared-material' component={Materials} />
      <Drawer.Screen name='Programming Videos' component={Videos} />
      <Drawer.Screen name='Your Attendance' component={Attendance} />
      <Drawer.Screen name='Project Based Learning' component={ProjectBasedLearning} />
      <Drawer.Screen name='Faculty Leave Status' component={FacultyLeaveStatus} />
      <Drawer.Screen name='Your Performance' component={Performance} />
      <Drawer.Screen name='Time Table' component={TimeTable} />
      <Drawer.Screen name='Log out' component={HomeScreen} />
    </Drawer.Navigator>
  );
}



const Teacher_Drawer = () => {
  return (
    <Drawer.Navigator initialRouteName='Computer Science and Engineering'>
      <Drawer.Screen name='E-Books' component={Books} />
      <Drawer.Screen name='Expert prepared-material' component={Materials} />
      <Drawer.Screen name='Programming Videos' component={Videos} />
      <Drawer.Screen name='Student Attendance' component={Attendance} />
      <Drawer.Screen name='Project Based Learning' component={ProjectBasedLearning} />
      <Drawer.Screen name='Apply Leave Form' component={LeaveForm} />
      <Drawer.Screen name='Student Performance' component={Performance} />
      <Drawer.Screen name='Time Table' component={TimeTable} />
      <Drawer.Screen name='Log out' component={HomeScreen} />
    </Drawer.Navigator>
  );
}



const Parent_Drawer = () => {
  return (
    <Drawer.Navigator initialRouteName='Computer Science and Engineering'>
      <Drawer.Screen name='Candidate Attendance' component={Attendance} />
      <Drawer.Screen name='Candidate Performance' component={Performance} />
      <Drawer.Screen name='Log out' component={HomeScreen} />
    </Drawer.Navigator>
  );
}




const App = () => {
  return (
    <NavigationContainer>
      <View>
        <Image source={require('./Image/Mgr.png')} style={[styles.pic, { maxWidth: '24%', maxHeight: '21%', marginLeft: '3%', marginRight: '86%', marginTop: '2%' }]} />
        <Image source={require('./Image/NAAC.png')} style={[styles.pic, { maxWidth: '4.5%', maxHeight: '6%', marginLeft: '78%', marginRight: '7%', marginTop: '3%' }]} />
        <College_Home />
      </View>
      <Stack.Navigator>

        <Stack.Screen name=" Computer Science and Engineering " component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 23,
              borderRadius: 10,
              backgroundColor: '#ff471a',

            },
          }} />

        <Stack.Screen name="Student Registration" component={StudentRegister}
          options={{
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25
            }
          }} />
        <Stack.Screen name="Student Features" component={Student_Drawer}
          options={{
            headerStyle: {
              backgroundColor: 'lightgray',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25
            }
          }} />

        <Stack.Screen name="Teacher Registration" component={TeacherRegister}
          options={{
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25
            }
          }} />
        <Stack.Screen name="Teacher Features" component={Teacher_Drawer}
          options={{
            headerStyle: {
              backgroundColor: 'lightgray',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25
            }
          }} />

        <Stack.Screen name="Parent Registration" component={ParentRegister}
          options={{
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25
            }
          }} />
        <Stack.Screen name="Parent Features" component={Parent_Drawer}
          options={{
            headerStyle: {
              backgroundColor: 'lightgray',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25
            }
          }} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}


const StudentRegister = () => {
  return (
    <View>
      <Student_Regitration />
    </View>
  );
}


const TeacherRegister = () => {
  return (
    <View>
      <Teacher_Registration />
    </View>
  );
}


const ParentRegister = () => {
  return (
    <View>
      <Parent_Registration />
    </View>
  );
}






const HomeScreen = (props) => {

  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const [view, setView] = useState(false);

  const [regNo, setRegNo] = useState("");
  const [password, setPassword] = useState("");

  const [empId, setEmpId] = useState("");


  function Student_toggle() {
    setShow(!show)
    setVisible(false)
    setView(false)
  }
  function Teacher_toggle() {
    setVisible(!visible)
    setShow(false)
    setView(false)
  }
  function Parent_toggle() {
    setView(!view)
    setShow(false)
    setVisible(false)
  }


  function StudentLogin() {
    if (regNo.length == 0 || password.length == 0) {
      alert("Required Field Is Missing!!!");
    }
    else {
      var APIURL = "http://192.168.34.126:80/php/Student_Login.php";

      var headers =
      {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      };

      var Data = {
        regNo: regNo,
        password: password
      };

      fetch(APIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
        .then((Response) => Response.json())
        .then((Response) => {
          alert(Response[0].Message)
          if (Response[0].Message == "Successfull Login") {
            console.log("true")
            props.navigation.navigate("Student Features");
          }
          console.log(Data);
        })
        .catch((error) => {
          console.error("ERROR FOUND" + error);
        })
    }
  }



  function TeacherLogin() {
    if (empId.length == 0 || password.length == 0) {
      alert("Required Field Is Missing!!!");
    }
    else {
      var APIURL = "http://192.168.0.97:80/php/Teacher_Login.php";

      var headers =
      {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      };

      var Data = {
        empId: empId,
        password: password
      };

      fetch(APIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
        .then((Response) => Response.json())
        .then((Response) => {
          alert(Response[0].Message)
          if (Response[0].Message == "Successfull Login") {
            console.log("true")
            props.navigation.navigate("Teacher Features");
          }
          console.log(Data);
        })
        .catch((error) => {
          console.error("ERROR FOUND" + error);
        })
    }
  }


  function ParentLogin() {
    if (regNo.length == 0 || password.length == 0) {
      alert("Required Field Is Missing!!!");
    }
    else {
      var APIURL = "http://192.168.0.97:80/php/Parent_Login.php";

      var headers =
      {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      };

      var Data = {
        regNo: regNo,
        password: password
      };

      fetch(APIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
        .then((Response) => Response.json())
        .then((Response) => {
          alert(Response[0].Message)
          if (Response[0].Message == "Successfull Login") {
            console.log("true")
            props.navigation.navigate("Parent Features");
          }
          console.log(Data);
        })
        .catch((error) => {
          console.error("ERROR FOUND" + error);
        })
    }
  }



  return (
    <ScrollView>
      <View style={{ flex: 1 }}>

        <TouchableOpacity style={[styles.Button, { backgroundColor: 'blue' }]} onPress={Student_toggle} >
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>For Student</Text>
        </TouchableOpacity>
        {
          show ?
            <View style={{backgroundColor:'#c2ccfc', borderWidth:1, borderRadius:30}}>
              <View style={{ backgroundColor: '#f9bee6', borderRadius: 30, marginTop: '2%', width:'85%', alignSelf:'center' }}>
                <Text style={{ fontSize: 25, color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Enter Student's Details</Text>
                <TextInput
                  placeholder="Enter Register Number"
                  style={styles.inputBox}
                  onChangeText={(regNo) => setRegNo(regNo)}
                  value={regNo}
                />
                <TextInput
                  placeholder="Enter Password"
                  style={styles.inputBox}
                  onChangeText={(password) => setPassword(password)}
                  value={password}
                  secureTextEntry={true}
                />
              </View>
              <TouchableOpacity style={[styles.Button, { backgroundColor: 'blue' }]} onPress={StudentLogin} >
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Sign-in</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.Button, { borderColor: 'ghostwhite' }]} onPress={() => props.navigation.navigate("Student Registration")} >
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>If you don't have account, please
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red', marginLeft: '70%', }}>  Register</Text>
                </Text>
              </TouchableOpacity>
            </View>
            : null
        }



        <TouchableOpacity style={[styles.Button, { backgroundColor: 'coral' }]} onPress={Teacher_toggle} >
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>For Teacher</Text>
        </TouchableOpacity>
        {
          visible ?
            <View style={{backgroundColor:'#fce8c2', borderWidth:1, borderRadius:30}}>
              <View style={{ backgroundColor: 'cyan', borderRadius: 30, marginTop: '2%', width:'85%', alignSelf:'center' }}>
                <Text style={{ fontSize: 25, color: 'red', textAlign: 'center', fontWeight: 'bold' }}>Enter Teacher's Details</Text>
                <TextInput
                  placeholder="Enter Email id"
                  style={styles.inputBox}
                  onChangeText={(empId) => setEmpId(empId)}
                  value={empId}
                />
                <TextInput
                  placeholder="Enter Password"
                  style={styles.inputBox}
                  onChangeText={(password) => setPassword(password)}
                  value={password}
                  secureTextEntry={true}
                />
              </View>
              <TouchableOpacity style={[styles.Button, { backgroundColor: 'coral' }]} onPress={TeacherLogin} >
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Sign-in</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.Button, { borderColor: 'ghostwhite' }]} onPress={() => props.navigation.navigate("Teacher Registration")} >
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>If you don't have account, please
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red', marginLeft: '70%', }}>  Register</Text>
                </Text>
              </TouchableOpacity>
            </View>
            : null
        }



        <TouchableOpacity style={[styles.Button, { backgroundColor: 'green' }]} onPress={Parent_toggle} >
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>For Parent</Text>
        </TouchableOpacity>
        {
          view ?
            <View style={{backgroundColor:'#6bfbac', borderWidth:1, borderRadius:30}}>
              <View style={{ backgroundColor: 'skyblue', borderRadius: 30, marginTop: '2%', width:'85%', alignSelf:'center' }}>
                <Text style={{ fontSize: 25, color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Enter Student's Details</Text>
                <TextInput
                  placeholder="Enter Student's Register Number"
                  style={styles.inputBox}
                  onChangeText={(regNo) => setRegNo(regNo)}
                  value={regNo}
                />
                <TextInput
                  placeholder="Enter Domain"
                  style={styles.inputBox}
                  onChangeText={(password) => setPassword(password)}
                  value={password}
                />
              </View>
              <TouchableOpacity style={[styles.Button, { backgroundColor: 'green' }]} onPress={ParentLogin} >
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Sign-in</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.Button, { borderColor: 'ghostwhite' }]} onPress={() => props.navigation.navigate("Parent Registration")} >
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>If you don't have account, please
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red', marginLeft: '70%', }}>  Register</Text>
                </Text>
              </TouchableOpacity>
            </View>
            : null
        }



        <View style={{ flex: 1, marginTop: 10 }}>

          <View style={{ height: Height }}>

            <FlatList
              data={coolegeDesk}
              showsHorizontalScrollIndicator={true}
              pagingEnabled
              horizontal

              renderItem={({ item, index }) => (

                <View style={{ width: Width, height: Height / 2, justifyContent: 'center', alignItems: 'center' }}>

                  <TouchableOpacity disabled style={{ width: '90%', height: '90%' }}>

                    <View style={{ marginTop: 10 }}>
                      <Image
                        source={{ uri: item.imageUrl }}
                        style={{ height: '65%', width: '47%', position: 'absolute' }}
                      />
                      <View style={{ marginLeft: '50%', marginTop: '0' }}>
                        <Text style={styles.designation}>{item.desig}</Text>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', color: 'red' }}>{item.name}</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.degree}</Text>
                      </View>

                      <Text style={{ textAlign: 'justify', marginLeft: '2%', marginRight: '2%', marginTop: 67 }}>{item.title}</Text>

                    </View>

                  </TouchableOpacity>
                </View>

              )}

            />
          </View>
        </View>

      </View>
    </ScrollView>
  );
}






const styles = StyleSheet.create({
  pic: {
    position: 'absolute',
  },
  container: {
    justyfyContent: 'center',
    alignItems: 'center'
  },
  inputBox: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: '#e2f1f1',
    padding: 4,
    marginRight: 50,
    marginLeft: 50,
    marginBottom: 10
  },
  Button: {
    marginTop: '2%',
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    borderRadius: 20,
    width: '50%',
    alignItems: 'center',
    alignSelf: 'center',

  },
  designation: {
    marginTop: 10,
    textAlign: 'center',
    backgroundColor: 'magenta',
    fontSize: 20,
    borderWidth: 3,
    borderRadius: 10,
    fontWeight: 'bold',
    color: 'white',
    padding: 5
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textTransform: 'uppercase'
  },
  loginButtonSection: {
    width: '100%',
    // height: '30%',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButton: {
    backgroundColor: '#06baab',
    color: 'white',
    height: 35,
    justifyContent: 'center', //up dwn
    alignItems: 'center',  //r & l
    width: '70%',
    borderRadius: 10,

  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    paddingBottom: 5,
    width: '100%'
  }
})



export default App;