import Image from "next/image";

export default function Home() {
  const imageStyle = {};
  return (
    <div>
      <center>
        <Image
          src="/gps_indo.png"
          alt="GPS Indo"
          width={`${1500}`}
          height={`${100}`}
          style={{
            top: 0,
            
          }}
        />
      </center>
    </div>
  );
}
