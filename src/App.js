import React, { useState, useRef, useEffect, useCallback } from "react";
import {DataTable, Spin} from 'lux-components';
import useFetch from "./component/useFetch";
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css'; 

const App = () => {

  let categoryId = '10'
  const [page, setPage] = useState(0);
  const { loadingF, errorF, data } = useFetch(categoryId, page);
  const loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };

    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);


  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Url',
      dataIndex: 'url',
      key: 'url',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Points',
      dataIndex: 'points',
      key: 'points',
    },
  ];

  return (
    <>
    <div style={{height:'50%'}}>
      <DataTable columns={columns} dataSource={data} pagination={false}
        scroll={{ y: '100%' }} />
      {loadingF && <Spin />}
      {errorF && <p>Error!</p>}
      <div ref={loader} />
      </div>
    </>
  );
}
export default App