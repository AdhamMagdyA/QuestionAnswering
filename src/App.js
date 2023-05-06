import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import InputForm from "./components/InputForm";
import QAList from "./components/QAList";
import { QAData } from "./data";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [data, setData] = useState(QAData);
  console.log("data", data);
  const handleAddQA = (QA) => {
    localStorage.setItem("QAData", JSON.stringify([...data, QA]));
    setData([...data, QA]);
    toast.success("!تمت الاضافة بنجاح");
  };
  const deleteAll = () => {
    setData([]);
    QAData.splice(0, QAData.length);
    localStorage.removeItem("QAData");
    toast.error("!تم مسح الاسئلة");
  };
  const deleteQA = (index) => {
    setData(data.filter((QA, i) => i !== index));
    QAData.splice(index, 1);
    localStorage.setItem("QAData", JSON.stringify(QAData));
    toast.error("!تم مسح السؤال");
  };
  const notifyError = () => toast.error("لم يتم ادخال السؤال و الجواب");
  return (
    <Container className="App text-center p-3">
      <Row className="justify-content-center px-5">
        <Col sm="4 text-center  fs-2">سؤال و جواب</Col>
        <Col sm="8">
          <InputForm onAdd={handleAddQA} notify={notifyError} />
          <div className="my-3"></div>
          <QAList data={data} deleteQuestion={deleteQA} />
          {data.length ? (
            <Button className="my-2 w-100" onClick={deleteAll}>
              مسح الكل
            </Button>
          ) : null}
        </Col>
      </Row>
      <ToastContainer autoClose={2000} />
    </Container>
  );
}

export default App;
