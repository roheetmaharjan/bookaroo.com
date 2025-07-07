import { Loader2 } from "lucide-react";
export default function Loading(){
    return (
      <div className="flex items-center justify-center w-full py-8">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        <span className="ml-2 text-blue-500">Loading...</span>
      </div>
    );
}