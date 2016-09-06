import React from 'react'

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tit:"",
            age:0,
            school:"",
            sex:true
        }
        this._handleOntitChange=this._handleOntitChange.bind(this)
        this._handleOnageChange=this._handleOnageChange.bind(this)
    }

    _handleOntitChange(e){
        this.setState({
            tit:e.target.value
        })
    }

    _handleOnageChange(e){
        this.setState({
            age:e.target.value
        })
    }
    render(){
        // console.log(this.props)
        return (
            <div>
                <h1>测试</h1>
                <from>
                    <input type="text" value={this.state.tit} placeholder="title" onChange={this._handleOntitChange}/>
                    <br/>
                    <input type="text" value={this.state.age} placeholder="age"/>
                    <br/>
                    <input type="text" value={this.state.school} placeholder="school"/>
                    <br/>
                    <input type="radio" checked={this.state.sex} value="man"/>man
                    <input type="radio" checked={this.state.sex} value="women" />women
                    <br/>
                    <input type="submit" />
                </from>

                <ul>
                    {
                        this.props.info.map(function(item,index){
                            return (
                                <li key={index}>
                                    <h3>{item.title}</h3>
                                    <strong>{item.age}</strong>
                                    <h4>school: {item.school}</h4>
                                    <span>sex: {item.sex}</span>

                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Header
