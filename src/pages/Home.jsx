
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { LearningModule } from "@/entities/LearningModule";
import { Monitor, Smartphone, ChevronLeft, Sparkles, Target, Users, Award, AlertTriangle, EyeOff } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ModuleCard = ({ module, cardColors }) => {
  const isImmersive = module.category === 'immersive';
  
  const CardWrapper = ({ children }) => 
    module.disabled ? (
      <div className="h-full">{children}</div>
    ) : (
      <Link to={createPageUrl(module.slug)} className="block h-full">
        {children}
      </Link>
    );

  return (
    <CardWrapper>
      <Card className={`group h-full flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-xl ${module.disabled ? 'filter grayscale opacity-70 cursor-not-allowed' : ''}`}>
        <CardHeader className={`relative bg-gradient-to-br ${cardColors[module.slug] || 'from-gray-200 to-gray-300'} text-gray-800 rounded-t-xl p-8`}>
          <div className="min-h-[2rem] flex justify-end gap-2 mb-2">
            {!isImmersive && module.desktop_compatible && (
              <Badge className="bg-white/40 text-gray-700 border-gray-300 backdrop-blur-sm pointer-events-none flex items-center gap-1.5 px-3 py-1.5">
                <span>מחשב</span>
                <Monitor className="w-4 h-4" />
              </Badge>
            )}
            {!isImmersive && module.mobile_compatible && (
              <Badge className="bg-white/40 text-gray-700 border-gray-300 backdrop-blur-sm pointer-events-none flex items-center gap-1.5 px-3 py-1.5">
                <span>מובייל</span>
                <Smartphone className="w-4 h-4" />
              </Badge>
            )}
            {module.disabled && (
               <Badge variant="destructive" className="flex items-center gap-1.5 px-3 py-1.5">
                <span>מושבת</span>
                <EyeOff className="w-4 h-4" />
              </Badge>
            )}
          </div>
          <CardTitle className="text-3xl transition-colors text-gray-800" style={{ fontFamily: 'Karantina, sans-serif' }}>
            {module.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 space-y-6 flex-grow flex flex-col">
          <p className="text-lg text-gray-700 leading-relaxed flex-grow" style={{ fontFamily: 'Assistant, sans-serif' }}>
            {module.description || "לומדה מתקדמת למידה אינטראקטיבית"}
          </p>
          
          {!isImmersive ? (
            <>
              <div className="space-y-3">
                <div className="text-md font-semibold text-gray-600" style={{ fontFamily: 'Assistant, sans-serif' }}>גרסאות זמינות:</div>
                <div className="flex flex-wrap gap-3">
                  {module.desktop_compatible && (
                    <div className="flex items-center gap-2 text-md text-green-700 bg-green-100 px-3 py-1.5 rounded-full" style={{ fontFamily: 'Assistant, sans-serif' }}>
                      <span>מחשב</span>
                      <Monitor className="w-5 h-5" />
                    </div>
                  )}
                  {module.mobile_compatible && (
                    <div className="flex items-center gap-2 text-md text-blue-700 bg-blue-100 px-3 py-1.5 rounded-full" style={{ fontFamily: 'Assistant, sans-serif' }}>
                      <span>מובייל</span>
                      <Smartphone className="w-5 h-5" />
                    </div>
                  )}
                  {!module.desktop_compatible && !module.mobile_compatible && !module.disabled && (
                    <div className="text-md text-gray-500" style={{ fontFamily: 'Assistant, sans-serif' }}>לא זמין כרגע</div>
                  )}
                   {module.disabled && (
                    <div className="text-md text-red-500" style={{ fontFamily: 'Assistant, sans-serif' }}>הלומדה מושבתת כרגע</div>
                  )}
                </div>
              </div>
              <div className="pt-2">
                <Button disabled={module.disabled} className={`w-full py-6 text-lg ${module.disabled ? 'bg-gray-400' : `bg-gradient-to-r ${cardColors[module.slug] || 'from-gray-400 to-gray-500'} text-gray-800 hover:text-gray-900`} group font-semibold`} style={{ fontFamily: 'Assistant, sans-serif' }}>
                  <span>פתיחת הלומדה</span>
                  {/* Changed mr-2 to ml-2 and -translate-x-1 to translate-x-1 for RTL compatibility */}
                  <ChevronLeft className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </>
          ) : (
            <div className="pt-2">
              <div className="flex items-center justify-center text-center p-3 rounded-lg bg-yellow-100 text-yellow-800 mb-4">
                <AlertTriangle className="w-5 h-5 ml-2" />
                <span className="font-semibold">דורש כיתה אימרסיבית</span>
              </div>
              <Button className={`w-full py-6 text-lg bg-gradient-to-r ${cardColors[module.slug] || 'from-gray-400 to-gray-500'} text-gray-800 hover:text-gray-900 group font-semibold`} style={{ fontFamily: 'Assistant, sans-serif' }}>
                <span>פתיחת הלומדה</span>
                {/* Changed mr-2 to ml-2 and -translate-x-1 to translate-x-1 for RTL compatibility */}
                <ChevronLeft className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </CardWrapper>
  );
};


export default function HomePage() {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadModules();
    window.scrollTo(0, 0);
  }, []);

  const loadModules = async () => {
    try {
      const existingModules = await LearningModule.filter({ category: { $exists: false } });
      const updatedExisting = existingModules.map(m => ({ ...m, category: 'military' }));
      const newModules = await LearningModule.filter({ category: { $exists: true } });
      setModules([...updatedExisting, ...newModules].sort((a, b) => a.name.localeCompare(b.name, 'he')));
    } catch (error) {
      console.error("Error loading modules:", error);
    }
    setLoading(false);
  };
  
  const militaryModules = modules.filter(m => m.category === 'military');
  const civilianModules = modules.filter(m => m.category === 'civilian');
  const immersiveModules = modules.filter(m => m.category === 'immersive');

  const cardColors = {
    Medicine: "from-green-200 to-emerald-300",
    Population: "from-blue-200 to-purple-300",
    Yaklar: "from-orange-200 to-red-300",
    Logistics: "from-indigo-200 to-cyan-300",
    College: "from-yellow-200 to-amber-300",
    Assessment: "from-sky-200 to-blue-300",
    IsraeliSociety: "from-rose-200 to-pink-300",
    Tzahi: "from-orange-200 to-amber-300", // Updated line
    TzahiLesson: "from-emerald-200 to-teal-300",
    DemoLibrary: "from-violet-200 to-fuchsia-300",
    FieldPhotos: "from-lime-200 to-green-300",
    MemorialMap: "from-indigo-200 to-blue-300",
  };
  
  const features = [
    {
      icon: Sparkles,
      title: "טכנולוגיה מתקדמת בשירות החינוך הצבאי",
      description: "פתרונות למידה חדשניים המבוססים על הטכנולוגיות העדכניות ביותר"
    },
    {
      icon: Target,
      title: "רב-פלטפורמיות",
      description: "לומדות המותאמות לשימוש במחשב ובמובייל, בכל מקום ובכל זמן"
    },
    {
      icon: Users,
      title: "תוכן איכותי",
      description: "תכנים מקצועיים שפותחו על ידי מומחות ומומחים בתחום ומותאמים לצרכי הצבא"
    },
    {
      icon: Award,
      title: "למידה ממוקדת",
      description: "חוויית למידה אינטראקטיבית המותאמת לסגנון הלמידה הצבאי"
    }
  ];

  return (
    <div className="min-h-screen" style={{ direction: 'rtl' }}>
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden bg-gray-800" style={{ direction: 'rtl' }}>
        <div className="absolute inset-0 bg-[url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c2a49d86f176634fdb456a/53906e239_20211013_093702.jpg')] bg-cover bg-center opacity-40 blur-sm"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" style={{ direction: 'rtl' }}>
          <div className="text-center" style={{ direction: 'rtl' }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-l from-white to-gray-200 bg-clip-text text-transparent" style={{ fontFamily: 'Karantina, sans-serif', direction: 'rtl' }}>
              סביבת לומדות למכללה הלאומית לאיתנות ישראלית
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Assistant, sans-serif', direction: 'rtl' }}>
              גלו/י את אוסף הלומדות הדיגיטליות החדשניות שפותחו במכללה לאיתנות ישראלית. 
              למידה אינטראקטיבית, מותאמת אישית ומתקדמת טכנולוגית.
            </p>
            <div className="mt-10 flex justify-center" style={{ direction: 'rtl' }}>
              <div className="inline-flex items-center gap-2 px-6 py-3 text-gray-200" style={{ fontFamily: 'Assistant, sans-serif', direction: 'rtl' }}>
                <span className="font-medium">חדשנות בלמידה צבאית</span>
                <Sparkles className="h-5 w-5 text-yellow-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Modules Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" style={{ direction: 'rtl' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ direction: 'rtl' }}>
          <Tabs defaultValue="military" className="w-full" style={{ direction: 'rtl' }}>
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-16" style={{ direction: 'rtl' }}>
              <TabsTrigger value="military" style={{ fontFamily: 'Assistant, sans-serif', direction: 'rtl' }}>לומדות צבאיות</TabsTrigger>
              <TabsTrigger value="civilian" style={{ fontFamily: 'Assistant, sans-serif', direction: 'rtl' }}>לומדות אזרחיות</TabsTrigger>
              <TabsTrigger value="immersive" style={{ fontFamily: 'Assistant, sans-serif', direction: 'rtl' }}>כיתה אימרסיבית</TabsTrigger>
            </TabsList>
            
            {loading ? (
              <div className="text-center text-gray-500" style={{ fontFamily: 'Assistant, sans-serif', direction: 'rtl' }}>טוען לומדות...</div>
            ) : (
              <>
                <TabsContent value="military" style={{ direction: 'rtl' }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" style={{ direction: 'rtl' }}>
                    {militaryModules.map((module) => <ModuleCard key={module.id} module={module} cardColors={cardColors} />)}
                  </div>
                </TabsContent>
                <TabsContent value="civilian" style={{ direction: 'rtl' }}>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" style={{ direction: 'rtl' }}>
                    {civilianModules.map((module) => <ModuleCard key={module.id} module={module} cardColors={cardColors} />)}
                  </div>
                </TabsContent>
                <TabsContent value="immersive" style={{ direction: 'rtl' }}>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" style={{ direction: 'rtl' }}>
                    {immersiveModules.map((module) => <ModuleCard key={module.id} module={module} cardColors={cardColors} />)}
                  </div>
                </TabsContent>
              </>
            )}
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50" style={{ direction: 'rtl' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ direction: 'rtl' }}>
          <div className="text-center mb-16" style={{ direction: 'rtl' }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Karantina, sans-serif', direction: 'rtl' }}>
              למה לבחור בלומדות שלנו?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ direction: 'rtl' }}>
            {features.map((feature, index) => (
              <div key={index} className="text-center group p-4" style={{ direction: 'rtl' }}>
                <div className="relative mx-auto w-20 h-20 mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <feature.icon className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Karantina, sans-serif', direction: 'rtl' }}>
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'Assistant, sans-serif', direction: 'rtl' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
