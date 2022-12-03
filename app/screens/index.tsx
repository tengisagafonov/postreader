import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Posts from 'screens/posts';
import CreatePost from 'screens/createPost';
import {RootStackParams} from 'constants/routes';

type RootStackList = {
  [RootStackParams.Posts]: undefined;
  [RootStackParams.CreatePost]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name={RootStackParams.Posts} component={Posts} />
        <RootStack.Screen
          name={RootStackParams.CreatePost}
          component={CreatePost}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
