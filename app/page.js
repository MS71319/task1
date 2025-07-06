import HeroSection from './components/HeroSection';
import EmailList from './components/Emaillist';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Suspense fallback={<p className="text-center">Loading...</p>}>
        <EmailList />
      </Suspense>
    </div>
  );
}
