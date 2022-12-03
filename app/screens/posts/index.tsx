import React from 'react';
import {View, FlatList} from 'react-native';
import Header from 'app/components/header';
import PostItem from 'app/screens/posts/components';

const data = [{id: 1, title: '', createdDate: '', status: 'Draft'}];

const Posts = () => {
  return (
    <View>
      <Header />
      <FlatList data={data} renderItem={PostItem} />
    </View>
  );
};

export default Posts;
