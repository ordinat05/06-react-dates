import React, { useState } from 'react'
import './App.css'
import data from "./data"

function App() {

  const [holidays, setHolidays] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>National Holidays Dates</h3>
        {holidays.map((holiday) => {
          return (
            <div className="holiday" key={holiday.id}>
              <img src={holiday.img} />
              <div>
                <p>{holiday.title}</p>
                <p>{holiday.date}</p>
              </div>
            </div>
          )
        })}
        <div className="yanyanadiv">
          <button onClick={() => setHolidays(data)}><b>Doldur</b></button>
          <button onClick={() => setHolidays([])}><b>Boşalt</b></button>
        </div>
      </section>
    </main>
  )
}

export default App
