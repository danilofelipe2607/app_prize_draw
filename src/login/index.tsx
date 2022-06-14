import React, {useState} from 'react';
import {Text, Image} from 'react-native';
import {KeyboardAvoidingView, Container, Link} from '../css/styles';
import Input from '../components/TextInput';
import {useForm, Controller} from 'react-hook-form';
import {ContainerLogin, ContainerButton} from './styles';
import {Button} from 'react-native-paper';

const Login = ({navigation}) => {
  const [show, setShow] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: any) => console.log(data, 'aquio danilo');
  const handleShow = () => setShow(!show);

  return (
    <KeyboardAvoidingView>
      <ContainerLogin>
        <Image
          source={require('../assets/img/sorteio.png')}
          resizeMethod="auto"
        />
        <Controller
          name="email"
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              label={'Email'}
              left="email"
              right={''}
              name="email"
              errors={errors}
              errorText={'Email obrigatório'}
              disabled={false}
              mode="outlined"
              onChangeText={onChange}
              placeholder="Digite seu email"
              value={value}
              onBlur={onBlur}
              secureTextEntry={false}
              iconPress={undefined}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              label={'Senha'}
              name="password"
              errors={errors}
              errorText={'Email obrigatório'}
              disabled={false}
              mode="outlined"
              onChangeText={onChange}
              placeholder="Digite sua senha"
              value={value}
              onBlur={onBlur}
              secureTextEntry={show ? false : true}
              right={show ? 'eye' : 'eye-off'}
              left=""
              iconPress={handleShow}
            />
          )}
        />

        <ContainerButton>
          {' '}
          <Button onPress={handleSubmit(onSubmit)} mode="contained">
            Login{' '}
          </Button>{' '}
        </ContainerButton>
      </ContainerLogin>
      <Container>
        <Text>
          É novo?{' '}
          <Link onPress={() => navigation.navigate('Cadastro')}>
            {' '}
            Registre-se
          </Link>{' '}
        </Text>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Login;
