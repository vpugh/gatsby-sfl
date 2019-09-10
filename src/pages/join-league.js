import React from 'react';
import Layout from "../components/layout"
import { Link } from 'gatsby';

const JoinLeague = () => {
  return (
    <Layout>
      <h2>Join a League</h2>
      <ul>
        <li>
          <Link to="test-basho">
            Test Basho - Aki Basho 2019
          </Link>
          {' '}
          by <Link to="/user/creator">Creator</Link>
        </li>
      </ul>
    </Layout>
  );
};

export default JoinLeague;