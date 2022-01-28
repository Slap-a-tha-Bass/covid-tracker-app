import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { CenterDiv } from "../components/card";

const P = styled.p`
  font-size: 1.5rem;
  margin: 1rem 1rem;
`;
const Span = styled.span`
  font-size: 2rem;
  color: red;
`;
export default function Home(props) {
  return (
    <div>
      <Head>
        <title>US COVID Tracker</title>
      </Head>
      <CenterDiv>
        <h1>Data is fetched from <a href="https://covidactnow.org/" target="_blank">covidactnow.org</a></h1>
      </CenterDiv>
      <P>
        The <Span><Link href="/us_data" >US Current</Link></Span> tab will show you a list of all states,
        with 5 pieces of data displayed.
      </P>
      <P>
        If you want more specific data, just click your state and 3 bar graphs
        will populate with additional data rendered at the bottom of the card.
      </P>
      <P>
        The <Span><Link href="/us_historic">US Historic</Link></Span> tab will take a bit longer to load, so be patient!
        Lots of data being fetched!
      </P>
      <P>
        It will show a similar list of states but with no data available. When
        you click this time, you will see 2 line graphs with accumulative data
        for your chosen state.
      </P>
    </div>
  );
}
