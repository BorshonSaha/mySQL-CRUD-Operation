import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { useHistory } from "react-router";

const StudentTable = () => {

    const [student, setStudent] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setStudent(data))
    }, [])

    let history = useHistory();

    const gotoAddStudent = () => {
        history.push("/addNewStudent");
    }

    const deleteStudent = (id) => {
        axios.delete(`http://localhost:5000/deleteStudent/${id}`)
        history.go(0);
    }

    const gotoUpdateStudent = () => {
        history.push('/updateStudent');
    }

    return (
        <Container className='App'>
            <Table className='mt-5' striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>CGPA</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map(data => <tr> <td>{data.ID}</td> <td>{data.Name}</td> <td>{data.Address}</td> <td>{data.CGPA} </td> <td> <Button onClick={() => deleteStudent(data.ID)} variant="danger">Delete</Button></td> </tr>)
                    }
                </tbody>
            </Table>
            <div className="mt-5">
                <Button onClick={gotoAddStudent}>Add New Student</Button> &nbsp; &nbsp;
                <Button onClick={gotoUpdateStudent}>Update Student</Button>
            </div>
        </Container>
    );
};

export default StudentTable;