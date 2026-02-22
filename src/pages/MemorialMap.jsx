import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, ExternalLink, Map, AlertTriangle } from "lucide-react";

export default function MemorialMapPage() {
  const moduleUrl = "https://map-00a3260c.base44.app/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openInNewTab = () => {
    window.open(moduleUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-200 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg mb-6">
            <h1 className="text-5xl font-bold text-gray-900" style={{ fontFamily: 'Karantina, sans-serif' }}>מפת הנצחה - שביעי באוקטובר</h1>
            <Map className="w-10 h-10 text-gray-600" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Assistant, sans-serif' }}>
            מפת הנצחה אינטראקטיבית לזכר אירועי השביעי באוקטובר.
          </p>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0">
          <CardHeader className="bg-gradient-to-r from-gray-500 to-slate-600 text-white">
            <CardTitle className="text-2xl flex items-center gap-3" style={{ fontFamily: 'Karantina, sans-serif' }}>
              <span>הפעלה בכיתה אימרסיבית</span>
              <Monitor className="w-6 h-6" />
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-500 to-slate-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Monitor className="w-12 h-12 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Karantina, sans-serif' }}>
                פתיחה בסביבה מותאמת
              </h3>
              
              <div className="flex items-center justify-center text-center p-3 rounded-lg bg-yellow-100 text-yellow-800 my-6 max-w-md mx-auto">
                <AlertTriangle className="w-5 h-5 ml-3 flex-shrink-0" />
                <span style={{ fontFamily: 'Assistant, sans-serif' }}>לתצוגה מיטבית, יש להפעיל לומדה זו בכיתה האימרסיבית על שלושה מסכים.</span>
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed max-w-md mx-auto" style={{ fontFamily: 'Assistant, sans-serif' }}>
                לחץ/י על הכפתור לפתיחת הלומדה בחלון דפדפן חדש.
              </p>
              
              <Button
                onClick={openInNewTab}
                className="bg-gradient-to-r from-gray-600 to-slate-700 hover:from-gray-700 hover:to-slate-800 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                style={{ fontFamily: 'Assistant, sans-serif' }}
              >
                <span>פתיחת הלומדה</span>
                <ExternalLink className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}