import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Icon} from 'assets/icons';
import {styles} from './styles';

const CreatePostForm = () => {
  return (
    <View style={styles.main}>
      <KeyboardAvoidingView
        style={styles.main}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.form}>
            <TextInput placeholder={'Title'} style={styles.input} />
            <TextInput
              placeholder={'Status'}
              style={[styles.input, styles.space]}
            />
            <TextInput placeholder={'Description'} style={styles.input} />
          </View>
          <View style={styles.photoPicker}>
            <Text style={styles.photoTitle}>Photo</Text>
            <TouchableOpacity>
              <FastImage source={{uri: ''}} style={styles.image}>
                <Icon.AddIcon />
                <Icon.CloseCircleIcon style={styles.close} />
              </FastImage>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <SafeAreaView>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default CreatePostForm;
