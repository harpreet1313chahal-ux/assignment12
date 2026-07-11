import { Table } from "./Table";

const meta = {
  title: "ZZZ/Table",
  component: Table,
};

export default meta;

export const Default = () => (
  <Table
    headers={["Name", "Age"]}
    data={[
      ["John", "25"],
      ["Jane", "30"],
    ]}
  />
);
