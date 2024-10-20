import { useEffect, useState, memo } from 'react'
import './App.css'
import { useSetRecoilState, RecoilRoot, useRecoilValue } from 'recoil'
import { counterAtom, evenSelector } from './store/atoms/counter'
// import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';
// import { counterAtom } from './store/atoms/counter';

function App() {

  return (<>
  <RecoilRoot>
  <Button />
  <br />
  <Counter />
  <br />
  <IsEven />
  </RecoilRoot>


  </>
  )
}

function Button() {
  const setCount = useSetRecoilState(counterAtom)
function increase(){
  setCount(c=> c+1)
}

function decrease(){
  setCount(c=> c+1)
}

  return <div>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>

  </div>
}

function Counter() {
  const count = useRecoilValue(counterAtom)

  return <>
  {count}
  </>
}

function IsEven() {
  const even = useRecoilValue(evenSelector)

  return <>
  {even ? "is Even" : "is Odd" }
  </>
}

 
  
export default App



