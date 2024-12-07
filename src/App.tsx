import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/global/rootLayout'; 
import Home from '@/pages/home';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;

