import React, {FC} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import PostItem from 'app/screens/posts/components/postItem';
import HomeHeader from './components/homeHeader';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackList} from 'app/screens';
import {RootStackParams} from 'constants/routes';
import {useSelector} from 'react-redux';
import {RootState} from 'store/rootReducer';
import Button from 'app/components/button';

const Posts: FC<
  NativeStackScreenProps<RootStackList, RootStackParams.Posts>
> = props => {
  const {navigation} = props;
  const data = useSelector((state: RootState) => state.post.posts);
  return (
    <View style={styles.main}>
      <HomeHeader />
      <SafeAreaView style={styles.main}>
        <FlatList
          keyExtractor={(item, idx) => item.title + idx}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={PostItem}
        />
        <Button
          title={'New Post'}
          onPress={() => navigation.navigate(RootStackParams.CreatePost)}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1},
});

export default Posts;
