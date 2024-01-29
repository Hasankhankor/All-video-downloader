// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   Button,
//   FlatList,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   PermissionsAndroid,
// } from 'react-native';
// import RNFS from 'react-native-fs';

// const StatusSaverScreen = () => {
//   const [statuses, setStatuses] = useState([]);

//   useEffect(() => {
//     requestStoragePermission();
//   }, []);

//   const requestStoragePermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//         {
//           title: 'Storage Permission',
//           message: 'App needs access to your storage to save statuses.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         // Permission granted, you can now access storage
//         loadStatuses();
//       } else {
//         console.log('Storage permission denied.');
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   const loadStatuses = () => {
//     // Replace this with your logic to fetch WhatsApp statuses
//     // For example, you can read files from a specific directory where WhatsApp stores statuses
//     // This is a simplified example, and you need to adapt it to your use case
//     const statusDirectory = '/path/to/whatsapp/statuses'; // Change this to the actual directory
//     RNFS.readdir(statusDirectory)
//       .then((files) => {
//         setStatuses(files);
//       })
//       .catch((error) => {
//         console.error('Error loading statuses:', error);
//       });
//   };

//   const saveStatus = (statusName) => {
//     const statusPath = `/path/to/whatsapp/statuses/${statusName}`; // Change this to the actual directory
//     const destinationPath = `/path/to/your/storage/${statusName}`; // Change this to the desired storage location

//     RNFS.copyFile(statusPath, destinationPath)
//       .then(() => {
//         console.log('Status saved successfully.');
//       })
//       .catch((error) => {
//         console.error('Error saving status:', error);
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>WhatsApp Status Saver</Text>
//       <FlatList
//         data={statuses}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.statusItem}>
//             <Image
//               source={{ uri: `file://${item}` }}
//               style={styles.statusImage}
//             />
//             <TouchableOpacity
//               style={styles.saveButton}
//               onPress={() => saveStatus(item)}
//             >
//               <Text style={styles.saveButtonText}>Save</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   statusItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   statusImage: {
//     width: 100,
//     height: 100,
//     marginRight: 16,
//   },
//   saveButton: {
//     backgroundColor: '#4CAF50',
//     padding: 10,
//     borderRadius: 8,
//   },
//   saveButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default StatusSaverScreen;
