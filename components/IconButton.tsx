import React from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';

interface IconButtonProps {
  onPress: () => void;
  type?: string;
  icon: any;
  color?: string;
  size?: number;
}

const IconButton = ({
  icon,
  type = 'Ionicons',
  color = 'gray',
  size = 32,
  onPress,
}: IconButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => (pressed ? styles.pressedButton : null)}
    >
      <View style={styles.container}>
        {type === 'Ionicons' ? (
          <Ionicons name={icon} size={size} color={color} />
        ) : (
          <AntDesign name={icon} size={size} color={color} />
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressedButton: {
    opacity: 0.9,
  },
  container: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
});

export default IconButton;
