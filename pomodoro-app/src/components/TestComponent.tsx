import React from 'react'
import style from'./TestComponent.module.scss';


export const TestComponent:React.FC = ()=>{
    return (
        <div className={style['test-component']}>hello test</div>
    )
}