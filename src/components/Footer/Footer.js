import SimpleReactFooter from 'simple-react-footer';

const Footer = () => {
  const description =
    'The website was designed by Shubh Bhalla using ReactJS as the front end. The link to the github repository for this application will be available below. Please feel free to connect with me for developing personal projects and/or suggestions about this website! The food recognition model used in this application was provided by Clarifai, and there website is linked below.';
  const title = 'About this application';
  const columns = [
    {
      title: 'Resources',
      resources: [
        {
          name: 'Clarifai',
          link: 'https://www.clarifai.com/',
        },
        {
          name: 'Repo',
          link: 'https://github.com/shubhbhalla/food-recognition-frontend',
        },
      ],
    },
    {
      title: 'Contact me',
      resources: [
        {
          name: 'Personal Website',
          link: 'https://shubhbhalla.me',
        },
        {
          name: 'Github',
          link: 'https://github.com/shubhbhalla/',
        },
        {
          name: 'LinkedIn',
          link: 'https://www.linkedin.com/in/shubh-bhalla-b86693a7/',
        },
        {
          name: 'Facebook',
          link: 'https://www.facebook.com/shubh.bhalla.1',
        },
      ],
    },
  ];
  return (
    <SimpleReactFooter
      description={description}
      title={title}
      columns={columns}
      copyright="Shubh Bhalla"
      backgroundColor="#f7797d"
      fontColor="#00449e"
      copyrightColor="#00449e"
    />
  );
};

export default Footer;
