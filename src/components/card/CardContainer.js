import CardItem from "./CardItem";

const CardContainer = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item, index) => (
        <CardItem key={index} {...item} />
      ))}
    </div>
  );
};
export default CardContainer;
