import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import Header from '../components/Header'
import { getList } from '../actions'
class App extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        this.props.getList()
    }

    render(){
        // console.log(this.props.infoList)
        return (
            <div>
                <Header info={this.props.infoList}/>
            </div>
        )
    }
}

function mapStateToProps(store){
    return {
        infoList:store.infoList
    }
}
// 此处导出connenct方法链接后产生的智能组件
export default connect(mapStateToProps,{getList})(App)
