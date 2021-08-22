import React, {useRef} from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from "react-router";

const AddStudent = () => {

    let history = useHistory();

    function sendData(e) {
        e.preventDefault();
        const name = e.target.name.value;
        const address = e.target.address.value;
        const cgpa = e.target.CGPA.value;

        axios.post('http://localhost:5000/addstudent', {
            Name: name,
            Address: address,
            CGPA: cgpa
        })
        .then((response) => console.log('Data Inserted'))
        history.push('/');
    }

    return (
        <Container>
            <section className="mt-4 align-items-center">
                <div>
                    <form className="form-control" onSubmit={sendData}>
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
                            <input type="submit" className="btn btn-primary" value="ADD" />
                        </div>
                    </form>
                </div>
            </section>
        </Container>
    );
};

export default AddStudent;