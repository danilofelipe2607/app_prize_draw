import React, {useState} from 'react';
import {
  Title,
  SubTitle,
  ContainerTerm,
  Link,
  ContainerRegister,
  ContainerButton,
} from './styles';
import {KeyboardAvoidingView} from '../css/styles';
import Input from '../components/TextInput';
import DateInput from '../components/DateInput';
import {Checkbox, Button} from 'react-native-paper';
import {Linking} from 'react-native';
import useRegister from './hook';

const Cadastrar: React.FC<{}> = (): JSX.Element => {
  const [show, setShow] = useState(false);
  const [checked, setChecked] = React.useState(false);
  const {control, handleSubmit, errors, Controller} = useRegister();

  const onSubmit = (data: any) => console.log(data, 'aquio danilo');
  const handleShow = () => setShow(!show);
  return (
    <KeyboardAvoidingView>
      <ContainerRegister>
        <Title> Criar conta</Title>
        <SubTitle> Preencha seus dados para criar conta no App!</SubTitle>
        <Controller
          name="nome"
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              label="Nome"
              left="account"
              mode="flat"
              onChangeText={onChange}
              placeholder="Nome completo"
              value={value}
              name="nome"
              errors={errors}
              errorText="Insira o nome completo"
              onBlur={onBlur}
              disabled={false}
              secureTextEntry={false}
              right={''}
              iconPress={undefined}
            />
          )}
        />

        <Controller
          name="dataNascimento"
          control={control}
          rules={{
            required: true,
          }}
          render={() => (
            <DateInput
              label="Data de Nascimento"
              left="email"
              mode="flat"
              placeholder="Data de nascimento"
              name="dataNascimento"
              errors={errors}
              errorText="Data de Nascimento  obrigatório"
              disabled={false}
              secureTextEntry={false}
              right={''}
              iconPress={undefined}
              onChangeText={undefined}
              onBlur={undefined}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              label="Email"
              left="email"
              mode="flat"
              onChangeText={onChange}
              placeholder="Email"
              value={value}
              name="email"
              errors={errors}
              errorText="Email obrigatório"
              onBlur={onBlur}
              disabled={false}
              secureTextEntry={false}
              right={''}
              iconPress={undefined}
            />
          )}
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="senha"
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              label="Senha"
              iconPress={handleShow}
              left=""
              mode="flat"
              onChangeText={onChange}
              placeholder="Senha"
              value={value}
              name="nome"
              errors={errors}
              errorText="Senha obrigatório"
              onBlur={onBlur}
              disabled={false}
              secureTextEntry={show ? false : true}
              right={show ? 'eye' : 'eye-off'}
            />
          )}
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="resenha"
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              label="Senha"
              mode="flat"
              onChangeText={onChange}
              placeholder="Confirme sua senha"
              value={value}
              name="resenha"
              errors={errors}
              errorText="Senha obrigatório"
              onBlur={onBlur}
              disabled={false}
              secureTextEntry={show ? false : true}
              right={show ? 'eye' : 'eye-off'}
              left={''}
              iconPress={handleShow}
            />
          )}
        />

        <ContainerTerm>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Link
            onPress={() => {
              Linking.openURL('https://reactnative.dev');
            }}>
            Aceite os termos && condições
          </Link>
        </ContainerTerm>
        {/* <ContainerButton>
          <Button
            onPress={handleSubmit(onSubmit)}
            mode="contained"
            // eslint-disable-next-line react-native/no-inline-styles
            style={{width: '90%'}}>
            Registre-se
          </Button>{' '}
        </ContainerButton> */}
      </ContainerRegister>
    </KeyboardAvoidingView>
  );
};

export default Cadastrar;
