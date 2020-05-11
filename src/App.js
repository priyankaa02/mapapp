// /* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import EnhancedAppContainer from './navigators';
import {configureStore} from './store';
import MapContainer from './containers/MapContainer';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Splash from './components/Splash';

const App = () => {
  const [store] = configureStore();

  return (
    <Provider store={store}>
      <EnhancedAppContainer />
    </Provider>
  );
};

export default App;

// import React from 'react';
// import {
//   GoogleSignin,
//   statusCodes,
//   GoogleSigninButton,
// } from 'react-native-google-signin';
// import {useState, useEffect} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';
// import RadioForm from 'react-native-simple-radio-button';
// import {Colors} from 'react-native/Libraries/NewAppScreen';

// const App = () => {
//   const [value, setValue] = useState(0);
//   const [userInfo, setUserInfo] = useState('');

//   useEffect(() => {
//     GoogleSignin.configure({
//       scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
//       webClientId:
//         '331197279508-rd6p5ssin24ck1slv624o1lvqoaqlv29.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
//       offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//       hostedDomain: '', // specifies a hosted domain restriction
//       loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
//       forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
//       accountName: '', // [Android] specifies an account name on the device that should be used
//       iosClientId:
//         '65195835094-0rgi3ogiu25oncr7gu784fqp4gq9o6kb.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
//     });
//   }, []);

//   const signIn = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       setUserInfo({userInfo});
//       // this.setState({userInfo});
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         // user cancelled the login flow
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         // operation (f.e. sign in) is in progress already
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         // play services not available or outdated
//       } else {
//         // some other error happened
//       }
//     }
//   };
//   return (
//     <>
//       <SafeAreaView style={styles.container}>
//         {/* <RadioForm
//           radio_props={radio_props}
//           initial={value}
//           onPress={(val) => {
//             setValue(val);
//           }}
//         />
//         <Text style={styles.text1}>Current Value: {value}</Text> */}
//         <GoogleSigninButton
//           style={{width: 192, height: 48}}
//           size={GoogleSigninButton.Size.Wide}
//           color={GoogleSigninButton.Color.Dark}
//           onPress={signIn}
//           disabled={false}
//         />
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text1: {
//     marginTop: 20,
//   },
// });

// export default App;
