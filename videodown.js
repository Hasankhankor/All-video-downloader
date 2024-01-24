import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView, Clipboard } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import BottomNavigationBar from './BottomNavigationBar';

const VideoDownloaderScreen = () => {
  const [url, setUrl] = useState('');
  const [selectedResolution, setSelectedResolution] = useState('720p');

  const handleStartDownload = () => {
    alert(`Start download: URL - ${url}, Resolution - ${selectedResolution}`);
  };

  const handleDownload = () => {
    alert(`Downloading: URL - ${url}, Resolution - ${selectedResolution}`);
  };

  const handlePaste = async () => {
    const content = await Clipboard.getString();
    setUrl(content);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>ALL Video Downloader</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setUrl}
          value={url}
          placeholder="Enter video URL"
        />
        <TouchableOpacity style={styles.pasteButton} onPress={handlePaste}>
          <Text style={[styles.buttonText, { color: '#fff' }]}>Paste</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#978AFF' }]} onPress={handleStartDownload}>
        <Text style={[styles.buttonText, { color: '#fff' }]}>Start</Text>
      </TouchableOpacity>
      <Image
        style={styles.thumbnail}
        source={{ uri: 'https://media.npr.org/assets/img/2022/11/16/_dsc0632-imran-khan_edit-78d8939584566e16ab97e43e8254bf8a1ed9645f.jpg' }}
      />
      <Text style={styles.videoCaption}>PM Imran Khan embarrasses Pakistan, accused of secretly selling official gifts including a $1m watch</Text>
      <Text style={styles.videoDuration}>Duration 45:17</Text>
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Select the resolution to download</Text>
        <Picker
          selectedValue={selectedResolution}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedResolution(itemValue)}
        >
          <Picker.Item label="144p" value="144p" />
          <Picker.Item label="240p" value="240p" />
          <Picker.Item label="360p" value="360p" />
          <Picker.Item label="480p" value="480p" />
          <Picker.Item label="720p" value="720p" />
          <Picker.Item label="1080p" value="1080p" />
        </Picker>
      </View>
      <TouchableOpacity style={[styles.downloadButton, { backgroundColor: '#978AFF' }]} onPress={handleDownload}>
        <Text style={[styles.buttonText, { color: '#fff' }]}>Download</Text>
      </TouchableOpacity>
      {/* Insert BottomNavigationBar component here */}

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerLink}>
          <Text style={styles.footerLinkText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerLink}>
          <Text style={styles.footerLinkText}>Download</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerLink}>
          <Text style={styles.footerLinkText}>YouTube</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-around',
    borderTopWidth: 5,
    borderTopColor: '#978AFF',
    paddingVertical: 10,
    marginTop:"60%"

  },
  footerLink: {
    paddingHorizontal: 40,
  },
  footerLinkText: {
    fontSize: 16,
    color: '#333',
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '70%',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  pasteButton: {
    backgroundColor: '#978AFF',
    width: '25%',
    marginLeft: 10,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  button: {
    width: '40%',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
  },
  thumbnail: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  videoCaption: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  videoDuration: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
  },
  pickerContainer: {
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#978AFF',
    padding: 10,
  },
  pickerLabel: {
    fontSize: 16,
    marginBottom: -10,
    color: '#333',
  },
  picker: {
    height: 30,  // Adjust the height as needed
    width: '100%',
    borderRadius: 8,
  },

  downloadButton: {
    width: '40%',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
});

export default VideoDownloaderScreen;
