import Head from 'next/head'
import { useState } from 'react';

import Button from 'react-bootstrap/Button';

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>
        <p>You pressed the button <b>{counter}</b> times!</p>
          <Button className="btn-danger" onClick={() => { setCounter((prev_counter) => prev_counter+1) }}>
            Click!
          </Button>
      </div>
    </>
  )
}
