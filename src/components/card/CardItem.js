const CardItem = ({ title, description, image }) => {
  return (
    <div className="bg-gray-200 rounded flex flex-col ">
      <h4 cl>{title}</h4>
      <p className="flex-1">{description}</p>
      <div className="w-full h-48">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
export default CardItem;
