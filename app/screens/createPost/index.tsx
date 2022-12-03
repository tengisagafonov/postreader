import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from 'app/components/header';
import CreatePostForm from 'app/screens/createPost/components/form';

const CreatePost = () => {
  return (
    <View style={styles.main}>
      <Header title={'Create new post'} />
      <CreatePostForm />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1},
});

export default CreatePost;
