import { Link, navigate, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import { FirebaseContext } from '../components/Firebase';
import React, { useContext } from "react"
import styled from 'styled-components';

const LogoutLink = styled.span`
  cursor: pointer;
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = ({ siteTitle }) => {

  const { firebase, user } = useContext(FirebaseContext);

  const data = useStaticQuery(graphql`
    query {
      allUsers {
        edges {
          node {
            id
            username
          }
        }
      }
    }
  `)

  const handleLogoutClick = () => {
    firebase.logout()
      .then(() => navigate('/login'))
  }

  const findUsername = (userId) => {
    const user = data.allUsers.edges.filter(node => node.node.id === userId);
    return user[0].node.username;
  }

  return (
    <header
      style={{
        backgroundColor: '#2D2D2D',
        color: '#fff',
        padding: '20px 30px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <h1 style={{ margin: 0, fontSize: '1.1rem' }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      {!user && (
        <div>
          <Link style={{color: 'white'}} to="/login">Login</Link> | <Link style={{color: 'white'}} to="/register">Register</Link>
        </div>
      )}
      {user && (
        <div style={{ display: 'flex' }}>
          Hello,&nbsp;<Link style={{ color: 'white'}} to={`/users/${user.username}`}>{findUsername(user.username) || user.email}</Link>
          <div style={{ paddingLeft: '20px' }}>
            <LogoutLink onClick={handleLogoutClick}>
              Logout
            </LogoutLink>
          </div>
        </div>
      )}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header