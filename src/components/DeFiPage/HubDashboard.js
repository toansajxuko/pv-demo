import React from "react";
import styled from "styled-components";
import { listHubDash } from "./dummyData/data";

function HubDashboard() {
  return (
    <Container>
      <TextTitle>HUB 대시 보드</TextTitle>
      {listHubDash.map((item, index) => (
        <ItemDashboard key={`it-${index}`} item={item} />
      ))}
      <ContainerButton>
        <Button hasBg>Buy HUb</Button>
        <Button>Stake HUb</Button>
      </ContainerButton>
    </Container>
  );
}

function ItemDashboard({ item }) {
  return (
    <BoxItem>
      <Text>
        {item.label}
        <Text className="text-Placeholder">{item.placeHolder}</Text>
      </Text>

      <Text className="text-right1">
        {item.labelRight1}
        <Text className="text-right2">{item.labelRight2}</Text>
      </Text>
    </BoxItem>
  );
}
const Button = styled.button`
  height: 56px;
  width: 144px;
  border-radius: 10px;
  border: 1px solid #c9ccd4;
  font-weight:bold;
  font-size:20px;
  background-color:${(props)=> {
      if(props.hasBg){
          return "#ec5b37"
      }else{
        return "#fff"
      }
  }};
  color: ${(props)=> {
      if(props.hasBg){
          return "#fff"
      }else{
        return "#000"
      }
  }};
  margin-right: 10px;
`;
const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const Text = styled.span`
  color: #16181e;
  font-size: 18px;
`;
const BoxItem = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #dddfe5;
  display: flex;
  justify-content: space-between;
`;
const TextTitle = styled.h1`
  color: #ec5b37;
  size: 24px;
  line-height: 42px;
  text-align: left;
`;
const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  /* max-height: 340px; */
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.1);
  .text-Placeholder {
    padding-left: 10px;
    color: #949aac;
    font-size: 14px;
    font-weight: 700;
  }
  .text-right2 {
    color: #16181e;
    font-size: 20px;
    padding-left: 10px;
    font-weight: 700;
  }
  .text-right1 {
    color: #737a8f;
    font-size: 18px;
  }
`;
export default HubDashboard;
