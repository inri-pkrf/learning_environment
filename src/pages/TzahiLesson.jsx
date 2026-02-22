import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, ExternalLink, BookOpen, ArrowRight } from "lucide-react";

export default function TzahiLessonPage() {
  const moduleUrl = "https://sites.google.com/view/inri-tzahi/home";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openInNewTab = () => {
    window.open(moduleUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 p-6" style={{ direction: 'rtl' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg mb-6">
            <h1 className="text-5xl font-bold text-gray-900" style={{ fontFamily: 'Karantina, sans-serif' }}>שיעור דיגיטלי של צח"י</h1>
            <BookOpen className="w-10 h-10 text-emerald-600" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Assistant, sans-serif' }}>
            שיעור דיגיטלי מקיף לנושא צוותי חירום יישוביים, מותאם למחשב.
          </p>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0">
          <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
            <CardTitle className="text-2xl flex items-center gap-3" style={{ fontFamily: 'Karantina, sans-serif' }}>
              <span>גרסת מחשב</span>
              <Monitor className="w-6 h-6" />
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Monitor className="w-12 h-12 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Karantina, sans-serif' }}>
                פתיחה בדפדפן חיצוני
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed max-w-md mx-auto" style={{ fontFamily: 'Assistant, sans-serif' }}>
                השיעור הדיגיטלי מותאם לשימוש במחשב בלבד. הלומדה תיפתח בחלון דפדפן חדש לחוויית למידה מיטבית.
              </p>
              
              <Button
                onClick={openInNewTab}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                style={{ fontFamily: 'Assistant, sans-serif' }}
              >
                <span>פתיחת השיעור הדיגיטלי</span>
                <ArrowRight className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                <ExternalLink className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              </Button>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500" style={{ fontFamily: 'Assistant, sans-serif' }}>
                <span>השיעור ייפתח בחלון חדש</span>
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card className="bg-white/70 backdrop-blur-sm">
            <CardContent className="p-6">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                תכנים מקצועיים
              </h4>
              <p className="text-gray-600 text-sm">
                שיעור מקיף המכסה את כל נושאי צוותי החירום היישוביים
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/70 backdrop-blur-sm">
            <CardContent className="p-6">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                חומרי עזר דיגיטליים
              </h4>
              <p className="text-gray-600 text-sm">
                כולל מצגות, סרטונים וחומרי קריאה נוספים
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}