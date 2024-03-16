import React from "react";
import moment from "moment";

const ReviewTable = ({ options }) => {
  const handleEditClick = (row, action) => {};

  const handleDelete = (row) => {};

  return (
    <div>
      <table
        aria-label="customized table"
        className="custom-table datasets-table"
      >
        <thead>
          <tr className="cm_table_head">
            <th>S.No.</th>
            <th>Title</th>
            <th>Content</th>
            <th>Date-Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {options &&
            options.length > 0 &&
            options.map((row, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{row?.Title}</td>
                <td>{row?.Content}</td>
                <td>
                  {moment(row?.["Date-time"]).format("DD-MM-YYYY (HH:mm A)")}
                </td>
                <td className="edit-cell action-cell">
                  {/* Edit button */}
                  <button
                    className="form_icon"
                    onClick={() => handleEditClick(row, "edit")}
                  >
                    Edit
                    <img src="EditIcon" alt="" />
                  </button>
                  {/* Delete button */}
                  <button
                    className="form_icon"
                    onClick={() => handleDelete(row)}
                  >
                    Delete
                    <img src="DeleteIcon" alt="" />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewTable;
