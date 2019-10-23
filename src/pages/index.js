import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby';
import TestLobbyData from '../data/lobby-test-data.json';
import moment from 'moment-timezone';

const september = moment("2019-09-08T12:00:00Z");
const septFormat = september.format('ha z');
const sepJST = september.tz('Asia/Tokyo').format('ha z');
console.log(september, septFormat, sepJST);

const newYork = moment.tz("2014-06-01 12:00", "America/New_York");
const originalTokyo = moment.tz("2019-09-08 08:00", "Asia/Tokyo");
const la = newYork.clone().tz("America/Los_Angeles");
const tokyo2 = newYork.clone().tz("Asia/Tokyo");
console.log(originalTokyo.format('MMM Do ha z'), newYork.format('ha z'), la.format('ha z'), tokyo2.format('ha z'));

const clientTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log('TimeZone', clientTz);

const japaneseTime = moment("2019-09-08 8:00").tz('Asia/Tokyo').format('ha z');
console.log(japaneseTime);

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <table>
      <tbody>
        <tr style={{ backgroundColor: 'lightgray' }}>
          <th style={{ paddingLeft: '16px', paddingRight: '16px' }}>Tournament Name</th>
          <th style={{ paddingLeft: '16px', paddingRight: '16px' }}>Entrants</th>
          <th style={{ paddingLeft: '16px', paddingRight: '16px' }}>Deadline</th>
          <th></th>
        </tr>
        {TestLobbyData.filter(d => d.tournamentType === 'public').map(data => {
          // const newYork = moment.tz("2014-06-01 12:00", "America/New_York");
          const jpTime = moment.tz(data.startTime, "Asia/Tokyo");
          return (
            <tr style={{ backgroundColor: 'white' }} key={data.id}>
              <td style={{ paddingLeft: '16px', paddingRight: '16px' }}><Link style={{ color: 'inherit' }} to={`/tournament/${data.id}`}>{data.name} - {data.bashoType} Basho</Link></td>
              <td style={{ paddingLeft: '16px', paddingRight: '16px' }}>{data.totalEntrants}/{data.maxEntrants}</td>
              <td style={{ paddingLeft: '16px', paddingRight: '16px' }}>
                {jpTime.format('MMM Do ha z')}
                {' '}
                ({jpTime.clone().tz(clientTz).format('MMM Do ha z')})
              </td>
              <td><button>Enter</button></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </Layout>
)

export default IndexPage
