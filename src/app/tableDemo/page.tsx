import { DataTable } from "@/components/DataTable/DataTable";
import { userColumns } from "@/components/DataTable/DataTableColumns/users";
import { branchColumns } from "@/components/DataTable/DataTableColumns/branch";
import { users, branches, devices, User, Branch, Device } from "./sample-data";
import { deviceColumns } from "@/components/DataTable/DataTableColumns/esl";
  
const UsersPage = () => {
  return (
    <div style={{display:"grid", gap:"50px"}}>
      <div>
        <h2>User List</h2>
        <DataTable<User> columns={userColumns} data={users} />
      </div>
      <div>
        <h2>Branch List</h2>
        <DataTable<Branch> columns={branchColumns} data={branches} />
      </div>
      <div>
        <h2>ESL List</h2>
        <DataTable<Device> columns={deviceColumns} data={devices} />
      </div>
    </div>
  );
};

export default UsersPage;
