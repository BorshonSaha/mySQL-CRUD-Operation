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
                        student.map(data => <tr> <td>{data.ID}</td> <td>{data.Name}</td> <td>{data.Address}</td> <td>{data.CGPA} </td> <td><Button>Update</Button> <Button variant="danger">Delete</Button></td> </tr>)
                    }
                </tbody>
            </Table>
            <Button onClick={gotoAddStudent} className='mt-5'>Add New Student</Button>
        </Container>
    );
};

export default StudentTable;