import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './src/Main';
import AuthLayout from './src/(auth)/_layout';
import TabsLayout from './src/(tabs)/_layout';
import Splash from './src/(splash)';
import OnboardingScreen from './src/(splash)/OnboardingItem';
import Onboarding2 from './src/(splash)/Onboarding2';
import logoImage from './src/assets/images/logo.png';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ReminderLayout from './src/(Reminder)/_layout';
import Attendance from './src/components/Home/attendance/Attendance';

const Stack = createNativeStackNavigator();

const AppNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen
          name="(auth)"
          component={AuthLayout}
          options={{
            headerShown: true,
            headerTitle: () => (
              <View style={styles.headerContainer}>
                <Image source={logoImage} style={styles.logo} />
                <Text style={styles.title}>IlmPro</Text>
              </View>
            ),
            headerLeft: () => {
              const navigation = useNavigation();
              return (
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={styles.backButton}>
                  <Image
                    source={require('./src/assets/icons/left-arrow.png')}
                    style={styles.backArrow}
                  />
                </TouchableOpacity>
              );
            },
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#fff'},
          }}
        />
        <Stack.Screen
          name="(tabs)"
          component={TabsLayout}
          options={{
            headerShown: false,
            headerTitle: () => (
              <View style={styles.headerContainer}>
                <Image source={logoImage} style={styles.logo} />
                <Text style={styles.title}>IlmPro</Text>
              </View>
            ),
            headerLeft: () => {
              const navigation = useNavigation();
              return (
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={styles.backButton}>
                  <Image
                    source={require('./src/assets/icons/left-arrow.png')}
                    style={styles.backArrow}
                  />
                </TouchableOpacity>
              );
            },
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#fff'},
          }}
        />
        <Stack.Screen
          name="(splash)"
          component={Splash}
          options={{headerShown: true}}
        />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="Attendance" component={Attendance} />
        <Stack.Screen
          name="Onboarding2"
          component={Onboarding2}
          options={{
            headerShown: true,
            headerTitle: () => (
              <View style={styles.headerContainer}>
                <Image source={logoImage} style={styles.logo} />
                <Text style={styles.title}>IlmPro</Text>
              </View>
            ),
            headerLeft: () => {
              const navigation = useNavigation();
              return (
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={styles.backButton}>
                  <Image
                    source={require('./src/assets/icons/left-arrow.png')}
                    style={styles.backArrow}
                  />
                </TouchableOpacity>
              );
            },
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#fff'},
          }}
        />
        <Stack.Screen name='(Reminder)' component={ReminderLayout}
        options={{
          headerShown: true,
          headerTitle: 'Reminder',
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backButton}>
                <Image
                  source={require('./src/assets/icons/left-arrow.png')}
                  style={styles.backArrow}
                />
              </TouchableOpacity>
            );
          },
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#fff'},
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 36,
    height: 38,
    marginRight: 8,
  },
  title: {
    fontSize: 27,
    fontWeight: 600,
    lineHeight: 41,
    color: '#000',
  },
  backButton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#1212120D',
    borderRadius: 100,
  },
  backArrow: {
    width: 20,
    height: 20,
    tintColor: '#000',
    resizeMode: 'contain',
  },
});

export default AppNav;
