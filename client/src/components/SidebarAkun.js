import SidebarItem from './SidebarItem';
import items from '../data/sidebarakun.json';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SidebarAkun = () => {
  const [user, setUser] = useState([]);
  const user_id = '2';
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const response = await axios.get(`http://localhost:3000/daftaruser/${user_id}`);
    setUser(response.data.items);
    console.log(response.data.items);
  };
  return (
    <div className="sidebar">
      <img src="/img/sofia.png" width="100" height="100" className="d-inline-block align-top" style={{ marginLeft: '70px', marginBottom: '25px' }} alt="React Bootstrap logo" />
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
};

export default SidebarAkun;
