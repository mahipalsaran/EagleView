import React from 'react';
import data from '../data';
import Tab from '../components/tab';

const Page=()=> {
    return (<div>
        {
            data.map((d,i)=>{
                return (<Tab key={i}>{d.desc}</Tab>)
            })
        }
    </div>)
}

export default Page;