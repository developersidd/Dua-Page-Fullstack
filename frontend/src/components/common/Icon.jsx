import Image from "next/image";

function Icon({ name, alt, classes }) {
  return (
    <Image
      className={classes}
      src={`/assets/icons/${name}`}
      alt={alt}
      width="64"
      height="64"
    />
  );
}

export default Icon;
