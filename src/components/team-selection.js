import React, { useState } from 'react';
import optionData from '../data/test-basho-aki-basho-2019.json';

const TeamSelection = () => {
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [option5, setOption5] = useState('');

  const handleSubmission = e => {
    e.preventDefault();
    // dispatch({ type: 'ADD_TEAM', basho, selectedTeam: [option1, option2, option3, option4, option5 ] })
  }

  const setState = e => {
    const { id, value } = e.currentTarget;
    if (!isButtonEnabled) {
      switch(id) {
        case 'option1':
          return setOption1(value);
        case 'option2':
          return setOption2(value);
        case 'option3':
          return setOption3(value);
        case 'option4':
            return setOption4(value);
        case 'option5':
          return setOption5(value);
        default:
          return ''
      }
    } 
  }

  const isButtonEnabled = option1.length > 0 && option2.length > 0 && option3.length > 0 && option4.length > 0 && option5.length > 0;

  return (
    <form name="selectTeam" onSubmit={handleSubmission} style={{ textAlign: 'center' }}>
      <h3 style={{ textAlign: 'center', paddingTop: '30px', fontSize: '1rem' }}>Select Your Team</h3>
      {Object.keys(optionData).map((options, key) => (
        <select style={{ width: '100%', marginBottom: '20px', height: '2rem', fontSize: '0.9rem' }} name={optionData[options].formName} onChange={setState} id={options} key={key}>
          <option value="">Select {optionData[options].formName}</option>
          {optionData[options].wrestlers.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      ))}
      <button style={{ width: '100%', backgroundColor: 'green', color: '#fff', padding: '10px 0' }} className="button fullwidth-button" disabled={!isButtonEnabled} type="submit">Pick Team</button>
    </form>
  );
};

export default TeamSelection;