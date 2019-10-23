import React from 'react';
import { graphql } from 'gatsby';
import TeamSelection from '../components/team-selection';

const PersonalBashoPages = ({ data }) => {
  return (
    <section>
      <h2 style={{ textAlign: 'center' }}>{data.bashos.name} - {data.bashos.type} Basho {data.bashos.year}</h2>
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

export default PersonalBashoPages;

export const personalBasho = graphql`
  query($bashoId: String!) {
    bashos(id: {eq: $bashoId }) {
      name
      year
      type
      rikishi
    }
  }
`;