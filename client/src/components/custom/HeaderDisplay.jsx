import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeaderDisplay = () => {
  const imagesData = [
    "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1679177183775-75c2e0d0d209?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2FtaW5nJTIwc2V0dXB8ZW58MHwwfDB8fHww",
    "https://images.unsplash.com/photo-1566055972289-c52022ae23b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FtaW5nJTIwaGVhZHBob25lfGVufDB8MHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1620332326501-584c3d6bf607?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdhbWluZyUyMG1vdXNlfGVufDB8MHwwfHx8MA%3D%3D",
  ];
  return (
    <Carousel className="my10 mx-auto w-[93vw] overflow-x-clip sm:overflow-x-visible">
      <CarouselContent>
        {imagesData.map((image) => (
          <CarouselItem key={image}>
            <img
              src={image}
              loading="lazy"
              className=" object-cover w-full h-[60vh] rounded-3xl"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default HeaderDisplay;
