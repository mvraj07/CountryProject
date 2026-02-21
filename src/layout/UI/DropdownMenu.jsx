export const DropdownMenu = ({ handleDropdownSelection }) => {
  return (
    <div className=" dropdown-menu">
      <button onClick={handleDropdownSelection} name="All">
        All
      </button>
      <button onClick={handleDropdownSelection} name="Africa">
        Africa
      </button>
      <button onClick={handleDropdownSelection} name="Asia">
        Asia
      </button>
      <button onClick={handleDropdownSelection} name="Europe">
        Europe
      </button>
    </div>
  );
};
