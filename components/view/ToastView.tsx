import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import appStyles from '../../styles/appStyles';

const ToastView = () => {
  const config = {
    success: ({ text1 }: any) => (
      <View style={[styles.toast, styles.success]}>
        <Text style={styles.text}>{text1}</Text>
      </View>
    ),
    failure: ({ text1 }: any) => (
      <View style={[styles.toast, styles.failure]}>
        <Text style={styles.text}>{text1}</Text>
      </View>
    ),
  };
  return <Toast position="bottom" config={config} />;
};

const styles = StyleSheet.create({
  toast: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  success: {
    backgroundColor: appStyles.colors.darkGoldColor,
  },
  failure: {
    backgroundColor: appStyles.colors.redColor,
  },
  text: {
    fontWeight: 'bold',
    color: appStyles.colors.lightColor,
  },
});

export default ToastView;
