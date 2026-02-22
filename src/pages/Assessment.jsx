import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Smartphone, ExternalLink, ShieldCheck, AlertCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import MobileViewer from "../components/MobileViewer";

export default function AssessmentPage() {
  const moduleUrl = "https://inri-pkrf.github.io/assessment2026/";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openInNewTab = () => {
    window.open(moduleUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg mb-6">
            <h1 className="text-5xl font-bold text-gray-900" style={{ fontFamily: 'Karantina, sans-serif' }}>ניהול מצבי חירום ברשות המקומית</h1>
            <ShieldCheck className="w-10 h-10 text-sky-600" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Assistant, sans-serif' }}>
            לומדה להערכת מוכנות וניהול מצבי חירום, מותאמת למחשב ומובייל.
          </p>
        </div>

        <Tabs defaultValue="mobile" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="mobile" className="flex items-center gap-2" style={{ fontFamily: 'Assistant, sans-serif' }}>
              <span>גרסת מובייל</span>
              <Smartphone className="w-4 h-4" />
            </TabsTrigger>
            <TabsTrigger value="desktop" className="flex items-center gap-2" style={{ fontFamily: 'Assistant, sans-serif' }}>
              <span>גרסת מחשב</span>
              <Monitor className="w-4 h-4" />
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mobile">
            <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0">
              <CardHeader className="bg-gradient-to-r from-sky-500 to-blue-600 text-white">
                <CardTitle className="text-2xl flex items-center gap-3" style={{ fontFamily: 'Karantina, sans-serif' }}>
                  <span>גרסת מובייל</span><Smartphone className="w-6 h-6" />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                {isMobile ? (
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg"><Smartphone className="w-12 h-12 text-white" /></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Karantina, sans-serif' }}>פתיחת הלומדה בדפדפן</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed max-w-md mx-auto" style={{ fontFamily: 'Assistant, sans-serif' }}>הלומדה תיפתח בדפדפן נפרד במובייל שלכם/ן לחוויית למידה מיטבית.</p>
                    <Button onClick={openInNewTab} className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group" style={{ fontFamily: 'Assistant, sans-serif' }}>
                      <span>פתיחת הלומדה בדפדפן</span>
                      <ExternalLink className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    </Button>
                  </div>
                ) : (
                  <div className="flex justify-center"><MobileViewer url={moduleUrl} title="ניהול מצבי חירום" /></div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="desktop">
            <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                <CardTitle className="text-2xl flex items-center gap-3" style={{ fontFamily: 'Karantina, sans-serif' }}>
                  <span>גרסת מחשב</span><Monitor className="w-6 h-6" />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                {isMobile && (
                  <Alert className="mb-6 border-orange-200 bg-orange-50"><AlertCircle className="h-4 w-4 text-orange-600" /><AlertDescription className="text-orange-800" style={{ fontFamily: 'Assistant, sans-serif' }}>הערה: גרסה זו מותאמת למחשב וייתכן שלא תוצג כראוי במובייל.</AlertDescription></Alert>
                )}
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg"><Monitor className="w-12 h-12 text-white" /></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Karantina, sans-serif' }}>פתיחה בדפדפן חיצוני</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed max-w-md mx-auto" style={{ fontFamily: 'Assistant, sans-serif' }}>לחוויית למידה מיטבית במחשב, הלומדה תיפתח בחלון דפדפן חדש.</p>
                  <Button onClick={openInNewTab} disabled={isMobile} className={`${isMobile ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'} text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group`} style={{ fontFamily: 'Assistant, sans-serif' }}>
                    <span>פתיחת הלומדה במחשב</span>
                    <ExternalLink className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}