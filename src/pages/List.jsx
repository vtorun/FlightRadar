import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { open } from "../redux/slices/detailSlice";
const List = () => {
  const { isLoading, error, flights } = useSelector((store) => store.flight);
  const dispatch = useDispatch();
  const [start, setStart] = useState(0);
  const perPage = 10;
  const end = start + perPage;
  const currentFlights = flights.slice(start, end);
  const totalPage = Math.ceil(flights.length / perPage);
  const handleChange = (event) => {
    setStart(event.selected * perPage);
  };

  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );

  if (error)
    return (
      <div>
        <Error info={error} />
      </div>
    );

  return (
    <div className="p-3 p-md-4">
      <table className="table table-hover table-responsive">
        <thead>
          <tr>
            <th>id</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th>Derece</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {currentFlights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td>{flight.deg}</td>
              <td>
                <button
                  className="dtyButton"
                  onClick={() => dispatch(open(flight.id))}
                >
                  Detay
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel="ileri >"
        previousLabel="< geri"        
        onPageChange={handleChange}
        pageRangeDisplayed={3}
        pageCount={totalPage}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default List;
