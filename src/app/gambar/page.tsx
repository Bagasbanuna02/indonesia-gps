"use client";

import { Box, Center, Image } from "@mantine/core";

export default function Gambar() {
  return (
    <>

    <Center>
   <Box>
   <Image
        src="https://raw.githubusercontent.com/bipproduction/eagle-eye-project/16cbc58d5d0058f2045c996cf5eb27333f1cdb81/public/gps_2.svg?token=A5B2NEDSGGZNAG7UOA3XFQDEYNOLG"
        alt="GPS Indo"
        width={`${100+ "vw"}`}
        height={`${100+"vh"}`}
        sx={{
            margin: 10
        }}
      />
   </Box>
    </Center>
    </>
  );
}
