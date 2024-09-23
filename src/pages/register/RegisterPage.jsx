import { Button, Checkbox, Form, Input, Space, Select, List, Typography  } from 'antd';
import { Block } from '../../shared/ui/Block';

const { Option } = Select;

const data = [
    'Отслеживание заказов на персональной странице',
    'Возможность настроить магазин под себя для более удобных покупок',
    'Ускоренное оформление последующих заказов',
  ];

export const RegisterPage = () => {

    const onFinish = (values) => {
        console.log('Success:', values.firsName);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Block className={'my-8'}>
            <div className='grid md:grid-cols-2 gap-10'>

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
                        <Space style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                            <Form.Item
                                label="Имя"
                                name="firsName"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Пожалуйста введите имя!',
                                    },
                                ]}
                            >
                                <Input type="name"/>
                            </Form.Item>

                            <Form.Item
                                label="Фамилия"
                                name="lastName"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Пожалуйста введите фамилию!',
                                    },
                                ]}
                            >
                                <Input type="name"/>
                            </Form.Item>
                        </Space>

                        <Form.Item
                            name="phone"
                            label="Телефон"
                            rules={[
                            {
                                required: true,
                                message: 'Пожалуйста введите номер телефона!',
                            },
                            ]}
                        >
                            <Input type='number'/>
                        </Form.Item>
                        
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
                            label="Пароль"
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
                            label="Подтверждение пароля"
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

                        <Form.Item>
                            <Button size='large' type="primary" htmlType="submit">
                                Регистрация
                            </Button>
                        </Form.Item>
                        
                    </Form>
                </div>

                <div>
                    <p className="text-xl font-medium opacity-80 mb-5">Преимущества зарегистрированного пользователя:</p>
                    <List
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item>
                            - {item}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        </Block>
    )
}