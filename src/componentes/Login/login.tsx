import React, { FC } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import {LoginFormDataType} from '../../utilits/MyType'


type PropsType = {
    login: (FormData: LoginFormDataType) => void 
}

const FormLogin: FC<InjectedFormProps<LoginFormDataType>>= (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name={'email'} placeholder={'Login'}/>
            </div>
            <div>
                <Field component={'input'} name={'password'} placeholder={'Password'}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>
            <button>Войти</button>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormDataType>({form: 'login'})(FormLogin)


const Login: React.FC<PropsType> = ({login}) => {
    const onSubmit = (FormData: LoginFormDataType) => {
        login(FormData)
    }
    return (
        <div>
            <h1>Регистрация</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login