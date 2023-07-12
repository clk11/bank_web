import { Table } from "antd";

const BasicTable = (props: any) => {
  return (
    <div>
      <Table
        columns={props.colType}
        dataSource={props.data}
        pagination={{ pageSize: 5 }}
        scroll={{ y: 300 }}
      />
    </div>
  )
}

export default BasicTable