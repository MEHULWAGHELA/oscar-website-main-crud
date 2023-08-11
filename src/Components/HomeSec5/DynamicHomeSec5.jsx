import React, { useState } from 'react'

function DynamicHomeSec5(props) {
  const [count, setcount] = useState(0);

  setInterval(() => {
    if(count == 0){
        setcount((count) => count + 1);
    }
    else if(count == props.HomeSec5.num){
        setcount(props.HomeSec5.num)
        // clearInterval(count = props.HomeSec5.num)
    }
  }, 10);
  return (
    <>
        <div className='col HomeSec5Col'>
            <div>
              <h3>{props.HomeSec5.icon}</h3>
              <h2>{count}+</h2>
              <h6>{props.HomeSec5.h6}</h6>
            </div>
        </div>
    </>
  )
}

export default DynamicHomeSec5