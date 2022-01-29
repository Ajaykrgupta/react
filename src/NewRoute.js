// App.js
import * as React from "react";
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";

function NewRoute() {
  return (
    <div>
      <header>
        <h1>Welcome to React Router!</h1>
      </header>
      <BrowserRouter>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default NewRoute;