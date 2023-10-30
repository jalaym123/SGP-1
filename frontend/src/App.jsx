import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { Footer } from './Components/Includes/Footer'
import { NavBar } from './Components/Includes/NavBar'
import { About } from './Components/Pages/About'
import { AdvanceBooking } from './Components/Pages/Bookings/AdvanceBooking'
import { LiveBooking } from './Components/Pages/Bookings/LiveBooking'
import { Contact } from './Components/Pages/Contact'
import { Dashboard } from './Components/Pages/Dashboard'
import { Home } from './Components/Pages/Home'
import { Login } from './Components/Pages/Login'
import { NoPage } from './Components/Pages/NoPage'
import { Reservation } from './Components/Pages/Reservation'
import { Signup } from './Components/Pages/Signup'
import { UserProfile } from './Components/Pages/UserProfile'
import restroApi from './api/restro'


export const App = () => {

  const navigate = useNavigate();

  const [restroData, setRestroData] = React.useState({});
  React.useEffect(() => {
    (async () => {
      const res = await restroApi.get('/')
      setRestroData(res.data);
    })()
  }, [])


  let initialDate = sessionStorage.getItem("date");
  initialDate = initialDate && dayjs(new Date(initialDate))
  const [date, setDate] = React.useState(initialDate);

  let initialTime = sessionStorage.getItem("time");
  initialTime = initialTime && dayjs(new Date(initialTime))
  const [time, setTime] = React.useState(initialTime);

  let initialStep = JSON.parse(sessionStorage.getItem("step") || "0");
  const [step, setStep] = React.useState(initialStep);

  let initialGuests = JSON.parse(sessionStorage.getItem("guests") || "1");
  const [guests, setGuests] = React.useState(initialGuests);

  let initialUserInfo = localStorage.getItem("userInfo");
  if (initialUserInfo === 'undefined') initialUserInfo = "{}";
  const [userInfo, setInfo] = useState(JSON.parse(initialUserInfo));

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo])

  useEffect(() => {
    if (time)
      sessionStorage.setItem("time", time.toISOString())
  }, [time])
  useEffect(() => {
    if (date)
      sessionStorage.setItem("date", date.toISOString())
  }, [date])
  useEffect(() => {
    if (step) {
      sessionStorage.setItem("step", step.toString())
    } else
      sessionStorage.setItem("step", "0")
  }, [step])
  useEffect(() => {
    if (guests) {
      sessionStorage.setItem("guests", guests.toString())
    } else
      sessionStorage.setItem("guests", "1")
  }, [guests])

  const logOut = () => {
    setInfo(() => { });
    navigate("/");
  }

  return (
    <>
      <Container fluid={"true"}>
        <NavBar userInfo={userInfo} logOut={logOut} />
        <Routes>
          {["/", "/home"].map((path, i) => {
            return <Route path={path} element={<Home />} key={i} />
          })}
          <Route path='/about' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          {/* <Route path='/MyBooking' element={< MyBooking />} /> */}
          <Route path='/login' element={<Login setInfo={setInfo} />} />
          <Route path='/signup' element={<Signup setInfo={setInfo} />} />
          <Route path='/reservation'
            element={<Reservation
              Step={step}
              setStep={setStep}
              Date={date}
              setDate={setDate}
              Time={time}
              setTime={setTime}
              restroData={restroData}
            />}
          />
          <Route path='/reservation/advancebooking'
            element={<AdvanceBooking
              Step={step}
              setStep={setStep}
              Date={date}
              setDate={setDate}
              Time={time}
              setTime={setTime}
              Guests={guests}
              setGuests={setGuests}
              restroData={restroData}
            />}
          />
          <Route path='/dashboard'
            element={<Dashboard
              restroData={restroData}
              setRestroData={setRestroData}
            />}
          />
          <Route path='/reservation/livebooking' element={<LiveBooking />} />
          <Route path='/profile' element={<UserProfile userInfo={userInfo} setInfo={setInfo} />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
        <Footer />
      </Container>
    </>
  )
}