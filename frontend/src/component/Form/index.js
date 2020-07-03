import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { createUser } from '../../service/user';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

export function FormInsert({ fetchListUser }) {
    const onFinish = values => {
        console.log('Success:', values);
        createUser({ ...values }).then(() => fetchListUser());
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            {...layout}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Name"
                name="name"
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Age"
                name="age"
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Address"
                name="address"
            >
                <Input />
            </Form.Item>


            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};