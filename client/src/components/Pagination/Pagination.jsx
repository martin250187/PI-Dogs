import React from "react";
import style from "./Pagination.module.css"; // Importa el archivo CSS con los estilos.

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const showFirstButton = currentPage > 2;
  const showPrevButton = currentPage > 1;
  const showNextButton = currentPage < totalPages;
  const showLastButton = currentPage < totalPages - 1;

  return (
    <div className={style.paginationContainer}>
      <div className={style.pagination}>
        {" "}
        {showFirstButton && (
          <span
            title="First page"
            className={style.pageLink}
            onClick={() => onPageChange(1)}
          >
            <>&#8810;</>
          </span>
        )}
        {/* Aplica el estilo CSS al contenedor div */}
        {showPrevButton && (
          <span
            title="Previous page"
            className={style.pageLink}
            onClick={() => onPageChange(currentPage - 1)}
          >
            <>&#8630;</>
          </span>
        )}
        <span className={`${style.pageLink} ${style.currentPage}`}>
          {currentPage}
        </span>
        {showNextButton && (
          <span
            title="Next page"
            className={style.pageLink}
            onClick={() => onPageChange(currentPage + 1)}
          >
            <>&#8631;</>
          </span>
        )}
        {showLastButton && (
          <span
            title="Last page"
            className={style.pageLink}
            onClick={() => onPageChange(totalPages)}
          >
            <>&#8811;</>
          </span>
        )}
      </div>
    </div>
  );
};

export default Pagination;
