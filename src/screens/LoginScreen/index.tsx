import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import RoleDropdown from '../../components/molecules/RoleDropdown';
import AdminLoginForm from '../../components/molecules/AdminLoginForm';
import AdminRegisterForm from '../../components/molecules/AdminRegisterForm';
import EmployeeLoginForm from '../../components/molecules/EmployeeLoginForm';
import EmployeeRegisterForm from '../../components/molecules/EmployeeRegisterForm';
import VendorLoginForm from '../../components/molecules/VendorLoginForm';
import VendorRegisterForm from '../../components/molecules/VendorRegisterForm';
import {useDispatch} from 'react-redux';
import {showAdminLoginForm} from '../../redux/adminSlice';
import store from '../../redux/store';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const adminFormStatus = useSelector((state) => state.admin);
  const employeeFormStatus = useSelector(state => state.employeeSlice);
  const vendorFormStatus = useSelector(state => state.vendorSlice);

  console.log(adminFormStatus.showLoginForm);
  console.log(adminFormStatus.showRegisterForm);
  // const renderLoginForm = () => {
  //   console.log(adminFormStatus);
  //   if (adminFormStatus?.showLoginForm) {
  //     return <AdminLoginForm />;
  //   } else if (employeeFormStatus?.showLoginForm) {
  //     return <EmployeeLoginForm />;
  //   } else if (vendorFormStatus?.showLoginForm) {
  //     return <VendorLoginForm />;
  //   }
  //   return null;
  // };

  // const renderRegisterForm = () => {
  //   if (adminFormStatus?.showRegisterForm) {
  //     return <AdminRegisterForm />;
  //   } else if (employeeFormStatus?.showRegisterForm) {
  //     return <EmployeeRegisterForm />;
  //   } else if (vendorFormStatus?.showRegisterForm) {
  //     return <VendorRegisterForm />;
  //   }
  //   return null;
  // };
  // const showLogin = () => {
  //   dispatch(showAdminLoginForm());
  // };

  return (
    // <View>
    //   <RoleDropdown />
    //   <View>
    //     <TouchableOpacity onPress={showLogin}>
    //       <Text>Login Form:</Text>
    //     </TouchableOpacity>
    //     {renderLoginForm()}
    //   </View>
    //   <View>
    //     <Text>Register Form:</Text>
    //     {renderRegisterForm()}
    //   </View>
    //   <Text>Hello world</Text>
    // </View>
    <Text>Hello world</Text>
  );
};

export default LoginScreen;
