import { useEffect,useState } from "react";


export default function Loader() {
const [showLogo,setShowLogo]= useState(true);
useEffect(() => {
  const timer =setTimeout(() => {
   setShowLogo(false);
  },1000);

return () => clearTimeout (timer);
}, []);

if (!showLogo) {
  return null;
}

  return (
    <div className="logo-container pr-15">
<h1 className="text-white text-[45px] font-mono ml-20 sm: text-center">
          Ayo<span className="blink text-[#e4ae08]">Forge</span>.
        </h1>
    </div>
  );
};
