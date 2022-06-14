import {useForm, Controller} from 'react-hook-form';

const useRegister = () => {
  // const newColorTheme = {
  //   brand: {
  //     900: '#8287af',
  //     800: '#7c83db',
  //     700: '#b3bef6',
  //   },
  // };
  // const theme = extendTheme({colors: newColorTheme});

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      nome: '',
      dataNascimento: '',
      email: '',
      senha: '',
      resenha: '',
    },
  });

  const verifyName = () => {
    return true;
  };

  return {control, handleSubmit, errors, Controller};
};

export default useRegister;
