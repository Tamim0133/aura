import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from "react-native";

// Define the props interface
interface CustomButtonProps {
  title: string;
  handlePress: () => void;
  containerStyles?: string; // Assuming you're using Tailwind CSS or a similar approach
  textStyles?: string; // Assuming you're using Tailwind CSS or a similar approach
  isLoading: boolean;
}

// Define the CustomButton component with typed props
const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  handlePress,
  containerStyles = '',
  textStyles = '',
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;