import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AlbumCovers from './routes/AlbumCovers';
import AlbumCover from './routes/AlbumCover';
import GraphicTees from './routes/GraphicTees';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/album-covers" element={<AlbumCovers />}>
        <Route path=":coverTitle" element={<AlbumCover />}/>
      </Route>
      <Route path="/graphic-tees" element={<GraphicTees />}/>
      {/* "*" route is for urls that don't match any other paths */}
      <Route 
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
