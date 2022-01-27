import React from 'react';
import millify from 'millify';
import {Link} from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Typography,Row,Col,Statistic } from 'antd';
const {Title} = Typography;
const Homepage = () => {
  const { data, isFetching} = useGetCryptosQuery();
  const globalStats = data?.data?.stats;
  if (isFetching) return 'Loading...';
  return <>
  <Title className='heading' level={2}>Global Crypto Stats</Title>
     <Row>
      <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
      <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
      <Col span={12}><Statistic title="Total Market" value={millify(globalStats.totalMarketCAP)}/></Col>
      <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
      <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
    </Row>
  </>;
};


export default Homepage;
