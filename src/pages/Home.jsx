import Navbar from '../components/Navbar';
import RSVPForm from '../components/RSVPForm';
import WhenWhereSection from '../components/WhenWhereSection';
import AlbumSection from '../components/AlbumSection';
import Footer from '../components/Footer';
import Schedules from '../components/Schedules';
import ContentTwo from '../components/ContentTwo';
import ContentOne from '../components/ContentOne';

const Home = () => {
  const weddingDate = new Date('2024-11-15T00:00:00');
  const now = new Date();
  const diff = weddingDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return (
    <div className="min-h-screen flex flex-col bg-white text-center">
      <Navbar links={['Home', 'Schedules', 'RSVP', 'Gallery', 'Gift Registry']} />
      <main className="flex-grow relative">
       
        <ContentOne/>
        <ContentTwo/>
        <Schedules/>
        <section id="rsvp" className="py-10">
          <RSVPForm />
        </section>
        <WhenWhereSection />
        <AlbumSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;