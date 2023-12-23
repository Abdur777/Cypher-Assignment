import MainContent from "@/components/MainContent/MainContent";
import TopBar from "@/components/TopBar/TopBar";

const Home = ({ apiData }) => {
  return (
    <div className="m-0 p-0 dark:bg-black">
      <TopBar />
      <MainContent apiData={apiData} />
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await fetch('https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers');
    const apiData = await response.json();
    
    return {
      props: {
        apiData,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        apiData: {},
      },
    };
  }
};

export default Home;
