var stateRecordMixin={
    componentWillMount:function(){
        this.oldStates=[];
    },
    componentWillUpdate:function(nextProp,nextState){
        this.oldStates.push(nextState);
    },
    previousState:function(){
        var index=this.oldStates.length-1;
        return index == -1 ? {} : this.oldStates[index];
    }
}
// 组件
var MessageBox=React.createClass({
    mixins:[stateRecordMixin],
    getInitialState:function(){
        return {
            count:0,
        }
    },
    doUpdate:function(){
        this.setState({
            count:this.state.count+1,
        });
        console.log('上一次的计数是'+this.previousState().count);
    },
    render:function(){
        console.log('开始渲染');
        var className='div1';
        return (
            <div className={className}>
                <h1>计数：{this.state.count}</h1>
                <button onClick={this.doUpdate} className="btn">手动更新组件（包括子组件）</button>
                <SubMessage count={this.state.count}/>
            </div>
        );
    }
});
var SubMessage=React.createClass({
    mixins:[stateRecordMixin],
    getInitialState:function(){
        return {
            cont:0,
        }
    },
    componentWillReceiveProps:function(nextProp){
        this.setState({
            count:this.props.count *2,
        });
    },
    render:function(){
        console.log('上一次子组件的计数是'+this.previousState().count);
        return (
            <h3>当前子组件计数是：{this.state.count}</h3>
        )
    }
});

var messageBox=ReactDOM.render(<MessageBox/>,
    document.getElementById('app'),function(){
        console.log('渲染完成了！');
    });
    // console.log(messageBox);
