import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby';
import TestLobbyData from '../data/lobby-test-data.json';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <table>
      <tr>
        <th>Tournament Name</th>
        <th>Entrants</th>
        <th>Deadline</th>
      </tr>
      {TestLobbyData.filter(d => d.tournamentType === 'public').map(data => (
        <tr>
          <td><Link to={`/tournament/${data.id}`}>{data.name} - {data.bashoType} Basho</Link></td>
          <td>{data.totalEntrants}/{data.maxEntrants}</td>
          <td>{data.startTime}</td>
        </tr>
      ))}
    </table>
  </Layout>
)

export default IndexPage
