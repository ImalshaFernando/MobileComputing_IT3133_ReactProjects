import React from 'react';

const StudentTable = ({ students, onSelect }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Student ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Course</th>
          <th>Country</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.studentId}>
            <td>{student.studentId}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.course}</td>
            <td>{student.address.country}</td>
            <td>
              <button onClick={() => onSelect(student)}>View Profile</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
