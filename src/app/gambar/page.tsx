"use client";

import { Box, Center, Image } from "@mantine/core";

export default function Gambar() {
  return (
    <>

    <Center >
   <Box>
   <Image
   bg={"black"}

        src="/gps_2.svg"
        alt="GPS Indo"
        width={`${100+ "vw"}`}
        height={`${100+"vh"}`}
        // sx={{
        //     margin: 10
        // }}
      />
   </Box>
    </Center>
    </>
  );
}
