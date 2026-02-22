import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Heart } from "lucide-react";
import MobileViewer from "../components/MobileViewer";

export default function IsraeliSocietyPage() {
  const moduleUrl = "https://inri-pkrf.github.io/israeli-society/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg mb-6">
            <h1 className="text-5xl font-bold text-gray-900" style={{ fontFamily: 'Karantina, sans-serif' }}>לומדה לחברה הישראלית</h1>
            <Heart className="w-10 h-10 text-rose-600" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Assistant, sans-serif' }}>
            הצגת פניה השונות של החברה הישראלית, מותאמת במיוחד לשימוש במובייל.
          </p>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0">
          <CardHeader className="bg-gradient-to-r from-rose-500 to-pink-600 text-white">
            <CardTitle className="text-2xl flex items-center gap-3" style={{ fontFamily: 'Karantina, sans-serif' }}>
              <span>תצוגת מובייל</span>
              <Smartphone className="w-6 h-6" />
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="flex justify-center">
              <MobileViewer url={moduleUrl} title="לומדה לחברה הישראלית" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}