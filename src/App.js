import './App.css'; 
// import About from './Components/About';           
// import { Routes, Route } from 'react-router-dom';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'success');
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert('Dark Mode has been enabled', 'success');
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        {/* <Routes>
          <Route */}
            {/* path="/"
            element={ */}
              <TextForm
                showAlert={showAlert}
                heading="Enter The Text To Analyze Below"
                mode={mode}
              />
            {/* }
          />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes> */}
      </div>
    </>
  );
}

export default App;
