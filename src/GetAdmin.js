import Axios from 'axios'
import  React, { Component }  from 'react'

class GetAdmin extends Component{
    constructor(){
        super()
        this.state={
            admins:[]
        }
    
    }

    render(){
        return(
            <div>
                <h2>List of Admins:</h2>
                <table className="table table-dark table-bordered table-hover">
                    <tr><th>ADMIN ID</th><th>ADMIN NAME</th><th>ADMIN PIN</th><th>ADMIN PHONE</th></tr>
                   <tbody> {this.state.admins.map(admin => <tr><td>{admin.adminId}</td><td key={admin.adminId}>{admin.adminName}</td><td>{admin.adminPin}</td><td>{admin.adminPhone}</td></tr>)}</tbody></table>
                 </div>
        )
    }

    componentDidMount(){
        Axios.get('http://localhost:9000/admin-service/admin')
        .then(response => {
            this.setState({ admins : response.data })
            console.log(response);
        })
    }
}

export default GetAdmin