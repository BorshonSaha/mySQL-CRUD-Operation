import React from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from "react-router";

const UpdateStudent = () => {

    let history = useHistory();

    function sendData(e) {
        e.preventDefault();
        const id = e.target.id.value;
        const name = e.target.name.value;
        const address = e.target.address.value;
        const cgpa = e.target.CGPA.value;
        // console.log(id, name, address, cgpa);

        axios.put('http://localhost:5000/updateStudent', {
            ID: id,
            Name: name,
            Address: address,
            CGPA: cgpa
        })
        .then(response => console.log('Student updated'))
        history.push('/');
    }

    return (
        <div>
            <Container>
                <section className="align-items-center">
                    <div>
                        <form onSubmit={sendData}>
                            <div className="from-group pt-3" >
                                <input type="text" id='id' className="form-control" placeholder="Enter ID" name='id' required />
                            </div>
                            <div className="from-group pt-3" >
                                <input type="text" id='name' className="form-control" placeholder='Enter name' name='name' required />
                            </div>
                            <div className="from-group pt-3" >
                                <input type="text" id='address' className="form-control" placeholder='Enter Address' name='address' required />
                            </div>
                            <div className="from-group pt-3" >
                                <input type="text" id='CGPA' className="form-control " placeholder='Enter CGPA' name='CGPA' required />
                            </div>
                            <div className="pt-3">
                                <input type="submit" className="btn btn-primary" value="Update" />
                            </div>
                        </form>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default UpdateStudent;