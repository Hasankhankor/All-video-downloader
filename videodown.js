import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Clipboard,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import axios from 'axios';

const VideoDownloaderScreen = () => {
  const [downloadedFilePath, setDownloadedFilePath] = useState(null);
  const [videoImage, setVideoImage] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [url, setUrl] = useState('');
  const [selectedResolution, setSelectedResolution] = useState('720p');

  const generateUniqueFilename = () => {
    const timestamp = new Date().getTime();
    const randomString = Math.random().toString(36).substring(7);
    return `downloaded-video-${timestamp}-${randomString}.mp4`;
  };

  const handlePaste = async () => {
    const content = await Clipboard.getString();
    setUrl(content);
  };

  const downloadFile = async () => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();

      if (status !== 'granted') {
        throw new Error('Media library permission not granted');
      }

      const apiUrl = `https://loadify.madrasvalley.com/api/yt/download/video/mp4?url=${url}&video_quality=${selectedResolution}`;
      const uniqueFilename = generateUniqueFilename();
      const fileUri = `${FileSystem.documentDirectory}${uniqueFilename}`;

      const { uri } = await FileSystem.downloadAsync(apiUrl, fileUri);

      const asset = await MediaLibrary.createAssetAsync(uri);
      setDownloadedFilePath(asset.uri);
      console.log('File downloaded to:', asset.uri);

    } catch (error) {
      console.error('Error downloading or saving file:', error);
    }
  };

  const getVideosDetails = async () => {
    try {
      const res = await axios.get(`https://loadify.madrasvalley.com/api/yt/details?url=${url}`);
      if (res.data.title) {
        setVideoTitle(res.data.title);
      }
      if (res.data.thumbnails && res.data.thumbnails[0] && res.data.thumbnails[0].url) {
        setVideoImage(res.data.thumbnails[0].url);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (url) {
      getVideosDetails();
    }
  }, [url]);

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
      <Image style={styles.thumbnail} source={{ uri: videoImage }} />
      <Text style={styles.videoCaption}>{videoTitle}</Text>
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Select the resolution to download</Text>
        <Picker
          selectedValue={selectedResolution}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedResolution(itemValue)}
        >
          <Picker.Item label="144p" value="144p" />
          <Picker.Item label="240p" value="240p" />
          <Picker.Item label="360p" value="360p" />
          <Picker.Item label="480p" value="480p" />
          <Picker.Item label="720p" value="720p" />
          <Picker.Item label="1080p" value="1080p" />
        </Picker>
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#978AFF' }]}
        onPress={downloadFile}
      >
        <Text style={[styles.buttonText, { color: '#fff' }]}>Download</Text>
      </TouchableOpacity>
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
    marginTop: '60%',
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
    height: 30,
    width: '100%',
    borderRadius: 8,
  },
});

export default VideoDownloaderScreen;
