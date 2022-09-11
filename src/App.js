import React, { useState } from 'react';
import Header from "./layouts/Header";
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound'
import { Routes, Route } from "react-router-dom";
import RequireAuth from './requireAuth';
import { useDispatch } from 'react-redux';
import { loginAct } from './reducers/authState/authAction';


function App() {


  return (
    <div className="App">
      <Header />
      {/* <Login /> */}
      <Routes>
      <Route path="/login" element={<Login />} />

      {/* auth routes */}
      <Route
        path="/animals"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  );
}

export default App;
