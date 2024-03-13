import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Register from './Register';
import Password from './Password';
import Otp from './Otp';
import ResetPassword from './ResetPassword';
import ChangedPassword from './ChangedPassword';
import HomePage from './HomePage';
import Home from './Home';
import List from './List';
import calender from './calender';
import NewList from './NewList';
import Cal from './Cal';
import Cate from './Cate';
import Catt from './Catt';
import Profile from './Profile';
import Account from './Account';
import Theme from './Theme';
import Icon from './Icon';




const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
        <Stack.Screen name="Password" component={Password} options={{headerShown:false}}/>
        <Stack.Screen name="Otp" component={Otp} options={{headerShown:false}}/>
        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{headerShown:false}}/>
        <Stack.Screen name="ChangedPassword" component={ChangedPassword} options={{headerShown:false}}/>
        <Stack.Screen name="HomePage" component={HomePage} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="List" component={List} options={{headerShown:false}}/>
        <Stack.Screen name="calender" component={calender} options={{headerShown:false}}/>
        <Stack.Screen name="NewList" component={NewList} options={{headerShown:false}}/>
        <Stack.Screen name="Cal" component={Cal} options={{headerShown:false}}/>
        <Stack.Screen name="Cate" component={Cate} options={{headerShown:false}}/>
        <Stack.Screen name="Catt" component={Catt} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
        <Stack.Screen name="Account" component={Account} options={{headerShown:false}}/>
        <Stack.Screen name="Theme" component={Theme} options={{headerShown:false}}/>
        <Stack.Screen name="Icon" component={Icon} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
