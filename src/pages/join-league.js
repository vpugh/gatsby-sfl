import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const JoinLeague = () => {
  const data = useStaticQuery(graphql`
    query {
      allBashos {
        edges {
          node {
            name
            type
            id
            rikishi
            year
            createdBy {
              username
              id
            }
          }
        }
      }
    }
  `)

  return (
    <section>
      <h2>Join a League</h2>
      <ul style={{ margin: 0, padding: 0 }}>
        {data.allBashos.edges.map(({ node: basho}) => (
          <li key={basho.id} style={{ listStyle: 'none' }}>
            <Link to={`/basho/${basho.id}`}>
              {basho.name} - {basho.type} Basho {basho.year}
            </Link>
            {' '}
            <span>by</span>
            {' '}
            <Link to={`/users/${basho.createdBy.id}`}>
              {basho.createdBy.username}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default JoinLeague;