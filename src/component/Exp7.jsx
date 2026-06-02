import React from 'react';

function Exp7({ students }) {
    const studentList = [];

    for (let x in students) {
        studentList.push(
            <div key={x} style={{ backgroundColor: 'lightgrey', padding: '10px 50px 90px 50px' }}>
                <h3>{students[x].name}</h3>
                <h3>{students[x].rollno}</h3>
                <h3>{students[x].course}</h3>
            </div>
        );
    }

    return (
        <div>
            {studentList}
        </div>
    );
}

export default Exp7;