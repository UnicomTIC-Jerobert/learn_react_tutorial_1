import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () =>
    await axios.get("http://localhost:8000/users").then
      ((res) => {
        setUsers(res.data);
      });

  useEffect(() => {
    getAllUsers();
  }, []);

  //Search Function
  const handleSearchChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchText) || user.city.toLowerCase().includes(searchText));
  };

  //Delete User Function
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/users/${id}`).
      then((res) => {
        setUsers(res.data);
        setFilterusers(res.data);
      });
  }


  //Add User Details
  const handleAddRecord = () => {
    setUserData({ name: "", age: "", city: "" });
    setIsModalOpen(true);
  };

  const handleData = (e) => {
    setUserData({
      ...userData, [e.target.name]: e.target.
        value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.id) {
      await axios.patch(`http://localhost:8000/users/${userData.id}`, userData).then((res) => {
        console.log(res);
      });
    } else {
      await axios.post("http://localhost:8000/users",
        userData).then((res) => {
          console.log(res);
        });
    }
    closeModal();
  };

  return (
    <>
      <div className="container">
        <h3>CRUD Application with React.js Frontend and Node.js Backend</h3>
        <div className="input-search">
          <input type="search" />
          <button>Add Record</button>
        </div>



        <table className="table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, index) => {
                return (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.city}</td>
                    <td>
                      <button className="btn green">Edit</button>
                    </td>
                    <td>
                      <button className="btn red">Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h2>User Record</h2>
              <div className="input-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="input-group">
                <label htmlFor="age">Age</label>
                <input type="number" name="age" id="age" />
              </div>
              <div className="input-group">
                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" />
              </div>
              <button className="btn green">Add User</button>
            </div>
          </div>
        )}
      </div>
    </>

  );
}

export default App;