import React from 'react';

const StudentProfile = ({ student }) => {
  if (!student) return <p>No student selected</p>;

  return (
    <div>
      <img
        className="profile"
        src={require(`../assets/profilepic/${student.profilePic}`)}
        alt={`${student.firstName} ${student.lastName}`}
      />
      <p><strong>Name:</strong> {student.firstName} {student.lastName}</p>
      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>Gender:</strong> {student.gender}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Address:</strong> {student.address.city}, {student.address.country}</p>
      <p><strong>Skills:</strong> {student.skills.join(', ')}</p>
    </div>
  );
};

export default StudentProfile;
