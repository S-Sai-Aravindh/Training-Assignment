import React , {Component} from 'react';

class CountComp extends Component {
    constructor(){
        super();
        this.state={
            countno : 0
        }
    }

    changepluscount = () => {
        this.setState((prevstate)=>({countno : prevstate.countno + 1}));
    }

    changeminuscount = () => {
        this.setState((prevstate)=>({countno : prevstate.countno - 1}));
    }

    changeresetcount = () => {
        this.setState(()=>({countno : 0}));
    }

    render(){
        return(
            <div className='box'>
                <form>
                <h1 className='Headtitle'>This is my Count Component</h1>
                <h1 className='title2'>Count : {this.state.countno}</h1>
                <div className='buttonsect'>
                    <button type='button' onClick={()=>this.changepluscount()} className='buttons'>Count +</button>
                    <button type='button' onClick={()=>this.changeminuscount()} className='buttons'>Count -</button>
                    <button type='button' onClick={()=>this.changeresetcount()} className='buttons'>Reset</button>
                </div>
                </form>
            </div>
        );
    }
}

export default CountComp;