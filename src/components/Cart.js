import React from "react";
import { Link } from "react-router-dom";
import {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
} from "../services/post";

const Cart = () => {
  const responseInfo = useGetAllPostQuery();
  console.log("Response  :", responseInfo);
  //   const responseById = useGetPostByIdQuery(2);
  //   const responseByLimit=useGetPostByLimitQuery(5);
  //   console.log("Response By Id :", responseById);
  // console.log("Response By Limit :", responseByLimit);

  return (
    <>
      <h2 className="text-center">Store </h2>
        <div className="row">
      {responseInfo &&
        responseInfo?.data?.map((post, i) => {
          return (
            <div className="card col-4" key={i} style={{width: "18rem"}}>
            <img src={post.image} class="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">
                  {post.title}
                </h5>
                <p class="card-text">{post.description}</p>
                <Link to="">{post.price}</Link>
              </div>
            </div>
          );
        })}
        </div>
    </>
  );
};

export default Cart;
