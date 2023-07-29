"use client";

import {
  AspectRatio,
  Box,
  Center,
  Flex,
  Grid,
  Group,
  Image,
  Text,
} from "@mantine/core";

import { AiOutlineArrowRight } from "react-icons/ai";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import { useState, useEffect } from 'react';
import { useInterval, useShallowEffect } from '@mantine/hooks';
import _ from "lodash";

export default function Gambar() {

  const [seconds, setSeconds] = useState(111);
  const interval = useInterval(() => setSeconds((s) => _.random(100, 999)), 1000);


  useShallowEffect(() => {
    interval.start();
    return interval.stop;
  },[])


  return (
    <>
    <pre>

    {JSON.stringify(seconds)}
    </pre>
      <Box>
        <Grid>
          <Grid.Col span={"auto"}>
            <AspectRatio ratio={620 / 400} maw={1300} mx="auto" h={"100vh"}>
              <Center h={"100vh"} w={"100%"}>
                <Image
                  //  bg={"black"}
                  src="/gps_2.svg"
                  alt="Panda"
                  // height={"100vh"}
                />
              </Center>
            </AspectRatio>
          </Grid.Col>
          <Grid.Col span={"content"}>
            <Flex
              align={"start"}
              justify={"center"}
              h={"100vh"}
              direction={"column"}
              mr={100}
            >
              <Box
                my={10}
                sx={{
                  color: "white",
                }}
              >
                <Text>DATA MINING VIEW DEVICE:</Text>
                <Text>
                  <BiSolidRightArrowAlt />
                  ANDROID: 203.029.{`${seconds}`}
                </Text>
                <Text>
                  <BiSolidRightArrowAlt />
                  IOS: NULL
                </Text>
                <Text>
                  <BiSolidRightArrowAlt />
                  Huawei: NULL
                </Text>
              </Box>

              <Box
                my={10}
                sx={{
                  color: "white",
                }}
              >
                <Text>AUDIANCE VALUE LOCKED:</Text>
                <Text>
                  <BiSolidRightArrowAlt />
                  ANDROID: 161.938.032
                </Text>
              </Box>

              <Box
                my={10}
                sx={{
                  color: "white",
                }}
              >
                <Text>AUDIANCE VALUE FILTERED:</Text>
                <Text>
                  <BiSolidRightArrowAlt />
                  ANDROID: 21.100.601
                </Text>
              </Box>
            </Flex>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
}
