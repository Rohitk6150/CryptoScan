import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import CoinCard from "./CoinCard";
import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  RadioGroup,
  Radio,
  Text,
  VStack,
} from "@chakra-ui/react";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
    const changePage=(page)=>
{
  setPage(page);
  setLoading(true);
}

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&per_page=100&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
    
  }, [currency, page]);
  const btns = new Array(132).fill(1);

  if (error) {
    return <ErrorComponent message={"Error While Fetching Coins"}/>;
  }

  return (
    <Container maxW={"container.xl"} maxWidth={"full"} backgroundColor={"white"}>
      {loading ? (
        <Loader />
      ) : (
        <>
        <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
          <HStack spacing={"4"} textColor={"black"}>
            <Radio value={"inr"}>INR</Radio>
            <Radio value={"usd"}>USD</Radio>
            <Radio value={"eur"}>EUR</Radio>
          </HStack>
        </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}  textColor={"black"} maxWidth={"full"}>
            {coins.map((i) => (
              <CoinCard
                id={i.id}
                key={i.id}
                name={i.name}
                price={i.current_price}
                img={i.image}
                symbol={i.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>

          <HStack w={"full"} overflowX={"auto"} p={"8"}>
            {btns.map((item,index)=>(
                          <Button
                          key={index}
                          bgColor={"blackAlpha.900"}
                          color={"white"}
                          onClick={() => changePage(index+1)}
                        >
                          {index + 1}
                      
                        </Button>
            ))}

          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
