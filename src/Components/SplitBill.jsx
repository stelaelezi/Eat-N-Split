import Button from "./Button";

const SplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>SPLIT A BILL WITH </h2>
      <label>💰Bill value</label>
      <input type="text" />
      <label>🕺🏻Your expense</label>
      <input type="text" />
      <label>👯‍♀️ x expense</label>
      <input type="text" disabled />
      <label>🥳Who is paying the bill?</label>

      <select>
        <option value="you">You</option>
        <option value="user">X</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};
export default SplitBill;
