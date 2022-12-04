import ImagePicker from 'react-native-image-crop-picker';
import {useState} from 'react';
import {PostDimension} from 'constants/posts';
import {PostType} from 'types/post';
import {Status} from 'types/post';
import moment from 'moment';
import {DateFormat} from 'config/Format';
import {useDispatch} from 'react-redux';
import {Alert} from 'react-native';
import {addPost} from 'store/reduxes/post';

type PostFormType = Omit<PostType, 'status'> & {status: Status | undefined};

const initialState: PostFormType = {
  title: '',
  status: undefined,
  date: '',
  url: '',
  description: '',
};

export const usePostForm = () => {
  const [post, setPost] = useState<PostFormType>(initialState);
  const dispatch = useDispatch();

  const openPicker = () => {
    ImagePicker.openPicker({
      width: PostDimension.width,
      height: PostDimension.height,
      cropping: false,
    })
      .then(image => {
        setPost(prev => ({
          ...prev,
          ...({url: image.sourceURL} as PostFormType),
        }));
      })
      .catch(e => console.log(e));
  };

  const removeIcon = () => {
    setPost(prev => ({...prev, ...{url: ''}}));
  };

  const updatePostByAttribute = (attribute: keyof PostFormType) => {
    return (text: string) =>
      setPost(prev => ({...prev, ...({[attribute]: text} as PostFormType)}));
  };

  const onSubmit = () => {
    let result = {...post, ...{date: moment().format(DateFormat)}} as PostType;
    if (result.title === '' || result.status === undefined) {
      Alert.alert('error', 'Title and Status are required fields');
    } else {
      Alert.alert('success', 'new post successfully added');
      dispatch(addPost(result));
    }
  };

  return {openPicker, post, removeIcon, onSubmit, updatePostByAttribute};
};
