import {useState} from 'react';
import { UserOutlined,EyeInvisibleOutlined, EyeTwoTone, KeyOutlined} from '@ant-design/icons';
import { Input, Button } from 'antd';

const Form = ({title, handleClick}) =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    return(

        <div className='data__input'>
            <Input className='login__input' size="default size"  prefix={<UserOutlined />} 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            placeholder = 'email'
            />
            <Input.Password className="password__input" prefix={<KeyOutlined />}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder = 'password'
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
            <Button className="buttons__auth" onClick={() => handleClick(email, pass)} type="primary">{title}</Button>
        </div>
    )
}
export {Form}