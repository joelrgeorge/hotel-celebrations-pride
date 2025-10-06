function Banq_Hall() {
  const rooms = [
    {
      title: "Conference/Banquet Hall",
      overview: "A haven of comfort and elegance...",
      price: "₹5000",
      facilities: [
        { icon: <FaParking />, label: "Free Parking" },
        { icon: <FaConciergeBell />, label: "In-Room Dining" },
        { icon: <FaWifi />, label: "Free Wi-Fi" },
        { icon: <FaSwimmingPool />, label: "Pool Access" },
        { icon: <FaDumbbell />, label: "Fitness Center" }
      ],
      images: [
        "Banq_Hall/IMG_7514.jpg",
        "Banq_Hall/IMG_7517.jpg",
        "Banq_Hall/IMG_7521.jpg",
        "Banq_Hall/IMG_7513.jpg",
        "Banq_Hall/IMG_7537.jpg"
      ],
      flip: false,
    },
  ];

  return (
    <div className="room-layout">
      <Navbar />
      <CommonSection 
        title={"Our Hall"} 
        backgroundImage={getImageUrl("Banq_Hall/IMG_7524.jpg", 1200)}
      />

      {rooms.map((room, index) => (
        <div key={index} className={room.flip ? "room-flip" : ""}>
          <HallDetails
            {...room}
            images={room.images.map((img) => getImageUrl(img, 600))} // ✅ CDN URLs
          />
        </div>
      ))}

      <section className="Image-Section">
        <Subtitle subtitle={'Our Hall'} />
        <Container>
          <h2 className="gallery__title">Check out our Hall Gallery</h2>
          <Row>
            <Col lg='12'>
              <HallGallery /> {/* Already handles ImageKit + lazy load */}
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
}