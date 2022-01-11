import React from "react";
import styled from "styled-components";
import { listNft } from "./dummyData";
import ProgressBar from "@ramonak/react-progress-bar";
const NFTItem = ({ item }) => {
  return (
    <Container>
      <Row>
        <Image src={item.img} />
        <Col className="pd-l-box">
          <Row className="pd-b-20 pd-t-10 layout-between">
            <Row>
              <Text className="bold">{item.time}</Text>
              {item.active && (
                <Text className="pd-center-5 mr-l-15 text-label-r">
                  34명 대기 중
                </Text>
              )}
            </Row>
            {item.active && (
              <ButtonRight className="align-center">
                내 예약 내역{" "}
                <Image
                  className="btn-right"
                  src="./Ic_Arrow-right_Active.svg"
                />
              </ButtonRight>
            )}
          </Row>
          {item.active && (
            <>
              <Row className="layout-between space">
                <Text className="text-label">{item.label}</Text>
                <Text className="text-price">
                  {item.value}
                  <Text className="text-value normal-text">KUSDT</Text>
                </Text>
              </Row>
              <Row className="layout-between space">
                <Text className="text-label">{item.label2}</Text>
                <Text className="text-value">{item.value2}</Text>
              </Row>
            </>
          )}
          {!item.active && (
            <>
              <Col>
                <Text className="text-price pd-b-10" >
                <Text className="pd-r-5 text-value normal-text">남은 수량</Text>
                  {item.time}
                  <Text className="pd-l-5 text-value normal-text">Time</Text>
                </Text>
                <ProgressBar bgColor="#ec5b37" completed={90} />
              </Col>
            </>
          )}
        </Col>
      </Row>
      <Row className="align-center layout-between">
        <Row className="align-center">
          <Image className="kusdt" src="./NFT_KUSDT.png" />
          <Text className="bold">
            1,000
            <Text className="pd-l-5 normal-text">KUSDT</Text>
          </Text>
        </Row>
        <Row>
          <Button isDisable={item.active?false:true} disabled={item.active?false:true}>Stake HUb</Button>
          <Button isDisable={item.active?false:true} hasBg disabled={item.active?false:true}>Buy HUb</Button>
        </Row>
      </Row>
    </Container>
  );
};
const NFTBox = ({}) => {
  return (
    <>
      <TextTitle>NFT</TextTitle>
      {listNft.map((item, index) => (
        <NFTItem key={`nft-${index}`} item={item} />
      ))}
    </>
  );
};
const ButtonRight = styled.button`
  border: none;
  background-color: transparent;
`;
const Text = styled.span`
  color: #000;
  font-size: 20px;
`;
const TextTitle = styled.h1`
  color: #313644;
  font-size: 24px;
`;
const Image = styled.img`
  height: 168px;
  width: 168px;
  border-radius: 10px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const Button = styled.button`
  height: 56px;
  width: 144px;
  border-radius: 10px;
  border: 1px solid #c9ccd4;
  font-weight: bold;
  font-size: 20px;
  background-color: ${(props) => {
      if(props.isDisable && props.hasBg){
        return "#c9ccd4";
      }
    if (props.hasBg) {
      return "#ec5b37";
    } else {
      return "#fff";
    }
  }};
  color: ${(props) => {
      if(props.isDisable && !props.hasBg){
        return "grey";
      }else if(props.isDisable && props.hasBg){
        return "#fff";
      }
    if (props.hasBg) {
      return "#fff";
    } else {
      return "#000";
    }
  }};
  margin-right: 10px;
`;
const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 20px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.1);
  .btn-right {
    height: 15px;
    width: 20px;
  }
  .align-center {
    align-items: center;
  }
  .pd-r-5{
      padding-right:5px;
  }
  .text-label-r {
    background-color: #000;
    color: #fff;
    font-size: 13px;
    text-align: center;
    line-height: 20px;
    border-radius: 8px;
  }
  .kusdt {
    width: 32px;
    height: 32px;
  }
  .text-label {
    font-size: 14px;
    color: #52596c;
  }
  .text-value {
    font-size: 14px;
    color: #16181e;
    font-weight: bold;
  }
  .text-price {
    font-size: 16px;
    color: #ec5b37;
    font-weight: bold;
  }
  .bold {
    font-weight: bold;
  }
  .layout-between {
    justify-content: space-between;
  }
  .space {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .pd-l-box {
    padding-left: 15px;
  }
  .pd-l-5 {
    padding-left: 5px;
  }
  .mr-l-15 {
    margin-left: 15px;
  }
  .pd-center-5 {
    padding-left: 5px;
    padding-right: 5px;
  }
  .pd-b-20 {
    padding-bottom: 20px;
  }
  .pd-b-10 {
    padding-bottom: 10px;
  }
  .pd-t-10 {
    padding-top: 10px;
  }
  .normal-text {
    font-weight: 400;
  }
`;
export default NFTBox;
