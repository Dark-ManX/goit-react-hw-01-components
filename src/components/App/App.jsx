import React from 'react';
import './App.css';
import user from '../components/Profile/user.json';
import Profile from '../components/Profile/Profile';
import data from '../components/AppStatistic/data.json';
import AppStatistic from '../components/AppStatistic/AppStatistic';
import friends from '../components/FriendList/friends.json';
import FriendList from '../components/FriendList/FriendList';
import TransactionHistory from '../components/TransactionHistory/TransactionHistory';
import transactions from '../components/TransactionHistory/transactions.json';

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

      <AppStatistic stats={data}/>

      <FriendList friends={friends}/>

      <TransactionHistory operations={transactions}/>
    </div>
  );
}
