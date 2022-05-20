import { useEffect } from "react";

const useImportScript = (resourceUrl: string) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = resourceUrl;
    script.async = true;
    const appDiv = document.getElementById("App");
    appDiv?.appendChild(script);
    return () => {
      appDiv?.removeChild(script);
    };
  }, [resourceUrl]);
};

export default useImportScript;
