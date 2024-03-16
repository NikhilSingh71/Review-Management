import React, { useEffect, useState } from "react";
import { addReview } from "../config/services/reviews";
import { useNavigate, useLocation } from "react-router-dom";

const AddEditReview = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isUpdate, setIsupdate] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;

  useEffect(() => {
    if (state === null || state === undefined) return;
    let data = state?.row;
    if (Object.keys(data)?.length > 0) {
      setContent(data?.content);
      setTitle(data?.title);
      setIsupdate(true);
    }
  }, [state]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let params = {
      title: title,
      content: content,
    };
    addReview(params)
      .then((res) => {
        if (res?.status === 200) {
          navigate("/");
        }
      })
      .catch((err) => console.error(err));
  };

  const handleReset = () => {
    setTitle("");
    setContent("");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>New Review</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="content">Content:</label>
        <br />
        <textarea
          id="content"
          name="content"
          rows="5"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <br />
        <br />
        <button type="submit">{isUpdate ? "Update" : "Save"}</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddEditReview;
