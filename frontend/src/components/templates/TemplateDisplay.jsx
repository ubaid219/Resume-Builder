import React from 'react';
import { Carousel } from 'react-bootstrap';


const TemplateDisplay = () => {
  const resumeTemplates = [
    {
      id: 1,
      name: 'Modern',
      image: "https://marketplace.canva.com/EAFRuCp3DcY/1/0/1131w/canva-black-white-minimalist-cv-resume-f5JNR-K5jjw.jpg",
      description: 'A clean and modern resume template with a focus on simplicity and readability.'
    },
    {
      id: 2,
      name: 'Classic',
      image: 'https://cdn.create.microsoft.com/catalog-assets/en-us/ce343500-4aff-4dfa-b337-57c78459c6ee/thumbnails/616/modern-nursing-resume-orange-modern-geometric-1-1-1dc2d11a00d6.webp',
      description: 'A traditional resume template with a timeless design and a focus on elegance.'
    },
    {
      id: 3,
      name: 'Creative',
      image: 'https://img.freepik.com/free-psd/clean-modern-resume-portfolio-cv-template_120329-3603.jpg',
      description: 'A bold and creative resume template with a focus on showcasing your personality and skills.'
    },
    
  ];

  return (
    <div className="container d-flex justify-content-center align-items-center mx-auto" style={{marginTop:"100px"}}>
    <Carousel >
      {resumeTemplates.map((template) => (
        <Carousel.Item key={template.id}>
          <img
            className="d-block"
            style={{height:"500px"}}
            src={template.image}
            alt={template.name}
          />
          <Carousel.Caption>
            <h5>{template.name}</h5>
            <p>{template.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    
    </div>
  );
};

export default TemplateDisplay;