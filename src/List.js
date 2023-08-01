import React, { Component } from 'react'

export class List extends Component {
    constructor(){
        super();
        this.state = {
            fname : "james" , age :25, arr : [2,3,4,5,6,7,8,9,10]
        }
    }

    updateNum = (index) => {
      const arrnum = this.state.arr.map((item, i) =>
        index === i ? item * 2 : item
      );
      console.log(arrnum);
      this.setState({ arr: arrnum });
    };

  render() {
    return (
      <div>{this.state.fname}{this.state.age}
      
        <button onClick={()=>this.setState({fname:"durai"})}>Update Name</button>
        <button onClick={()=>this.setState({age:26})}>Update Age</button>
        {this.state.arr.map((cv,index)=>(<div key={index}><h1>{cv}</h1>
        <button onClick={() => this.updateNum(index)}>
                update numbers
               </button>
        </div>
        
        ))}
      
      
      
      </div>
    )
  }
}

export default List


// {/* <div>
//           {/* arr:{this.state.arr} */}
//           {this.state.arr.map((item, index) => (
//             <div key={index}>
//               <p>{item}</p>
//               <button onClick={() => this.updateNum(index)}>
//                 update numbers
//               </button>
//             </div>
//           ))}
//         </div> */}