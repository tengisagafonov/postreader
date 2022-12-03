import React, {FC} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PostItem from 'app/screens/posts/components/postItem';
import HomeHeader from './components/homeHeader';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackList} from 'app/screens';
import {RootStackParams} from 'constants/routes';
import {PostType, Status} from 'types/post';

const data: PostType[] = [
  {
    id: '1',
    title: 'solo',
    date: '',
    status: Status.Published,
    url: '',
    description: '',
  },
  {
    id: '2',
    title: 'twxx',
    date: '',
    status: Status.Draft,
    url: '',
    description: '',
  },
  {
    id: '3',
    title: 'ts',
    date: '',
    status: Status.Draft,
    url: '',
    description: '',
  },
  {
    id: '4',
    title: 'dt',
    date: '',
    status: Status.Draft,
    url: '',
    description: '',
  },
];

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
