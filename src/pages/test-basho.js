import React from 'react';
import Layout from '../components/layout';
import TeamSelection from '../components/team-selection';

const TestBasho = () => {

  return (
    <Layout>
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
    </Layout>
  );
};

export default TestBasho;