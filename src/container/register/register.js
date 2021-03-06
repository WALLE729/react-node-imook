import React from 'react'
import Logo from './../../component/logo/logo'
import {List, InputItem, Radio, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {register} from '../../redux/user.redux'

@connect(
    state=>state.user,
    {register}
)
class Register extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            user:'',
            pwd:'',
            repeatpwd:'',
            type: 'genius'
        }
        this.handleRegsiter = this.handleRegsiter.bind(this)
    }
    handleChange(key, val){
        this.setState({
            [key]:val
        })
    }
    handleRegsiter(){
        console.log(this.state)
        this.props.register(this.state)
    }
    render() {
        const RadioItem = Radio.RadioItem
        return (
            <div>
                <Logo></Logo>
                <h2>注册页面</h2>
                <List>
                    {this.props.msg?<p>{this.props.msg}</p>:"success"}
                    <InputItem
                        onChange={v => this.handleChange('user', v)}
                    >用户</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <InputItem
                        type='password'
                        onChange={v => this.handleChange('pwd', v)}
                    >密码</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <InputItem
                        type='password'
                        onChange={v => this.handleChange('repeatpwd', v)}
                    >确认密码</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <RadioItem 
                        checked={ this.state.type === 'genius'}
                        onChange = {() => this.handleChange('type','genius')}
                    >
                     牛人
                     </RadioItem>
                     <WhiteSpace></WhiteSpace>
                    <RadioItem checked={ this.state.type ==='boss'}
                        onChange = {() => this.handleChange('type','boss')}
                    >
                     BOSS
                    </RadioItem>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary" onClick={this.handleRegsiter}> 注册 </Button>
                </List>
            </div>
        )
    }
}
export default Register