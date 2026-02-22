
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Home, Users, Stethoscope, HandHeart, Truck, GraduationCap, ShieldCheck, Library, Camera, EyeOff, Heart, Map } from "lucide-react";
import { LearningModule } from "./entities/LearningModule";

const NavLink = ({ to, onClick, pathname, children }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-lg font-medium transition-all duration-200 group ${
      pathname === to
        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
    }`}
    style={{ fontFamily: 'Assistant, sans-serif' }}
  >
    {children}
  </Link>
);

const NavHeader = ({ children }) => (
  <h3 className="px-4 pt-6 pb-2 text-sm font-semibold text-gray-500" style={{ fontFamily: 'Assistant, sans-serif' }}>
    {children}
  </h3>
);

export default function Layout({ children, currentPageName }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const [navItems, setNavItems] = useState({ military: [], civilian: [], immersive: [] });

  useEffect(() => {
    const fetchModules = async () => {
      try {
        // Fetch modules without a category and assign them to 'military'
        const modulesWithoutCategory = await LearningModule.filter({ category: { $exists: false } });
        const categorizedModules = modulesWithoutCategory.map(m => ({ ...m, category: 'military' }));
        
        // Fetch modules that already have a category
        const newModules = await LearningModule.filter({ category: { $exists: true } });
        
        // Combine all modules
        const allModules = [...categorizedModules, ...newModules];
        
        const getIcon = (slug) => {
            switch(slug) {
                case 'Home': return Home;
                case 'Population': return Users;
                case 'Medicine': return Stethoscope;
                case 'Yaklar': return HandHeart;
                case 'Logistics': return Truck;
                case 'College': return GraduationCap;
                case 'Assessment': return ShieldCheck;
                case 'IsraeliSociety': return Heart;
                case 'DemoLibrary': return Library;
                case 'FieldPhotos': return Camera;
                case 'Tzahi': return ShieldCheck;
                case 'TzahiLesson': return GraduationCap;
                case 'MemorialMap': return Map;
                default: return Home;
            }
        };

        const military = allModules
            .filter(m => m.category === 'military' && !m.disabled)
            .map(m => ({ title: m.name, url: createPageUrl(m.slug), icon: getIcon(m.slug) }));
            
        const civilian = allModules
            .filter(m => m.category === 'civilian' && !m.disabled)
            .map(m => ({ title: m.name, url: createPageUrl(m.slug), icon: getIcon(m.slug) }));

        const immersive = allModules
            .filter(m => m.category === 'immersive' && !m.disabled)
            .map(m => ({ title: m.name, url: createPageUrl(m.slug), icon: getIcon(m.slug) }));
            
        setNavItems({ military, civilian, immersive });
      } catch (error) {
        console.error("Failed to fetch modules for navigation", error);
      }
    };
    fetchModules();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" style={{ direction: 'rtl' }}>
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-40">
        <div className="px-[3vw]">
          <div className="flex justify-between items-center h-20">
            <Link to={createPageUrl("Home")} className="flex-shrink-0">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6885e537f90714e91be36212/8268122aa_collegeLogoText.png"
                alt="המכללה הלאומית לאיתנות ישראלית"
                className="h-16 w-auto"
              />
            </Link>
            <button onClick={() => setSidebarOpen(true)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200">
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </header>

      {sidebarOpen && <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />}

      <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900" style={{ fontFamily: 'Karantina, sans-serif' }}>תפריט ניווט</h2>
          <button onClick={() => setSidebarOpen(false)} className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors duration-200">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="p-6 overflow-y-auto h-[calc(100%-77px)]">
          <div className="space-y-2">
            <NavLink to={createPageUrl("Home")} onClick={() => setSidebarOpen(false)} pathname={location.pathname}>
              <Home className="h-5 w-5" /><span>דף הבית</span>
            </NavLink>
            
            <NavHeader>לומדות צבאיות</NavHeader>
            {navItems.military.map((item) => (
              <NavLink key={item.title} to={item.url} onClick={() => setSidebarOpen(false)} pathname={location.pathname}>
                <item.icon className="h-5 w-5" /><span>{item.title}</span>
              </NavLink>
            ))}

            <NavHeader>לומדות אזרחיות</NavHeader>
            {navItems.civilian.map((item) => (
              <NavLink key={item.title} to={item.url} onClick={() => setSidebarOpen(false)} pathname={location.pathname}>
                <item.icon className="h-5 w-5" /><span>{item.title}</span>
              </NavLink>
            ))}
            
            <NavHeader>כיתה אימרסיבית</NavHeader>
            {navItems.immersive.map((item) => (
              <NavLink key={item.title} to={item.url} onClick={() => setSidebarOpen(false)} pathname={location.pathname}>
                <item.icon className="h-5 w-5" /><span>{item.title}</span>
              </NavLink>
            ))}
          </div>
        </nav>
      </div>

      <main className="flex-1">{children}</main>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Karantina:wght@300;400;700&family=Assistant:wght@200;300;400;500;600;700;800&display=swap');
          
          body, html {
            direction: rtl;
            font-family: 'Assistant', sans-serif;
          }
          
          * {
            direction: rtl;
          }
        `}
      </style>
    </div>
  );
}
