import { useEffect } from "react";
import { initViewer } from "@/lib/aps";
// Function component
const Viewer = () => {
  const urn =
    "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cHJveWVjdG9fYXBzL0Nvbmp1bnRvJTIwUmVzaWRlbmNpYWwlMjBFU1RfVjI0LnJ2dA";

  useEffect(() => {
    initViewer(urn);
  }, []);

  // const response = fetch("http://localhost:3000/auth/get-token");

  return (
    <div className="w-full h-screen">
      <div className="flex w-full h-full relative bg-gradient-to-b from-primary">
        <div className="w-full h-full" id="myViewer"></div>
      </div>
    </div>
  );
};

export default Viewer;
