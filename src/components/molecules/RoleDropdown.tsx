import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  showAdminLoginForm,
  showAdminRegisterForm,
} from '../../redux/adminSlice';
import {
  showEmployeeLoginForm,
  showEmployeeRegisterForm,
} from '../../redux/employeeSlice';
import {
  showVendorLoginForm,
  showVendorRegisterForm,
} from '../../redux/vendorSlice';

const RoleDropdown = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Select Role');

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleRoleClick = role => {
    switch (role) {
      case 'admin':
        console.log(role);

        dispatch(showAdminLoginForm());
        setSelectedRole('Admin');
        break;
      case 'employee':
        console.log(role);

        dispatch(showEmployeeLoginForm());
        setSelectedRole('Employee');
        break;
      case 'vendor':
        console.log(role);
        dispatch(showVendorLoginForm());
        setSelectedRole('Vendor');
        break;
      default:
        break;
    }
    setIsOpen(false);
  };

  return (
    <View style={styles.dropdownContainer}>
      <View style={styles.dropdown}>
        <TouchableOpacity onPress={handleDropdownClick}>
          <Text style={styles.dropdownButton}>{selectedRole}</Text>
        </TouchableOpacity>
        {isOpen && (
          <View style={styles.dropdownContent}>
            <TouchableOpacity onPress={() => handleRoleClick('admin')}>
              <Text style={styles.dropdownOption}>Admin</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRoleClick('employee')}>
              <Text style={styles.dropdownOption}>Employee</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRoleClick('vendor')}>
              <Text style={styles.dropdownOption}>Vendor</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 10,
  },
  dropdownButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    minWidth: 300,
    alignItems: 'center',
  },
  dropdownContent: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    width: 300,
    marginTop: 10,
  },
  dropdownOption: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});

export default RoleDropdown;
