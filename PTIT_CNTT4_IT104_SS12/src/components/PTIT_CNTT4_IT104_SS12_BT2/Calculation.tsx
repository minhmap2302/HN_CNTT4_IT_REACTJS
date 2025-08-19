import React from 'react'
//Bai tap 2

export default function Calculation() {
    const sum = (a: number,b: number): number => a + b
    const sub = (a: number,b: number): number => a - b
    const mulity = (a:number,b: number): number => a * b
    const exp = (a: number,b:number): number => a / b
    const a = 10;
    const b = 10;
  return (
    <>
        <div> Danh Sach Ket Qua</div>
        <ul>
            <li>
                {a} + {b} = {sum(a,b)}
            </li>
            <li>
                {a} - {b} = {sub(a,b)}
            </li>
            <li>
                {a} * {b} = {mulity(a,b)}
            </li>
            <li>
                {a} / {b} = {exp(a,b)}
            </li>
        </ul>
    </>
  )
}
