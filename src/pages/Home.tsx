import Countries from "../components/CountriesSelect";
import Header from "../components/Header/Header";
import SeasonsSelect from "../components/SeasonsSelect";

function Home() {
    return (
        <>
            <Header />
            <Countries />
            <SeasonsSelect />
        </>
    );
}

export default Home;
