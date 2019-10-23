import React from 'react';
import TeamSelection from '../components/team-selection';

const TestBasho = () => {

  return (
    <section>
      <h2 style={{ textAlign: 'center' }}>Test Basho - Aki Basho 2019</h2>
      <div
        style={{
          padding: '6px 0 18px 0',
          borderTop: '1px solid #ddd',
          margin: '2rem auto 3rem auto'
        }}
      >
        <TeamSelection />
      </div>
    </section>
  );
};

export default TestBasho;