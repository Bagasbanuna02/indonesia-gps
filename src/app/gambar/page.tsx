"use client";

import { AspectRatio, Box, Center, Image } from "@mantine/core";

export default function Gambar() {
  return (
    <>
      <Box>
          
          <AspectRatio ratio={720 / 1080} maw={300} mx="auto">
        <Image
        bg={"black"}
          src="/gps_2.svg"
          alt="Panda"
        />
      </AspectRatio>
          </Box>
    </>
  );
}
