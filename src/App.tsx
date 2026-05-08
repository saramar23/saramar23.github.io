import { MotionConfig } from 'motion/react';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Layout>
        <Home />
      </Layout>
    </MotionConfig>
  );
}
