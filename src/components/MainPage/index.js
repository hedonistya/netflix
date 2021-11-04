import React, {useContext, useEffect, useState} from "react";
import {
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavSearchInput,
  NavItem,
  NavLogo,
  NavMenu, NavSearch, NavLogoLink
} from "../Navbar/NavbarStyle";
import Logo from '../../logo.svg';
import {
  ImageBackground
} from "../About/AboutStyle";
import {
  MainLink,
  Cardd,
  CardContent,
  ContentContainer,
  CardItem,
  CardMain,
  CardSubtitle,
  CardText,
  CardTitle,
  CardImage,
} from "./MainPageStyle";
import {FirebaseContext} from "../../firebase/firebase";
import Fuse from "fuse.js";
import {
  DiscoverBackground, DiscoverBtn,
  DiscoverBtnWrapper, DiscoverContainer,
  DiscoverContent,
  DiscoverH1,
  DiscoverP
} from "../Discover/DiscoverStyle";


const MainPage = ({slides}) => {
  const [category, setCategory] = useState("films");
  const [searchTerm, setSearchTerm] = useState("");
  const [slideRows, setSlideRows] = useState([]);
  const [searchActive, setSearchActive] = useState(false);
  const {firebase} = useContext(FirebaseContext);
  let stateValue = false;

  function updateState(){ // изменяет значение на противоположное
    return !stateValue;
  }

  useEffect(() => { // выводит категории
    setSlideRows(slides[category]); // задает категории категории
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ["data.genre"], // доступен перебор по жанру
    });
    const results = fuse.search(searchTerm).map(({item}) => item); // присваивают значение поиска(заданный жанр)

    if (slideRows.length > 0 && searchTerm.length > 0 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogoLink to='/signin'>
            <NavLogo alt="Netflix" src={Logo}/>
          </NavLogoLink>

          <NavMenu>
            <NavItem>
              <MainLink active={category === "films" ? "true" : "false"}
                        onClick={() => setCategory("films")}>Films</MainLink>
            </NavItem>
            <NavItem>
              <MainLink active={category === "series" ? "true" : "false"}
                        onClick={() => setCategory("series")}>Series</MainLink>
            </NavItem>
          </NavMenu>
          <NavSearch>

            <NavSearchInput placeholder="Search films and series" value={searchTerm}
                            onChange={({target}) => setSearchTerm(target.value)}
                            active={searchActive}
                            data-testid='search-input'></NavSearchInput>
          </NavSearch>
          <NavBtn>
            <NavBtnLink to='/signin'>Log out</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      <DiscoverContainer>
        <DiscoverBackground>
          <ImageBackground/>
        </DiscoverBackground>
        <DiscoverContent>
          <DiscoverH1>Great Entertainment</DiscoverH1>
          <DiscoverP>Watch The Grand Tour, award-winning Amazon Originals such as The Man in the High Castle and Mozart in
            the Jungle, as well as popular movies and TV shows, with all titles available to download.</DiscoverP>
          <DiscoverBtnWrapper>
            <DiscoverBtn>Play</DiscoverBtn>
          </DiscoverBtnWrapper>
        </DiscoverContent>
      </DiscoverContainer>
      <ContentContainer>
        {slideRows.map((slideItem) => (
          <Cardd key={`${category}-${slideItem.title.toLowerCase()}`}>
            <CardTitle>{slideItem.title}</CardTitle>
            <CardContent>
              {slideItem.data.map((item) => (
                <CardItem key={item.docId} item={item} onClick={updateState}>
                    <CardImage src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}/>
                    <CardMain>
                      <CardSubtitle>{item.title}</CardSubtitle>
                      <CardText>{item.description}</CardText>
                    </CardMain>
                </CardItem>
              ))}
            </CardContent>
          </Cardd>
        ))}
      </ContentContainer>
    </>
  );
};

export default MainPage;