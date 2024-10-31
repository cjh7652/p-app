import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from "antd";
import { API_URL } from "../config/constants";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAccessToken } from './AccessTokenContext';
import './login.scss';

const Login = () => {
    const navigate = useNavigate();
    const { setAccessToken } = useAccessToken(); // Context의 setAccessToken 사용
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const result = await axios.post(`${API_URL}/users/login`, {
                user_id: values.user_id,
                pw: values.password,
            });

            if (result.data.user === values.user_id) {
                alert("로그인이 성공했습니다.");
                // accessToken을 Context와 localStorage에 저장
                setAccessToken(result.data.accessToken);
                localStorage.setItem('accessToken', result.data.accessToken);
                navigate('/'); // 메인 화면으로 이동
            } else {
                alert("로그인 정보를 다시 확인해주세요");
            }
        } catch (error) {
            console.error("Login failed", error);
            alert("로그인 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
        } finally {
            setLoading(false);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className='loginWrap'>
            <h1>로그인</h1>
            <div className="loginBox">
                <Form name='basic' onFinish={onFinish} onFinishFailed={onFinishFailed}>
                    <Form.Item 
                        label="아이디" 
                        name="user_id" 
                        rules={[{ required: true, message: "Please input your username!" }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item 
                        label="비밀번호" 
                        name="password" 
                        rules={[{ required: true, message: "Please input your password!" }]}>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item 
                        name="remember" 
                        valuePropName='checked' 
                        wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>아이디 저장</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType='submit' loading={loading}>
                            로그인
                        </Button>
                    </Form.Item>
                </Form>	
            </div>
        </div>
    );
};

export default Login;
