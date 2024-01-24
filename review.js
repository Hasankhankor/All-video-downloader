import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Rating } from 'react-native-ratings'; // Import rating library

const ReviewScreen = () => {
  const [rating, setRating] = useState(0); // State variable for rating
  const [userInput, setUserInput] = useState(''); // State variable for user input

  const handleSendFeedback = () => {
    // Handle the send feedback action, you can use the 'userInput' and 'rating' states here
    console.log('User Input:', userInput);
    console.log('Rating:', rating);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Text style={styles.headerTitle}>Your Opinion Matters to Us!</Text>

      {/* Body */}
      <View style={styles.body}>
        <Text style={styles.subTitle}>
          Tell us how was your experience with Status Up app?
        </Text>


        {/* User Input */}
        <TextInput
          style={styles.userInput}
          placeholder="Enter your feedback here..."
          onChangeText={(text) => setUserInput(text)}
          value={userInput}
          multiline
        />
      </View>
      <Rating
          // Pass state variable and function to update it
          rating={rating}
          onRatingChange={setRating}
          // Customize your rating options
          style={styles.rating}
          stars={5}
          images={starIconArray} // Optional: customize star icons
        />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.sendButton} onPress={handleSendFeedback}>
          <Text style={styles.buttonText}>Send Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.laterButton} onPress={() => { /* Handle 'Later' button press */ }}>
          <Text style={styles.buttonText}>Later</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerLink}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerLink}>
          <Text>Whatsapp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerLink}>
          <Text>Downloads</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  body: {
    width: '100%',
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  rating: {
    paddingBottom: 20,
  },
  userInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    width: '100%',
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  sendButton: {
    backgroundColor: '#978AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  laterButton: {
    backgroundColor: '#978AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft:5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#999',
    paddingVertical: 10,
  },
  footerLink: {
    paddingHorizontal: 40,
  },
});

// Optionally, define custom star icons for the Rating component
const starIconArray = [
  require('./assets/emptyStar.png'),
  require('./assets/filledStar.png'),
];

export default ReviewScreen;
