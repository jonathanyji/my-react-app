import Message from './components/Message';
import Home from './components/Home';
import QuickQuoteForm from './components/QuickQuoteForm';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/message" element={<Message />} />
          <Route path="/quick-quote-form" element={<QuickQuoteForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
