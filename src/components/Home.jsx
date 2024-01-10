import { useSelector } from "react-redux";

const Home = () => {
  const totalMahasiswa = useSelector((state) => state.mahasiswa.list.length);

  return (
    <div>
      <h1 className="text-center">Jumlah Mahasiswa</h1>
      <h2 className="text-center"> {totalMahasiswa}</h2>
    </div>
  );
};

export default Home;
