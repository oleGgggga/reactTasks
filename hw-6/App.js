import React from 'react';
import ReactDOM from 'react-dom';
import { MobileCompany } from './Components/MobileCompany';
let data=[
{id: 1, FIO:{surname:'иванов1', name: 'иван1', fatherName:'иванович1',}, balance: 200, isActive: true},
{id: 2, FIO:{surname:'иванов2', name: 'иван2', fatherName:'иванович2',}, balance: 300, isActive: true},
{id: 3, FIO:{surname:'иванов3', name: 'иван3', fatherName:'иванович3',}, balance: 400, isActive: true},
{id: 4, FIO:{surname:'иванов4', name: 'иван4', fatherName:'иванович4',}, balance: -200, isActive: false},
]
ReactDOM.render(
  <MobileCompany data={data}></MobileCompany>,document.getElementById('container') 
);

