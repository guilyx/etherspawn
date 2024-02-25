import Header from '../components/Header.tsx';
import SupportCard from '../components/SupportCard'; // Ensure this is correctly imported
import SpawnCard from '../components/SpawnCard';
import DisclaimerCard from '../components/DisclaimerCard.tsx';

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="mt-36 flex flex-col items-center">
        <h1 className="font-bold text-6xl text-black dark:text-white mb-10">Etherspawn</h1>
        <p className="text-black dark:text-white font-light text-2xl text-center mr-4 ml-4 max-w-4xl mb-10">
          Etherspawn is a simple webapp designed to help you spawn Ethereum wallets and retrieve corresponding PKs and
          Seed Phrases.
        </p>
        <div className="grid place-items-center">
          <div className="flex items-center flex-row space-x-5 mt-1.5">
            <SpawnCard />
          </div>
          <div className="flex items-center flex-row space-x-5 mt-1.5">
            <SupportCard address="0x07eD706146545d01Fa66A3C08ebCa8C93a0089E5" />
          </div>
          <div className="flex items-center flex-row space-x-5 mt-1.5">
            <DisclaimerCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
