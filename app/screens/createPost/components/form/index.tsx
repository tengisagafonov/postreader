import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Icon} from 'assets/icons';
import {styles} from './styles';
import {usePostForm} from './usePostForm';
import {Colors} from 'config/Theme';
import Button from 'app/components/button';
import Dropdown from 'app/components/dropdown';
import {Status} from 'types/post';

const CreatePostForm = () => {
  const {openPicker, uri, removeIcon, onSubmit} = usePostForm();

  return (
    <View style={styles.main}>
      <KeyboardAvoidingView
        style={styles.main}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.form}>
            <TextInput
              placeholderTextColor={Colors.placeholder}
              placeholder={'Title'}
              style={styles.input}
            />
            <Dropdown placeholder={'Status'} data={Object.keys(Status)} />
            <TextInput
              placeholderTextColor={Colors.placeholder}
              placeholder={'Description'}
              style={styles.input}
              multiline
            />
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
        <Button title={'Submit'} onPress={onSubmit} />
      </KeyboardAvoidingView>
    </View>
  );
};

export default CreatePostForm;
