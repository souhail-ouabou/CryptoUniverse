import React, { useEffect, useState } from 'react';
import millify from 'millify';
import {Link} from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Card, Col, Input, Row } from 'antd';
import Loader from './Loader';
const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const { data : cryptoList, isFetching} = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');
  useEffect(() => {
    const filtredData = cryptoList?.data?.coins.filter((coin)=> coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
    setCryptos(filtredData);
  },[cryptoList,searchTerm]);
  if(isFetching) return <Loader/>
 return( <>
 {!simplified && (
    <div className="search-crypto">
            <Input placeholder='Search Cryptocurrency' onChange={(e)=>setSearchTerm(e.target.value)} />
      </div>
      )}  
      <Row gutter={[32,32]} className='crypto-card-container'>
          {cryptos?.map((crypto)=>(
            <Col key={crypto.uuid} xs={24} sm={12} lg={6} className='crypto-card'>
              <Link key={crypto.uuid} to={`/crypto/${crypto.uuid}`}>
                  <Card
                 title={`${crypto.rank}. ${crypto.name}`}
                 extra={<img className="crypto-image" src={crypto.iconUrl} />}
                 hoverable>
                <p>Price: {millify(crypto.price)}</p>
                <p>Market Cap: {millify(crypto.marketCap)}</p>
                <p>Daily Change: {crypto.change}%</p>
                 </Card>
              </Link>
            </Col>
          ))}
      </Row>
  </>);
};

export default Cryptocurrencies;
