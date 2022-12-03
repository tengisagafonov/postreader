import React, {FC} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PostItem from 'app/screens/posts/components/postItem';
import HomeHeader from './components/homeHeader';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackList} from 'app/screens';
import {RootStackParams} from 'constants/routes';
import {Colors, fontSize, spacing} from 'config/Theme';
import {useSelector} from 'react-redux';
import {RootState} from 'store/rootReducer';

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
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={PostItem}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(RootStackParams.CreatePost)}>
          <Text style={styles.text}>New Post</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1},
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

export default Posts;
