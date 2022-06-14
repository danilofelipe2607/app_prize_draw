import React from 'react';
import {ContainerInput} from '../../css/styles';
import {ErrorText} from './styles';
import {TextInput} from 'react-native-paper';

type Props = {
  label: string;
  left: string;
  right: string;
  name: string;
  errors: any;
  errorText: string;
  disabled: boolean;
  mode: any;
  onChangeText: any;
  placeholder: string;
  value: string;
  onBlur: any;
  secureTextEntry: boolean;
  iconPress: any;
};

const Input = (props: Props): JSX.Element => {
  const {
    label,
    left,
    right,
    name,
    errors,
    errorText,
    disabled,
    mode,
    onChangeText,
    placeholder,
    value,
    onBlur,
    secureTextEntry,
    iconPress,
  } = props;

  return (
    <ContainerInput>
      <TextInput
        left={left && <TextInput.Icon name={left} />}
        right={right && <TextInput.Icon name={right} onPress={iconPress} />}
        label={label}
        mode={mode}
        disabled={disabled || false}
        placeholder={placeholder}
        error={errors[name]}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        secureTextEntry={secureTextEntry || false}
      />
      {errors[name] && <ErrorText>{errorText}</ErrorText>}
    </ContainerInput>
  );
};

export default Input;
