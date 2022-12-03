import React, {FC} from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity, Text} from 'react-native';
import PostItem from 'app/screens/posts/components/postItem';
import HomeHeader from './components/homeHeader';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackList} from 'app/screens';
import {RootStackParams} from 'constants/routes';

const data = [{id: 1, title: '', createdDate: '', status: 'Draft', url: ''}];

const Posts: FC<
  NativeStackScreenProps<RootStackList, RootStackParams.Posts>
> = props => {
  const {navigation} = props;
  return (
    <View style={styles.main}>
      <HomeHeader />
      <FlatList data={data} renderItem={PostItem} />
      <TouchableOpacity
        onPress={() => navigation.navigate(RootStackParams.CreatePost)}>
        <Text>Create</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1},
});

export default Posts;
