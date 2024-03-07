import React from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "Ritwik Bhagat",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
    replies: [
      {
        name: "Ritwik Bhagat",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
        replies: [
          {
            name: "Sachin Bhagat",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
            replies: [
              {
                name: "Ritwik Bhagat",
                description:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ritwik Bhagat",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
    replies: [
      {
        name: "Sachin Bhagat",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
        replies: [
          {
            name: "Ritwik Bhagat",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Ritwik Bhagat",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
    replies: [
      {
        name: "Sachin Bhagat",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
        replies: [],
      },
    ],
  },
  {
    name: "Ritwik Bhagat",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
    replies: [
      {
        name: "Sachin Bhagat",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
        replies: [
          {
            name: "Ritwik Bhagat",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
            replies: [
              {
                name: "Sachin Bhagat",
                description:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
                replies: [
                  {
                    name: "Ritwik Bhagat",
                    description:
                      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
                    replies: [
                      {
                        name: "Sachin Bhagat",
                        description:
                          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Sachin Bhagat",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
    replies: [
      {
        name: "Ritwik Bhagat",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
        replies: [],
      },
    ],
  },
];

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment,index) => {
        return (
          <div key={index}>
            <Comment data={comment} />
            <div className="pl-4 border border-l-black ">
              <CommentList comments={comment.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CommentContainer = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl m-4">Comments :</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
