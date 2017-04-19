import React,{Component} from 'react'
import './UserDialog.css'

export default class UserDialog extends Component{
    render(){
        return (
            <div className="UserDialog-Wrapper">
              <div className="UserDialog">

                <nav>
                  <input type="radio"/>
                  <input type="radio"/>
                </nav>

                <div className="panes">

                  <from className="signUp">
                   <div className="row">
                     <label>用户名</label>
                     <input type="text"/>
                   </div>
                    <div className="row">
                     <label>密码</label>
                     <input type="password"/>
                   </div>
                   <div className="row actions">
                     <button type="submit">注册</button>
                   </div>
                  </from>

                  <form className="signIn">
                    <div className="row">
                      <label>用户名</label>
                      <input type="text"/>
                    </div>
                    <div className="row">
                     <label>密码</label>
                     <input type="password"/>
                   </div>
                   <div className="row actions">
                     <button type="submit">登录</button>
                   </div>
                  </form>

                </div>
              </div>           
            </div>
        )
    }
}