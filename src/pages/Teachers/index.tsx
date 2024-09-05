import { ProTable } from '@ant-design/pro-components';

export default function Teachers() {
  const columns: any[] = [
    {
      title: '班级名称',
      key: 'class_name',
      dataIndex: 'class_name',
      valueType: 'select',
    },
    {
      title: '上课时间',
      key: 'class_begin_time',
      dataIndex: 'class_begin_time',
    },
    {
      title: '上课老师',
      key: 'class_teacher',
      dataIndex: 'class_teacher',
    },
    {
      title: '学生数量',
      key: 'class_nums',
      dataIndex: 'class_nums',
    },
    {
      title: '操作',
      key: 'options',
      dataIndex: 'options',
      render: () => {
        
      }
    },
  ];
  return (
    <>
      <ProTable columns={columns} />
    </>
  );
}
