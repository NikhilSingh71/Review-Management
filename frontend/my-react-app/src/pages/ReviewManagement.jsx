import React, { useState, useEffect } from "react";
import ReviewTable from "./ReviewTable";

let options = [
  {
    Title: "Title 1",
    Content: "Content for item 1",
    "Date-time": "2024-03-16T08:00:00Z",
  },
  {
    Title: "Title 2",
    Content: "Content for item 2",
    "Date-time": "2024-03-16T08:15:00Z",
  },
  {
    Title: "Title 3",
    Content: "Content for item 3",
    "Date-time": "2024-03-16T08:30:00Z",
  },
  {
    Title: "Title 4",
    Content: "Content for item 4",
    "Date-time": "2024-03-16T08:45:00Z",
  },
  {
    Title: "Title 5",
    Content: "Content for item 5",
    "Date-time": "2024-03-16T09:00:00Z",
  },
  {
    Title: "Title 6",
    Content: "Content for item 6",
    "Date-time": "2024-03-16T09:15:00Z",
  },
  {
    Title: "Title 7",
    Content: "Content for item 7",
    "Date-time": "2024-03-16T09:30:00Z",
  },
  {
    Title: "Title 8",
    Content: "Content for item 8",
    "Date-time": "2024-03-16T09:45:00Z",
  },
  {
    Title: "Title 9",
    Content: "Content for item 9",
    "Date-time": "2024-03-16T10:00:00Z",
  },
  {
    Title: "Title 10",
    Content: "Content for item 10",
    "Date-time": "2024-03-16T10:15:00Z",
  },
  {
    Title: "Title 11",
    Content: "Content for item 11",
    "Date-time": "2024-03-16T10:30:00Z",
  },
  {
    Title: "Title 12",
    Content: "Content for item 12",
    "Date-time": "2024-03-16T10:45:00Z",
  },
  {
    Title: "Title 13",
    Content: "Content for item 13",
    "Date-time": "2024-03-16T11:00:00Z",
  },
  {
    Title: "Title 14",
    Content: "Content for item 14",
    "Date-time": "2024-03-16T11:15:00Z",
  },
  {
    Title: "Title 15",
    Content: "Content for item 15",
    "Date-time": "2024-03-16T11:30:00Z",
  },
  {
    Title: "Title 16",
    Content: "Content for item 16",
    "Date-time": "2024-03-16T11:45:00Z",
  },
  {
    Title: "Title 17",
    Content: "Content for item 17",
    "Date-time": "2024-03-16T12:00:00Z",
  },
  {
    Title: "Title 18",
    Content: "Content for item 18",
    "Date-time": "2024-03-16T12:15:00Z",
  },
  {
    Title: "Title 19",
    Content: "Content for item 19",
    "Date-time": "2024-03-16T12:30:00Z",
  },
  {
    Title: "Title 20",
    Content: "Content for item 20",
    "Date-time": "2024-03-16T12:45:00Z",
  },
];

const ReviewManagement = () => {
  const [pageNo, setPagination] = useState(1);
  const [itemsPerPage] = useState(10);
  const [search, setSearchValue] = useState("");
  const [lastPage, setLastPage] = useState(false);
  const [loader, setLoading] = useState(false);
  const [searchBy, setSearchBy] = useState("");
  const [reviewsList, setReviewsList] = useState([]);

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
                <a href="/authorised/hardware-part-variant-form">
                  <div class="submitBtn">Create</div>
                </a>
              </div>
            </div>
            <input
              style={{ marginBottom: "20px" }}
              class="inputRounded search-input width-auto"
              type="search"
              placeholder="Search By Review"
              oninput="handleSearch(event)"
              maxlength="100"
            />
            <div id="loader"></div>
            <div id="hardwarePartVariantTable">
              {/* <!-- Your HardwarePartVariantTable component content will be rendered here --> */}
              <ReviewTable options={options} />
            </div>
          </div>
          <div class="center cm_pagination">
            <div id="pagination"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewManagement;
