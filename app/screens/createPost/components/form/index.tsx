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
import {usePostForm} from './usePostForm';

const CreatePostForm = () => {
  const {openPicker, uri, removeIcon} = usePostForm();

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
            <TouchableOpacity disabled={!!uri} onPress={openPicker}>
              <FastImage source={{uri: uri}} style={styles.image}>
                {uri ? (
                  <Icon.CloseCircleIcon
                    style={styles.close}
                    action={removeIcon}
                  />
                ) : (
                  <Icon.AddIcon />
                )}
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
