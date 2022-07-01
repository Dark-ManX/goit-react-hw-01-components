import React from 'react';
import './App.css';
import user from '../data/user.json';
import Profile from '../components/Profile/Profile';
import data from '../data/data.json';
import AppStatistic from '../components/AppStatistic/AppStatistic';
import friends from '../data/friends.json';
import FriendList from '../components/FriendList/FriendList';
import TransactionHistory from '../components/TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        img={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        statsData={user.stats}
      />

      <AppStatistic stats={data} title='rendered stats'/>

      <FriendList friends={friends}/>

      <TransactionHistory operations={transactions}/>
    </div>
  );
}
