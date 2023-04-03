import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import DropDown from '../../components/molecules/DropDown';
import {Image} from 'react-native-elements';
import LoginAdmin from '../../components/molecules/LoginAdmin';
import {selectRole, toggleLoginOrRegister} from '../../redux/RoleSlice';

const now = new Date();
const opentime = new Date();
opentime.setHours(9, 0, 0);
const closetime = new Date();
closetime.setHours(21, 0, 0);
const timeConstraint =
(now.getHours() > opentime.getHours() ||
(now.getHours() === opentime.getHours() &&
now.getMinutes() > opentime.getMinutes()) ||
(now.getHours() === opentime.getHours() &&
now.getMinutes() === opentime.getMinutes())) &&
(now.getHours() < closetime.getHours() ||
(now.getHours() === closetime.getHours() &&
now.getMinutes() < closetime.getMinutes()) ||
(now.getHours() === closetime.getHours() &&
now.getMinutes() === closetime.getMinutes()));

let role = [
{
id: 1,
name: 'Employee',
},
{
id: 2,
name: 'Vendor',
},
{
id: 3,
name: 'Admin',
},
];

const LoginHeader = () => {
const dispatch = useDispatch();
const selectedRole = useSelector(state => state.role.selectedRole);
const isLogin = useSelector(state => state.role.isLogin);

const onSelect = item => {
dispatch(selectRole(item.name));
};

const toggleLogin = () => {
dispatch(toggleLoginOrRegister(true));
};

const toggleRegister = () => {
dispatch(toggleLoginOrRegister(false));
};

return (
<View style={styles.container}>
<View style={styles.roleDropDownContainer}>
<DropDown
       label="Role"
       data={role}
       selectedItem={selectedRole}
       onSelect={onSelect}
     />
</View>
{timeConstraint && (
<View style={styles.loginContainer}>
<TouchableOpacity style={styles.loginButton} onPress={toggleLogin}>
<Text style={styles.loginText}>{isLogin ? 'LOG OUT' : 'LOG IN'}</Text>
</TouchableOpacity>
{!isLogin && (
<TouchableOpacity
           style={styles.registerButton}
           onPress={toggleRegister}>
<Text style={styles.registerText}>REGISTER</Text>
</TouchableOpacity>
)}
</View>
)}
{selectedRole === 'Admin' && isLogin && <LoginAdmin />}
</View>
);
};

const styles = StyleSheet.create({
container: {
flexDirection: 'row',
alignItems: 'center',
},
roleDropDownContainer: {
flex: 1,
marginHorizontal: 10,
},
loginContainer: {
flexDirection: 'row',
alignItems: 'center',
},
loginButton: {
backgroundColor: '#FFD15C',
borderRadius: 10,
paddingVertical: 5,
paddingHorizontal: 10,
marginRight: 10,
},
loginText: {
fontWeight: 'bold',
},
registerButton: {
backgroundColor: '#FFD15C',
borderRadius: 10,
paddingVertical: 5,
paddingHorizontal: 10,
},
registerText: {
fontWeight: 'bold',
},
});