import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import RoleDropdown from '../../components/molecules/RoleDropdown';
import AdminLoginForm from '../../components/molecules/AdminLoginForm';
import AdminRegisterForm from '../../components/molecules/AdminRegisterForm';
import EmployeeLoginForm from '../../components/molecules/EmployeeLoginForm';
import EmployeeRegisterForm from '../../components/molecules/EmployeeRegisterForm';
import VendorLoginForm from '../../components/molecules/VendorLoginForm';
import VendorRegisterForm from '../../components/molecules/VendorRegisterForm';
import {useDispatch} from 'react-redux';

const LoginScreen = () => {
  const adminFormStatus = useSelector(state => state.adminSlice);
  const employeeFormStatus = useSelector(state => state.employeeSlice);
  const vendorFormStatus = useSelector(state => state.vendorSlice);

  const renderLoginForm = () => {
    if (adminFormStatus?.showLoginForm) {
      return <AdminLoginForm />;
    } else if (employeeFormStatus?.showLoginForm) {
      return <EmployeeLoginForm />;
    } else if (vendorFormStatus?.showLoginForm) {
      return <VendorLoginForm />;
    }
    return null;
  };

  const renderRegisterForm = () => {
    if (adminFormStatus?.showRegisterForm) {
      return <AdminRegisterForm />;
    } else if (employeeFormStatus?.showRegisterForm) {
      return <EmployeeRegisterForm />;
    } else if (vendorFormStatus?.showRegisterForm) {
      return <VendorRegisterForm />;
    }
    return null;
  };

  return (
    <View>
      <RoleDropdown />
      <View>
        <Text>Login Form:</Text>
        {renderLoginForm()}
      </View>
      <View>
        <Text>Register Form:</Text>
        {renderRegisterForm()}
      </View>
    </View>
  );
};

export default LoginScreen;
