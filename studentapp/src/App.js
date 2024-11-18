import React, { useState } from 'react';
import { students } from './StudentsDb';
import StudentTable from './Components/StudentTable';
import StudentProfile from './Components/StudentProfile';

const App = () => {
  const [selectedStudent, setSelectedStudent] = useState(students[0]);
  const [fontSize, setFontSize] = useState("16px");

  return (
    <div className="app">
      <div>
        <button onClick={() => setFontSize("16px")}>Small</button>
        <button onClick={() => setFontSize("20px")}>Medium</button>
        <button onClick={() => setFontSize("24px")}>Large</button>
      </div>
      <div className="table-section" style={{ fontSize }}>
        <StudentTable students={students} onSelect={setSelectedStudent} />
      </div>
      <div className="profile-section" style={{ fontSize }}>
        <StudentProfile student={selectedStudent} />
      </div>
    </div>
  );
};

export default App;
