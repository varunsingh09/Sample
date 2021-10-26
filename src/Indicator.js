import React, { useState, useRef, useEffect, useCallback } from "react";
import { Table, Spin } from 'antd';
import useFetch from "./component/useFetch";
import { useVT } from 'virtualizedtableforantd4';

const Indicator = () => {

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


  const [vt, set_components] = useVT(() => ({ scroll: { y: 600 } }), []);
  const columns = [
    {
      title: 'Body',
      dataIndex: 'body',
      key: 'body',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    }
  ];

  return <><Table
    scroll={{ y: 600 }} // It's important for using VT!!! DO NOT FORGET!!!
    components={vt}
    columns={columns}
    dataSource={data}
    pagination={false}
    rowKey={obj => obj.id}
  />
    {loadingF && <Spin />}
    {errorF && <p>Error!</p>}
    <div ref={loader} />
  </>
}

export default Indicator