
import React from "react";
import { Button } from "@/components/ui/button";
import { RotateCcw, Home, ArrowRight, ArrowLeft } from "lucide-react";

export default function MobileViewer({ url, title }) {
  const iframeRef = React.useRef(null);

  const refreshIframe = () => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  return (
    <div className="mx-auto w-full" style={{ maxWidth: '380px' }}>
      {/* iPhone SE Frame */}
      <div className="relative bg-black rounded-[2.5rem] p-3 shadow-2xl">
        {/* Phone bezel */}
        <div className="relative bg-white rounded-[2.25rem] overflow-hidden">
          {/* Status bar */}
          <div className="bg-black text-white text-xs px-4 py-1 flex justify-between items-center">
            <span>9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-2 bg-white rounded-sm"></div>
              <div className="w-6 h-2 border border-white rounded-sm"></div>
            </div>
          </div>
          
          {/* Browser toolbar */}
          <div className="bg-gray-100 px-4 py-2 flex items-center justify-between border-b">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.history.back()}
                className="p-1 h-8 w-8"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.history.forward()}
                className="p-1 h-8 w-8"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex-1 mx-2">
              <div className="bg-white rounded-lg px-3 py-1 text-xs text-gray-600 text-center truncate">
                {title}
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={refreshIframe}
              className="p-1 h-8 w-8"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Content area */}
          <div className="overflow-hidden" style={{ height: '650px' }}>
            <iframe
              ref={iframeRef}
              src={url}
              className="w-full h-full border-0"
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-presentation"
            />
          </div>
          
          {/* Home indicator */}
          <div className="bg-white pb-2 pt-1 flex justify-center">
            <div className="w-32 h-1 bg-black rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
