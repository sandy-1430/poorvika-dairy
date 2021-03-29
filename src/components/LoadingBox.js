import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function LoadingBox() {
  return (
    <div className="loading-overlay">
      <CircularProgress />
    </div>
  );
}
