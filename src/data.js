console.log("lol", localStorage.getItem("QAData"));
export const QAData = localStorage.getItem("QAData")
  ? JSON.parse(localStorage.getItem("QAData"))
  : [];
