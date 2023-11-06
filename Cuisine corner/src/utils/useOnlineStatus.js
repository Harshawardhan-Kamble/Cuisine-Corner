import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // Since we want to check online useEffect is used
  const [status, setStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setStatus(false);
    });
    window.addEventListener("online", () => {
      setStatus(true);
    });
  }, []);

  return status;
};
export default useOnlineStatus;
