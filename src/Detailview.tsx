import React from 'react';
import NavBar from './Components/NavBar/nav';
import Footer from './Components/Footer/footer';
import BookView from './Components/Detailed/BookView';

function Detailview() : JSX.Element
{
    return(
      <>
      <NavBar />
      <BookView />
      <Footer />
      </>
    );
}

export default Detailview;