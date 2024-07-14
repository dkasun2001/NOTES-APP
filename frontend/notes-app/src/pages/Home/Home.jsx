import NoteCard from "../../components/cards/NoteCard";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <NoteCard
          title="Meeting on 7th April"
          date="3rd Apr 2024"
          content="Meeting on 7th April Meeting on 7th April Meeting on 7th April"
          tags="#meeting"
          isPinned={true}
          onEdit={() => {}}
          onDelete={() => {}}
          onPinNote={() => {}}
        />
      </div>
    </>
  );
};

export default Home;
