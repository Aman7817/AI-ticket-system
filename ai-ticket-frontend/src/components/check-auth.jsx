// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function CheckAuth({ children, protectedRoute }) {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (protectedRoute) {
//       if (!token) {
//         navigate("/login");
//       } else {
//         setLoading(false);
//       }
//     } else {
//       if (token) {
//         navigate("/");
//       } else {
//         setLoading(false);
//       }
//     }
//   }, [navigate, protectedRoute]);

//   if (loading) {
//     return <div>loading...</div>;
//   }
//   return children;
// }

// export default CheckAuth;


// src/components/check-auth.jsx
import React from "react";
import { Navigate } from "react-router-dom";

function CheckAuth({ children, protectedRoute }) {
  const token = localStorage.getItem("token");

  if (protectedRoute && !token) {
    return <Navigate to="/login" />;
  }

  if (!protectedRoute && token) {
    return <Navigate to="/" />;
  }

  return children;
}

export default CheckAuth;
