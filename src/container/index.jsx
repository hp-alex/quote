import {HomeContainer,Image, Display} from './style'
import {useSelector, useDispatch} from 'react-redux'
import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {changeBg, changeQuote, changeAuthor} from '../redux/quote/actions'
import Quotesboard from '../components/Quotesboard'
import Menu from '../components/Menu'
const Home = () => {
  const background = useSelector((state)=>state.quote.background);
  const quote = useSelector((state)=>state.quote.quote);
  const author = useSelector((state)=>state.quote.author);
  const url = useSelector(state=>state.quote.url);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(()=>{
      setLoading(true);
      axios.get(`https://quotes.rest/qod.json?category=${url}`)
      .then(res=>{
          dispatch(changeBg(res.data.contents.quotes[0].background));
          dispatch(changeQuote(res.data.contents.quotes[0].quote));
          dispatch(changeAuthor(res.data.contents.quotes[0].author));
          setLoading(false);
      })
      .catch(err=>{ console.log(err); setLoading(false);});
  },[url, dispatch]);

    if (loading) return <div style={{position: 'absolute',left: '500px',top: '250px', color: 'green'}}><font size='7'>Loading :-)</font><h2>Please wait!!!</h2></div>
    return (
        <HomeContainer>
            <Image src={background} alt="Loading.."/>
            <Display>
                <Menu />
                <Quotesboard quote={quote} author={author}/>
            </Display>
        </HomeContainer>
    )
    }
export default Home