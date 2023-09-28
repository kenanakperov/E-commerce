import { Carousel } from "react-carousel-minimal";

function Slider() {
  const data = [
    {
      image:
        "https://cdn.dribbble.com/users/1371012/screenshots/10786940/rdco_social_v_co3_4x.png",
    },
    {
      image:
        "https://media.istockphoto.com/id/1134757600/photo/new-collection-nameplate-in-female-clothes-store.jpg?s=1024x1024&w=is&k=20&c=ijXUm5yyonE-2olucmWfnkjghkk66iG4WEUi__zrybA=",
    },
    {
      image:
        "https://social.massimodutti.com/paper/wp-content/uploads/2019/04/TFFM-full-EN.jpg",
    },
    {
      image:
        "https://bugatti-shoes.com/cdn/shop/files/bugatti_-_HOMEPAGE_-_mobile_banner_-_NEW_COLLECTION_-_2600x1800px_-_DE_3bd13537-d612-40a9-b2a9-2fbb81affd0f.jpg?v=1675934401&width=644",
    },
    {
      image:
        "https://www.houseofbruar.com/images/categories/L_Summer_Col_Banner.jpg",
    },
    {
      image:
        "https://images.ctfassets.net/udk41sh7kfzj/3P9xXiUaIlxydg033YmCPi/9ba7581f948da21814f28d6491fd2e02/Free-est-Inline_NoCTA.jpg?w=1280&q=80&fm=jpg&fl=progressive",
    },
    {
      image: "https://robbreport.com/wp-content/uploads/2020/07/trunk.jpg",
    },
  ];


  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            radius="10px"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
