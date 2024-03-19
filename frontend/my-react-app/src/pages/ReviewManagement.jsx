import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReviewTable from "./ReviewTable";
import { listRivews } from "../config/services/reviews";
import Pagination from "../pages/Pagination";

const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    const context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};

const ReviewManagement = () => {
  const navigate = useNavigate()
  const [pageNo, setPagination] = useState(1);
  const [itemsPerPage] = useState(10);
  const [search, setSearchValue] = useState("");
  const [lastPage, setLastPage] = useState(false);
  const [reviewsList, setReviewsList] = useState([]);

const getReviewList = async () => {
  let params = {
    pageNo: (pageNo-1),
    count: itemsPerPage,
    search: search,
  };
  try {
    setLastPage(false);
    let result = await listRivews(params);
    let list = result?.data?.data;
    if (list?.length > 0) {
      setReviewsList(list);
      if (list?.length < itemsPerPage) setLastPage(true);
    } else {
      setReviewsList([]);
      setLastPage(true); 
    }
  } catch (err) {
    console.error("Error occurred while fetching reviews:", err);
  } 
};


  useEffect(() => {
    getReviewList();
  }, [search, pageNo]);

  const handleSearch = (e) => {
    let value = e?.target?.value;
    let finalValue= value.trim()
    if (finalValue !== "") setSearchValue(finalValue);
    else setSearchValue("")
      
  };

  const handleCreate = () => {
    navigate("/add-review");
  }

  const debouncedHandleSearch = debounce(handleSearch, 1000);

  return (
    <>
      <div class="tableCardContainer">
        <div class="paper">
          <div class="mainContainer">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            >
              <div class="left">
                <h3>Manage Reviews</h3>
              </div>

              <div class="right">
                <button className="custom_button" onClick={handleCreate}>
                  Create
                </button>
              </div>
            </div>
            <input
              style={{ marginBottom: "20px" }}
              class="inputRounded search-input width-auto"
              type="search"
              placeholder="Search By Title"
              maxlength="100"
              onChange={debouncedHandleSearch}
            />
           
            <div id="reviewsTable">
              <ReviewTable options={reviewsList} getRivewList={getReviewList} />
            </div>
          </div>
          <div class="pagination">
            <div id="pagination">
              <Pagination
                pageNo={pageNo}
                setPagination={setPagination}
                lastPage={lastPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewManagement;
