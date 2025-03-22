type MapProps = {
  src: string;
};

const Map = ({ src }: MapProps) => {
  return (
    <iframe
      className="absolute left-0 top-0 h-full w-full border-0"
      src={src}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default Map;
