import { AuthorSpace, QuoteSpace, WhiteBoard, Wrapper } from './style'

const Quotesboard = ({quote, author}) => {
   // const quote = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
     //  const quote='Xolbf dk n nj kjnkjn lj iukklnjlnljnjlnjlml njn j nj nkj n kj nkj n hbnkljn kjn kj nkj n kjn kj nj nj n; n;l nin  nj ljn l nih njk njlfjs;dfkdasda jnj nj jn jn kjn kj nj nlj nh ksda sdasas;lkdsd fsfdsek'  
  return (
        <WhiteBoard>
            <QuoteSpace>
                <Wrapper>
                    <p>{quote}</p>
                </Wrapper>
            </QuoteSpace>
            <AuthorSpace>
                    <p>{author}</p>
            </AuthorSpace>
        </WhiteBoard>
    )
}

export default Quotesboard