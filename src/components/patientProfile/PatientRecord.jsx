import React from 'react';
import { useEffect } from 'react';
import { useSearchState } from '../../store/searchProvider';
import { useState } from 'react';

const PatientRecord = () => {
  const [apoiment, setapoiment] = useState(['1', '2', '3']);
  const { user } = useSearchState();
  useEffect(() => {
    if (user) setapoiment(user.appointment);
  }, [user]);
  return (
    <div className="patient-record-container">
      <h5>Historial</h5>
      {/* {apoiment.map((item) => (
        <h6>
          {item}
        </h6>
      ))} */}
    </div>
  );
};

export default PatientRecord;
