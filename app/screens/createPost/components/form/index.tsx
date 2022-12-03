import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Icon} from 'assets/icons';
import {Colors, fontSize, spacing} from 'config/Theme';

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

const styles = StyleSheet.create({
  main: {flex: 1},
  form: {
    marginTop: spacing.small,
    backgroundColor: Colors.white,
    paddingVertical: spacing.huge,
    paddingHorizontal: spacing.larger,
  },
  space: {marginTop: spacing.small, marginBottom: spacing.medium},
  input: {
    backgroundColor: Colors.background,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.input,
    borderRadius: 8,
  },
  photoPicker: {
    backgroundColor: Colors.white,
    marginTop: spacing.medium,
    paddingHorizontal: spacing.larger,
    paddingTop: spacing.larger,
    paddingBottom: spacing.huge,
  },
  photoTitle: {marginBottom: spacing.largerPlus, fontSize: fontSize.medium},
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: Colors.imgBackground,
  },
  close: {position: 'absolute', right: 0, top: 0},
  button: {
    backgroundColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: spacing.larger,
    borderRadius: 8,
    padding: spacing.medium,
  },
  text: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: fontSize.normalPlus,
    lineHeight: 20,
  },
});

export default CreatePostForm;
