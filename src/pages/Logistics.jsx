
import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import MobileViewer from "../components/MobileViewer";

export default function LogisticsPage() {
  const moduleUrl = "https://inri-pkrf.github.io/logistics-digital/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-cyan-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg mb-6">
            <h1 className="text-5xl font-bold text-gray-900" style={{ fontFamily: 'Karantina, sans-serif' }}>לומדת לוגיסטיקה</h1>
            <Truck className="w-10 h-10 text-indigo-600" />
          </div>
          
          {/* The badge element "מותאמת למובייל בלבד" is removed as per the outline. */}
          {/* <div className="flex justify-center mb-6 text-lg">
            <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200 px-4 py-2 flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              <span>מותאמת למובייל בלבד</span>
            </Badge>
          </div> */}
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Assistant, sans-serif' }}>
            לומדה מתמחה בנושא הלוגיסטיקה הצבאית, מותאמת במיוחד לשימוש במובייל
          </p>
        </div>

        {/* Main Content Card */}
        <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-cyan-600 text-white">
            <CardTitle className="text-2xl flex items-center gap-3" style={{ fontFamily: 'Karantina, sans-serif' }}>
              <span>תצוגת מובייל</span>
              <Smartphone className="w-6 h-6" />
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Karantina, sans-serif' }}>
                צפייה בלומדה במובייל
              </h3>
              <p className="text-gray-600 mb-6" style={{ fontFamily: 'Assistant, sans-serif' }}>
                לומדת הלוגיסטיקה מותאמת במיוחד לשימוש במובייל לנוחות מקסימלית בשטח
              </p>
            </div>
            
            <div className="flex justify-center">
              <MobileViewer url={moduleUrl} title="לומדת לוגיסטיקה" />
            </div>
          </CardContent>
        </Card>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card className="bg-white/70 backdrop-blur-sm">
            <CardContent className="p-6">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                מותאם לשטח
              </h4>
              <p className="text-gray-600 text-sm">
                עיצוב מובייל ייעודי המאפשר שימוש נוח וקל גם בתנאי שטח מורכבים
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/70 backdrop-blur-sm">
            <CardContent className="p-6">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                תכנים מקצועיים
              </h4>
              <p className="text-gray-600 text-sm">
                לומדה מקצועית לוגיסטיקה צבאית עם תכנים מעמיקים ואינטראקטיביים
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
