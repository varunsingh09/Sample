
import React , { useState } from "react";
import useVirtual from "react-cool-virtual";
import axios from "axios";
import { DataTable, Spin } from 'lux-components';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';

import "./App.css";

const TOTAL_COMMENTS = 500;
const BATCH_COMMENTS = 10;
const isItemLoadedArr = [];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const loadData = async ({ loadIndex }, setComments ,setLoading) => {
  // Set the state of a batch items as `true`
  // to avoid the callback from being invoked repeatedly
  isItemLoadedArr[loadIndex] = true;
  setLoading(true);

  try {
    // Simulating a slow network
    await sleep(2000);

    const { data: comments } = await axios(
      `https://jsonplaceholder.typicode.com/comments?_start=${loadIndex + 1}&_limit=${BATCH_COMMENTS}`
    );
    
    setComments((prevComments) => {
      const nextComments = [...prevComments];

      comments.forEach((comment) => {
        nextComments[comment.id - 1] = comment;
      });
      setLoading(false);
      return nextComments;
    });
  } catch (err) {
    // If there's an error set the state back to `false`
    isItemLoadedArr[loadIndex] = false;
    setLoading(false);
    // Then try again
    loadData({ loadIndex }, setComments,setLoading);
  }
};

const Skeleton = () => {
  const [loading ,setLoading] = useState(false)
  const [comments, setComments] = useState([]);
  const { outerRef, innerRef, items } = useVirtual({
    itemCount: TOTAL_COMMENTS,
    // Estimated item size (with padding)
    itemSize: 122,
    // The number of items that you want to load/or pre-load, it will trigger the `loadMore` callback
    // when the user scrolls within every items, e.g. 1 - 5, 6 - 10, and so on (default = 15)
    loadMoreCount: BATCH_COMMENTS,
    // Provide the loaded state of a batch items to the callback for telling the hook
    // whether the `loadMore` should be triggered or not
    isItemLoaded: (loadIndex) => isItemLoadedArr[loadIndex],
    // We can fetch the data through the callback, it's invoked when more items need to be loaded
    loadMore: (e) => loadData(e, setComments,setLoading),
  });
  const columns = [
    {
      title: 'Body',
      dataIndex: 'body',
      key: 'body',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },

  ];

  return (
    <div
      className="outer"
      style={{ height: "700px", overflow: "auto" }}
      ref={outerRef}
    >
      <div ref={innerRef}>
        <DataTable
          columns={columns}
          dataSource={comments}
          pagination={false}
        />
        {loading===true && <Spin/>}
      </div>
    </div>
  );
};

export default Skeleton;
