import React from "react";
import style from "./Pagination.module.css"; // Importa el archivo CSS con los estilos.

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const showPrevButton = currentPage > 1;
  const showNextButton = currentPage < totalPages;

  return (
    <div className={style.paginationContainer}>
      <div className={style.pagination}>
        {" "}
        {/* Aplica el estilo CSS al contenedor div */}
        {showPrevButton && (
          <span
            className={style.pageLink}
            onClick={() => onPageChange(currentPage - 1)}
          >
            {"<<"}
          </span>
        )}
        <span className={`${style.pageLink} ${style.currentPage}`}>
          {currentPage}
        </span>
        {showNextButton && (
          <span
            className={style.pageLink}
            onClick={() => onPageChange(currentPage + 1)}
          >
            {">>"}
          </span>
        )}
      </div>
    </div>
  );
};

export default Pagination;
