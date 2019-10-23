import React from 'react';
import { Link, graphql } from 'gatsby';

const UserPages = ({ data }) => {

  const findBashoName = id => {
    if (id) {
      const selectedBasho = data.allBashos.edges.filter(b => b.node.id === id);
      console.log(id, selectedBasho);
      return selectedBasho[0].node.name;
    }
  }
  return (
    <div>
      <div style={{ background: `url(${data.users.avatar})`, height: '50px', width: '150px', backgroundSize: 'cover'}} />
      <h3>{data.users.username}</h3>
      <p>{data.users.firstName} {data.users.lastName}</p>
      <hr />
      {data.users.bashos.length > 0 && (
        <>
          <p>Created Bashos</p>
          {findBashoName()}
          <ul>
            {data.users.bashos.map(basho => (
              <li key={basho}>
                <Link to={`/basho/${basho}`}>
                  {findBashoName(basho)}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default UserPages;

export const userProfile = graphql`
  query($userId: String!) {
    users(id: {eq: $userId }) {
      avatar
      bashos
      email
      firstName
      lastName
      username
    }
    allBashos {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;