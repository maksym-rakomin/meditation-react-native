import {Text, TouchableOpacity} from "react-native";
import {FC} from "react";

interface Props {
  onPress: () => void;
  title: string;
  textStyle?: string;
  containerStyle?: string;
}

const CustomButton: FC<Props> = ({onPress, title, textStyle = '', containerStyle = ''}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`bg-white rounded-xl min-h-[62px] text-center justify-center p-2 items-center ${containerStyle}`}
      onPress={onPress}
    >
      <Text className={`font-semibold text-lg ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton