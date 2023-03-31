import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';

interface ActionButtonProps {
  title?: string;
  icon?: IconProps;
  color?: string;
  backgroundColor: string;
  onPress: () => void;
}

interface IconProps {
  name: any;
  size: number;
  color: string;
}

const ActionButton = ({
  title,
  icon,
  color,
  backgroundColor,
  onPress,
}: ActionButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => (pressed ? styles.pressed : null)}
      onPress={onPress}
    >
      <View style={[styles.container, { backgroundColor }]}>
        {title && <Text style={[styles.text, { color }]}>{title}</Text>}
        {icon && (
          <View style={styles.icon}>
            <AntDesign name={icon.name} size={icon.size} color={icon.color} />
          </View>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.85,
  },
  container: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  icon: {
    padding: 15,
  },
});

export default ActionButton;