import Header from "../components/Header/Header";
import Selects from "../components/Selects";
import TeamCard from "../components/TeamCard";
import TeamsStatisticsCard from "../components/TeamStatisticsCard";

function Home() {
    return (
        <>
            <Header />
            <Selects />
            <TeamCard />
            <TeamsStatisticsCard />
        </>
    );
}

export default Home;
