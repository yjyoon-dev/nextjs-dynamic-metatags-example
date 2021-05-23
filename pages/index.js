import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import axios from "axios";
import Link from "next/link";
import responseData from "../data/response.json";

const MainPage = () => {
  const [childList, setChildList] = useState([]);
  const [loading, setLoading] = useState(false);

  /*
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = `http://www.safe182.go.kr/api/lcm/findChildList.do?esntlId=${process.env.REACT_APP_API_ID}&authKey=${process.env.REACT_APP_API_KEY}&rowSize=50`;
        const response = axios.get(url);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  */

  useEffect(() => setChildList(responseData.list), []);

  return (
    <>
      <header className="main_page_header">
        <p className="logo">실종 아동 전단지</p>
      </header>
      <div className="item_list">
        {childList.map((child, index) => (
          <Card key={index} className="item">
            <CardImg
              top
              width="100%"
              src={`http://www.safe182.go.kr/api/lcm/imgView.do?msspsnIdntfccd=${child.msspsnIdntfccd}`}
              alt="img"
            />
            <CardBody>
              <CardTitle tag="h5">{child.nm}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {child.sexdstnDscd}
                {"/"}
                {child.ageNow}세
              </CardSubtitle>
              <CardText className="card_text">{child.occrAdres}</CardText>
              <Link
                href={{
                  pathname: "/detail/[id]",
                  query: {
                    id: child.msspsnIdntfccd,
                    name: child.nm,
                    sex: child.sexdstnDscd,
                    age: child.ageNow,
                    address: child.occrAdres,
                  },
                }}
              >
                <Button>자세히 보기</Button>
              </Link>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
};

export default MainPage;
