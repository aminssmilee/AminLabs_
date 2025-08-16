
import Navigation from './components/Navigation';
import TopBar from './components/TopBar';
import Banner from './components/Banner';
import CategoryCTA from './components/CategoryCTA';
import Category from './components/Category'
import LookBook from './components/LookBook';
import Footer from './components/Footer';



function App() {
  return (
    <div className="bg-beig">
      {/* Top Bar */}
      <TopBar />
      <Navigation />
      <Banner />
      <CategoryCTA />
      <Category />
      <LookBook />
      <Footer />
    </div>
  );
}

export default App;
