
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, ExternalLink, Stethoscope, ArrowRight } from "lucide-react";

export default function MedicinePage() {
  const moduleUrl = "https://inri-pkrf.github.io/lomda-medicine-guide/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openInNewTab = () => {
    window.open(moduleUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg mb-6">
            <h1 className="text-5xl font-bold text-gray-900" style={{ fontFamily: 'Karantina, sans-serif' }}>לומדת רפואה</h1>
            <Stethoscope className="w-10 h-10 text-green-600" />
          </div>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Assistant, sans-serif' }}>
            לומדה מקצועית לרפואה צבאית המכילה תכנים מתקדמים ואינטראקטיביים לחיילות וחיילים
          </p>
        </div>

        {/* Main Content Card */}
        <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0">
          <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
            <CardTitle className="text-2xl flex items-center gap-3" style={{ fontFamily: 'Karantina, sans-serif' }}>
              <span>גרסת מחשב</span>
              <Stethoscope className="w-6 h-6" />
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Monitor className="w-12 h-12 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Karantina, sans-serif' }}>
                פתיחה בדפדפן חיצוני
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed max-w-md mx-auto" style={{ fontFamily: 'Assistant, sans-serif' }}>
                לומדת הרפואה מותאמת לשימוש במחשב בלבד. הלומדה תיפתח בחלון דפדפן חדש לחוויית למידה מיטבית.
              </p>
              
              <Button
                onClick={openInNewTab}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                style={{ fontFamily: 'Assistant, sans-serif' }}
              >
                <span>פתיחת הלומדה במחשב</span>
                <ArrowRight className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                <ExternalLink className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              </Button>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500" style={{ fontFamily: 'Assistant, sans-serif' }}>
                <span>הלומדה תיפתח בחלון חדש</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card className="bg-white/70 backdrop-blur-sm">
            <CardContent className="p-6">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                תכנים מקצועיים
              </h4>
              <p className="text-gray-600 text-sm">
                תכנים רפואיים מתקדמים שפותחו על ידי מומחות ומומחים בתחום הרפואה הצבאית
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/70 backdrop-blur-sm">
            <CardContent className="p-6">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                למידה אינטראקטיבית
              </h4>
              <p className="text-gray-600 text-sm">
                חוויית למידה מותאמת לסביבה הצבאית עם כלים אינטראקטיביים מתקדמים
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
