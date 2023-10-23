import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const SearchForm = styled(Form)`
  margin-top: 30px;
`;

const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  useSelector((state) => state);
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };
  return (
    <SearchForm onSubmit={searchByName} className="search-form">
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="키워드를 입력하세요"
            onChange={(event) => setKeyword(event.target.value)}
          />
        </Col>
        <Col>
          <Button type="submit">찾기</Button>
        </Col>
      </Row>
    </SearchForm>
  );
};

export default SearchBox;
