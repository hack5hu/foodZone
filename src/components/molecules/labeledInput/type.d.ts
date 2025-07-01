import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

export interface Props {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  secureTextEntry?: boolean;
  error?: boolean;
  errorMessage?: string;
}