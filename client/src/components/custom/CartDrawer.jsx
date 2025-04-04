import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { Badge } from "../ui/badge";
import { useSelector, useDispatch } from "react-redux";
import CartProduct from "./CartProduct";
import LinkButton from "./LinkButton";
import {  emptyCart } from "@/redux/slices/cartSlice"; 
import { useToast } from "@/hooks/use-toast";

const CartDrawer = () => {
  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const { toast } = useToast();

  const handleEmptyCart = () => {
    dispatch(emptyCart());
    toast({ title: "Cart emptied successfully" });
  };

  return (
    <Drawer>
      <DrawerTrigger className="relative">
        {totalQuantity > 0 && (
          <Badge className={`absolute px-1 py-0`}>{totalQuantity}</Badge>
        )}
        <ShoppingCart
          className="text-gray-800 dark:text-white hover:scale-105 transition-all ease-in-out cursor-pointer"
          strokeWidth={1.3}
          size={28}
        />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Shopping Cart</DrawerTitle>
          <DrawerDescription>
            Total Items: {totalQuantity}, Total Price: ₹{totalPrice}
          </DrawerDescription>
        </DrawerHeader>

        <div className="flex flex-col sm:flex-row justify-start gap-3 h-[70vh] overflow-y-scroll sm:overflow-y-hidden sm:h-auto mx-3">
          {cartItems.length === 0 ? (
            <h2 className="text-primary text-sm">
              Nothing To Show, Please add some products...
            </h2>
          ) : (
            cartItems.map((item) => <CartProduct key={item._id} {...item} />)
          )}
        </div>

        <DrawerFooter className="flex flex-col gap-3">
          <div className="flex justify-between gap-3">
            <Button 
              variant="destructive" 
              onClick={handleEmptyCart}
              disabled={cartItems.length === 0}
            >
              Empty Cart
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Continue Shopping</Button>
            </DrawerClose>
          </div>
          <LinkButton 
            to="/checkout" 
            text="Checkout"
            disabled={cartItems.length === 0}
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;