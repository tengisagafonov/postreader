import React from 'react';
import {create} from 'react-test-renderer';
import PostItem from 'app/screens/posts/components/postItem';
import {PostType, Status} from 'types/post';

const testItem: PostType = {
  title: 'text',
  status: Status.Published,
  url: '',
  description: '',
  date: '',
};

test('renders correctyl', () => {
  const tree = create(<PostItem item={testItem} />).toJSON();
  expect(tree).toMatchSnapshot();
});
