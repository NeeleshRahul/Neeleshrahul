
import React, { useState } from 'react';
import Header from './components/Navbar'; // Now Header
import Hero from './components/About'; // Now Hero
import SkillsTicker from './components/Skills'; // Now SkillsTicker
import AboutMe from './components/Experience'; // Now AboutMe
import WorkingProcess from './components/Education'; // Now WorkingProcess
import RecentProjects from './components/Projects'; // Now RecentProjects
import Stats from './components/Interests'; // Now Stats
import Testimonials from './components/ProjectModal'; // Now Testimonials
import News from './components/SocialIcons'; // Now News
import Footer from './components/SkillIcons'; // Now Footer
import { usePortfolioData } from './usePortfolioData';
import { AdminLoginModal } from './components/AdminModals';

const App: React.FC = () => {
  const { 
    projects, setProjects, 
    stats, setStats, 
    aboutMe, setAboutMe, 
    skills, setSkills, 
    testimonials, setTestimonials,
    newsArticles, setNewsArticles,
    isLoaded 
  } = usePortfolioData();

  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen bg-cream">
        <p className="text-xl font-semibold">Loading Portfolio...</p>
      </div>
    );
  }
  
  const handleLogout = () => {
    setIsAdmin(false);
  };

  return (
    <>
      <Header />
      <main>
        <Hero stats={stats} isAdmin={isAdmin} aboutMe={aboutMe} onUpdateAboutMe={setAboutMe} />
        <SkillsTicker isAdmin={isAdmin} skills={skills} onUpdateSkills={setSkills} />
        <AboutMe isAdmin={isAdmin} aboutMe={aboutMe} onUpdateAboutMe={setAboutMe} />
        <WorkingProcess />
        <RecentProjects isAdmin={isAdmin} projects={projects} onUpdateProjects={setProjects} />
        <Stats isAdmin={isAdmin} stats={stats} onUpdateStats={setStats} />
        <Testimonials isAdmin={isAdmin} testimonials={testimonials} onUpdateTestimonials={setTestimonials} />
        <News isAdmin={isAdmin} newsArticles={newsArticles} onUpdateNewsArticles={setNewsArticles} />
      </main>
      <Footer 
        isAdmin={isAdmin}
        onAdminLoginClick={() => setIsLoginModalOpen(true)}
        onAdminLogoutClick={handleLogout}
      />
      
      {isLoginModalOpen && (
        <AdminLoginModal 
          onClose={() => setIsLoginModalOpen(false)} 
          onLoginSuccess={() => {
            setIsAdmin(true);
            setIsLoginModalOpen(false);
          }} 
        />
      )}
    </>
  );
};

export default App;