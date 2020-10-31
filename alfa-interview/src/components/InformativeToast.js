import React from "react";

import Toast from "react-bootstrap/Toast";

const InformativeToast = ({ toast, setToastInfo }) => {
   const colors = {
    success: {
      title:"Sucesso!",
      backgroundColor: "green",
      textColor: "white",
    },
    error: {
      title:"Erro!",
      backgroundColor: "red",
      textColor: "black",
    },
  };

  return (
    <Toast
      show={toast?.show}
      onClose={() =>
        setToastInfo({
          show: false,
          message: undefined,
          type: undefined,
        })
      }
      animation={true}
      style={{
        position: "absolute",
        top: 10,
        right: 10,
        backgroundColor: colors[toast?.type || "error"].backgroundColor,
      }}
    >
      <Toast.Header
        style={{
          backgroundColor: colors[toast?.type || "error"].backgroundColor,
        }}
      >
        <h4 style={{ color: colors[toast?.type || "error"].textColor }}>
          {colors[toast?.type || "error"].title}
        </h4>
      </Toast.Header>
      <Toast.Body style={{ color: colors[toast?.type || "error"].textColor }}>
        {toast?.message}
      </Toast.Body>
    </Toast>
  );
};

export default InformativeToast;
