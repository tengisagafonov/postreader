import React from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {PostType} from 'types/post';
import {styles, statusText, status} from './styles';

const defaultImg = require('assets/images/default.png');

const PostItem = ({item}: {item: PostType}) => {
  return (
    <View style={styles.main}>
      <View style={styles.row}>
        <FastImage
          style={styles.img}
          resizeMode={'cover'}
          source={item.url ? {uri: item.url} : defaultImg}
        />
        <View style={styles.info}>
          <Text style={styles.title}>Mobile development</Text>
          <View style={styles.row}>
            <Text style={[styles.date, styles.dateLabel]}>Created at: </Text>
            <Text style={styles.date}>08/01/22 08:38 pm</Text>
          </View>
          <View style={status(item.status)}>
            <Text style={statusText(item.status)}>{item.status}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.description} numberOfLines={2} ellipsizeMode={'tail'}>
        Hey there, I’d like to talk about mobile development CI/CD processes and
        tooling. What are your thoughts on that?
      </Text>
    </View>
  );
};

export default PostItem;
