import React, {Component, Fragment} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import NavTabs from "../../component/common/Nav";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import GDSEButton from "../../component/common/Button";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";

class Customer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            top100Films: [
                { label: 'Male' },
                { label: 'Female' }

            ],
            row:[
                {name:''},
                {gender:''},
                {address:''},
                {contact:''}
            ]
        }

    }
    createData(name, gender, address, contact){
        return { name, gender, address, contact }
    }
    addData(){
        this.setState()
    }

    render() {
        const {classes}=this.props;
        const rows = [
            this.createData(this.state.row.name,this.state.row.gender,this.state.row.address,this.state.row.contact),

        ];
        return(

                <div className={classes.container}>
                    <NavTabs/>
                    <div className={classes.form}  >
                        <div className={classes.formFeild} >
                            <TextField
                                id="outlined-basic"
                                placeHolder="Name"
                                label="Customer name"
                                variant="outlined"
                                size="small"
                                style={{width: '50%'}}
                                onChange={(e)=>{
                                    console.log(e.target.value)
                                    let row=this.state.row
                                    row.name=e.target.value
                                    this.setState({row})
                                }}
                            />

                        </div>
                        <div className={classes.formFeild} >
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={this.state.top100Films}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Gender" />}
                                getOptionLabel={
                                    (option) => option.label
                                }
                                onChange={(e, value) => {
                                    console.log(value.label);
                                    let row=this.state.row
                                    row.gender=value.label
                                    this.setState({row})
                                }}
                                size="small"
                                style={{ width: '50%' }}
                            />
                        </div>
                    </div>
                    <div className={classes.form}>
                        <div className={classes.formFeild}>
                            <TextField
                                id="outlined-basic"
                                placeHolder="Address"
                                label="Customer address"
                                variant="outlined"
                                size="small"
                                style={{width: '50%'}}
                                onChange={(e)=>{
                                    console.log(e.target.value)
                                    let row=this.state.row
                                    row.address=e.target.value
                                    this.setState({row})
                                }}
                            />

                        </div>
                        <div className={classes.formFeild} >
                            <TextField
                                id="outlined-basic"
                                placeHolder="Contact"
                                label="Customer contact"
                                variant="outlined"
                                size="small"
                                style={{width: '50%'}}
                                onChange={(e)=>{
                                    console.log(e.target.value)
                                    let row=this.state.row
                                    row.contact=e.target.value
                                    this.setState({row})
                                }}
                            />

                        </div>
                    </div>
                    <div className={classes.form} >
                        <div className={classes.formFeild} >

                        </div>
                        <div className={classes.formFeild}>
                            <GDSEButton
                                size="medium"
                                color={'error'}
                                variant="contained"
                                label="clear"
                                onClick={()=>{
                                    this.addData();

                                }}
                            />
                            <div style={{width:'20px'}}>

                            </div>

                            <GDSEButton
                                size="medium"
                                color={'success'}
                                variant="contained"
                                label="save"
                            />

                        </div>
                    </div>

                    <div className={classes.table}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Customer Name</TableCell>
                                        <TableCell align="right">Customer Gender</TableCell>
                                        <TableCell align="right">Customer Address</TableCell>
                                        <TableCell align="right">Customer Contact</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.gender}</TableCell>
                                            <TableCell align="right">{row.address}</TableCell>
                                            <TableCell align="right">{row.contact}</TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>




        )
    }

}
export default withStyles(styleSheet) (Customer)