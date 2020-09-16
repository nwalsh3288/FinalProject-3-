import React, { Component } from 'react';


 
class Table extends Component {
    constructor(props){
        super(props)
        this.state = { 
            sortStatus: "asc",
            dataSort: [...this.props.tenants],
            input:""
         }
         console.log(this.props.tenants)
         this.inputChangeHandler = this.inputChangeHandler.bind(this)
    }
    
    

    // componentDidMount() {
    //     console.log(data)
    // }

    sorter = () => {
        this.state.dataSort.sort((a, b) => {
        if (a.name < b.name) {
          return this.state.sortStatus === "asc" ? -1 : 1;
        }
        if (a.name > b.name) {
            return this.state.sortStatus === "asc" ? 1 : -1;
        }
        return 0;
      });
      this.setState({sortStatus:this.state.sortStatus=== "asc" ? "desc": "asc"})
      this.setState({dataSort: this.state.dataSort})
    }

    inputChangeHandler(e){
        const newValue = e.target.value
        console.log(e.target.value)
        console.log(this.state.input+"pre-input set state")
        this.setState({
            input: newValue
        }
        
    ,() => this.finishFilter())}

    finishFilter(){
        console.log(this.state.input+"post-input set state")
        let newData = this.state.dataSort.filter((d)=>{
            console.log("new data function running")
            return this.state.input === "" || d.name.includes(this.state.input)
            
          });
          this.setState({
            dataSort: newData
        })
        console.log(this.state.dataSort)
        // try to reset the input
        if(this.state.input === ""){
            this.setState({dataSort:[...this.props.tenants]})
        }
    }

    render() { 
        return ( 
            <>
           <h3>Filter by Tenant</h3>
         
            <input type="text" value={this.state.input} onChange={(e) => this.inputChangeHandler(e)}/>
        <table> 
            <thead>
        <tr>
        <th onClick={this.sorter}>
        Name (Click Me to Sort)
        </th>
        <th>
        Unit
        </th>
        <th>
        Rent
        </th>
        </tr>
        </thead>
        <tbody>

        
        {
            this.state.dataSort.map(tenant=>(
                <tr key={tenant._id}> 
                <td>
                {tenant.name}
                </td>
                <td>
                {tenant.unit}
                </td>
                <td>
                {tenant.rent}
                </td>
                </tr> 
            ))
        }
        </tbody>
        </table>
          </> 
    )
}
}

 
export default Table;