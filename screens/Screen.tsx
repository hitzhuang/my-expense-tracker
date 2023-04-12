import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useSelector } from 'react-redux';
import LoadingView from '../components/view/LoadingView';

interface ScreenProps {
  style?: StyleProp<ViewStyle> | undefined;
  children?: React.ReactNode;
}

const Screen = ({ style, children }: ScreenProps) => {
  const loading = useSelector((state: any) => state.loading.active);
  return <View style={style}>{loading ? <LoadingView /> : children}</View>;
};

export default Screen;
