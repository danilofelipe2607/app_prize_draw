import React, {useState} from 'react';
import {ContainerInput} from '../../css/styles';
import {TextInput} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import {format} from 'date-fns';
import {ErrorText} from './styles';

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
  onBlur: any;
  secureTextEntry: boolean;
  iconPress: any;
};

const DateInput = (props: Props): JSX.Element => {
  const [date, setDate] = useState('');
  const [open, setOpen] = useState(false);
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
    onBlur,
    secureTextEntry,
    iconPress,
  } = props;

  const handleConfirm = (data: Date) => {
    setOpen(false);
    setDate(format(data, 'dd/MM/yyyy'));
  };

  const handleCancel = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <ContainerInput>
      <TextInput
        showSoftInputOnFocus={false}
        left={left && <TextInput.Icon name={left} />}
        right={right && <TextInput.Icon name={right} onPress={iconPress} />}
        label={label}
        mode={mode}
        disabled={disabled || false}
        placeholder={placeholder}
        error={errors[name] && !date}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={date}
        secureTextEntry={secureTextEntry || false}
        onFocus={handleOpen}
        onChange={handleOpen}
      />
      {errors[name] && !date && <ErrorText>{errorText}</ErrorText>}
      <DatePicker
        locale="pt"
        mode="date"
        title="Selecione sua Data de nascimento"
        confirmText="Confirma"
        cancelText="Cancela"
        modal
        open={open}
        date={new Date()}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </ContainerInput>
  );
};

export default DateInput;
