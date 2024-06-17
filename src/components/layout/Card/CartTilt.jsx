import { Tilt } from "react-tilt";

const CartTilt = ({ imageUrl }) => {
  return (
    <Tilt
      className="Tilt md:w-[300px] md:h-[300px] w-[200px] h-[200px] border-r-2 overflow-hidden hover:shadow-[8px_3px_48px_13px_rgba(232,_175,_6,_0.69)]"
      options={{ max: 25 }}
    >
      <div className="Tilt-inner w-full h-full">
        <img src={imageUrl} alt="Tilted Image" />
      </div>
    </Tilt>
  );
};
export default CartTilt;
