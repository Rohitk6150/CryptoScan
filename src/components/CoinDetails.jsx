import React, { useEffect,useState } from 'react';
import Loader from './Loader';
import axios from 'axios';
import { Box,Container,Button,Progress,RadioGroup,HStack,Radio, VStack, Text, Image, Stat, StatLabel, StatNumber,StatHelpText, StatArrow,Badge } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { server } from '../index';
import ErrorComponent from './ErrorComponent';
import Chart from './Chart';
// import {
  
//   HStack
// } from "@chakra-ui/react";
const CoinDetails = () => {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("24H");
  const [chartArray, setChartArray] = useState([]);

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";


    const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];

  const switchChartStats = (key) => {
    switch (key) {
      case "24h":
        setDays("24h");
        setLoading(true);
        break;
      case "7d":
        setDays("7d");
        setLoading(true);
        break;
      case "14d":
        setDays("14d");
        setLoading(true);
        break;
      case "30d":
        setDays("30d");
        setLoading(true);
        break;
      case "60d":
        setDays("60d");
        setLoading(true);
        break;
      case "200d":
        setDays("200d");
        setLoading(true);
        break;
      case "1y":
        setDays("365d");
        setLoading(true);
        break;
      case "max":
        setDays("max");
        setLoading(true);
        break;

      default:
        setDays("24h");
        setLoading(true);
        break;
    }
  };




  const params=useParams();

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/${params.id}`
        );

        const { data: chartData } = await axios.get(
          `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );
       
        setCoin(data);
        setChartArray(chartData.prices);
        console.log(chartData.Prices+"!")
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [params.id, currency, days]);
  // console.log(chartArray+"*")

  if (error) {
    return (<ErrorComponent message={"Error While Fetching Coinsdetails"}/>);
  }

  return <Container maxWidth={"container.xl"}>
    {loading?<Loader/>:(
      <>
      
      
      {/* <Box width={"full"} borderWidth={1}>
      <Chart arr={chartArray} currency={currencySymbol} days={days} />

      </Box>


      <HStack p="4" overflowX={"auto"}>
            {btns.map((i) => (
              <Button
                disabled={days === i}
                key={i}
                onClick={() => switchChartStats(i)}
              >
                {i}
              </Button>
            ))}
          </HStack> */}




      <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
          <HStack spacing={"4"}>
            <Radio value={"inr"}>INR</Radio>
            <Radio value={"usd"}>USD</Radio>
            <Radio value={"eur"}>EUR</Radio>
          </HStack>
        </RadioGroup>


        <VStack marginBottom={"10"} spacing={"4"} p="16" alignItems={"flex-start"} boxShadow={"3px 3px 23.5px 2.5px #dddddd"}>

          <Text fontSize={"small"} alignSelf="center" opacity={0.7}>
            Last Updated On{" "}
            {Date(coin.last_updated).split("G")[0]}
          </Text>
          < Image
          src={coin.image.large} 
          width={"16"} 
          height={"16"} 
          boxShadow={"3px 3px 23.5px 5.5px #c8c7c7"}
          borderRadius={"lg"}
          objectFit={"conatin"}
          />

          <Stat>
            <StatLabel>{coin.name}</StatLabel>
            <StatNumber>{currencySymbol}{coin.market_data.current_price[currency]}</StatNumber>


            <StatHelpText>
              <StatArrow type=
              {coin.market_data.price_change_24h>0?"increase":"decrease"}/>
              {coin.market_data.price_change_24h}%
              </StatHelpText>

          </Stat>

          <Badge fontSize={"2xl"} borderRadius={"lg"} bgColor={"blackAlpha.800"} color={"white"}>
            {`#${coin.market_cap_rank}`}
          </Badge>

          <CustomBar  change={`${coin.market_data.price_change_percentage_24h_in_currency[currency]}`}  high={`${currencySymbol}${coin.market_data.high_24h[currency]}`} low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}/>

          <Box w={"full"} p="4">

            <Item title={"Max Supply"} value={coin.market_data.max_supply}/>
            <Item title={"Circulating Supply"} value={coin.market_data.circulating_supply}/>
            <Item title={"All Time Low"} value={coin.market_data.atl[currency]}/>
            <Item title={"All Time High"} value={coin.market_data.ath[currency]}/>
          </Box>


        </VStack>


        <Box width={"full"} borderWidth={1}>
      <Chart arr={chartArray} currency={currencySymbol} days={days} />

      </Box>


      <HStack p="4" overflowX={"auto"}>
            {btns.map((i) => (
              <Button
                disabled={days === i}
                key={i}
                onClick={() => switchChartStats(i)}
              >
                {i}
              </Button>
            ))}
          </HStack>








      </>
    )}
  </Container>
};


const CustomBar=({high,low,change})=>
(
  <VStack w={"full"}>
    <Progress border="2px" borderColor={`change<0?red:teal`} value={change<0?0:change} colorScheme={"teal"} w={"full"} borderRadius={"lg"}/>
    <HStack justifyContent={"space-between"} w={"full"}>
      <Badge children={low} colorScheme={"red"}/>
      <Text fontSize={"sm"}>24H Range</Text>
      <Badge children={high} colorScheme={"green"}/>
    </HStack>
  </VStack>
);

const Item = ({ title, value }) => (
  <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
    <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>
      {title}
    </Text>
    <Text>{value}</Text>
  </HStack>
);

export default CoinDetails
