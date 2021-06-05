import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import "./styles.css";
export default function App() {
  return (
    <div>
      <Header />
      <Note />
      <Footer />
    </div>
  );
}
