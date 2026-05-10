import { useState , useEffect } from "react";
import data from "../../data/MedifyData.json";
import SwiperRow from "../comman/SwiperRow";




const ContinueRow = () => {
  const [continueData, setContinueData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("continueListening")) || [];

    // 🔥 Extract matching subjects
    const subjects = data.libraries.flatMap((lib) => lib.subjects);

    const filtered = stored
      .map((item) => {
        const subject = subjects.find(
          (sub) => sub.id === item.subjectId
        );

        return subject ? { ...subject, progress: item.progress } : null;
      })
      .filter(Boolean);

    setContinueData(filtered);
  }, []);

  if (continueData.length === 0) return null;

  return (
    <SwiperRow
      title="Continue your Journey"
      data={continueData}
    />
  );
};

export default ContinueRow;