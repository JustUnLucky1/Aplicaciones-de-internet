import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Header';
import Content from './Content';
import Total from './Total';




function App() {
  const course = "Aplicaciones para Internet";
  const part1 = "Introduction to React";
  const exercises1 = 100;
  const part2 = "Using props";
  const exercises2 = 70;
  const part3 = "Component state";
  const exercises3 = 140;
  const sumTotal = exercises1 + exercises2 + exercises3;

  return (
    <div>
    <Header curso={course}/>
    <Content p1={part1} p2={part2} p3={part3} e1={exercises1} e2={exercises2} e3={exercises3}/>
    <Total  total = {sumTotal}/>
    </div>
  );
}


export default App;

