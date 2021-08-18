import React from 'react';
import {Table} from 'react-bootstrap';

const StudentTable = ({ ID, Name, Address, CGPA }) => {
    return (
        <div>
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
          <tr>
            <td>{ID}</td>
            <td>{Name}</td>
            <td>{Address}</td>
            <td>{CGPA}</td>
          </tr>
        </tbody>
      </Table>
        </div>
    );
};

export default StudentTable;