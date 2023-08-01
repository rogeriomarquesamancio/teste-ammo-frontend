import { useEffect } from 'react';
import HomeView from './Home.view';

function Home() {
    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://www.w3schools.com/xml/plant_catalog.xml');
        xhr.onload = () => {
          if (xhr.status === 200) {
            console.log(xhr.responseText);
          } else {
            console.log(xhr.status);
          }
        };
        xhr.send();
      }, []);

    return (
        <HomeView />
    )
}

export default Home;
