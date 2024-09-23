import { Link } from "react-router-dom";
import { Block } from "../../shared/ui/Block"
import { Button, Checkbox, Form, Input, } from 'antd';

export const LoginPage = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <Block className={'my-8'}>
            <p className="text-2xl font-medium opacity-80">Войти</p>
            <div className="grid grid-cols-2 mt-6 gap-12">
                <div>
                    <Form
                        name="basic"
                        layout="vertical"
                        initialValues={{
                        remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                            required: true,
                            message: 'Пожалуйста введите вашу почту!',
                            },
                        ]}
                        >
                        <Input type="email"/>
                        </Form.Item>

                        <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                            required: true,
                            message: 'Пожалуйста введите пароль!',
                            },
                        ]}
                        >
                            <Input.Password/>
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                        >
                        <Checkbox>Запомнить меня</Checkbox>
                        </Form.Item>

                        <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Отправить
                        </Button>
                        </Form.Item>
                    </Form>
                </div>
                
                <div>
                    <p className="text-xl font-medium opacity-80 mb-3">Не зарегистрированы?</p>
                    <p>Создание учетной записи займет не больше минуты.</p>
                    <Link to={'/register'} className="text-blue-600">Создать учетную запись</Link>
                </div>
            </div>
        </Block>
    )
}