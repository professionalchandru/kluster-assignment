/* eslint-disable react/prop-types */

const BookCard = ({ children }) => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg h-80 w-64 border border-borderPrimary cursor-pointer">
        {children}
      </div>
    </>
  );
};

export default BookCard;

export const BookCover = ({ src, alt, classNames, onClick }) => {
  return (
    <>
      <div onClick={onClick} className="flex flex-col items-center">
        <img src={src} alt={alt} className={classNames} />
      </div>
    </>
  );
};

export const BookTitle = ({ text, title }) => {
  return (
    <>
      {title ? (
        <div className="inline-flex space-x-4 items-center">
          <span className="pt-2 text-primary font-medium text-lg" htmlFor="">
            {title}
          </span>
          <p
            className={`pt-2 text-center text-secondary font-bold text-lg italic ${commonClass}`}
          >
            {text}
          </p>
        </div>
      ) : (
        <p
          className={`pt-2 text-center text-secondary font-bold text-lg italic ${commonClass}`}
        >
          {text}
        </p>
      )}
    </>
  );
};

export const Author = ({ text }) => {
  return (
    <>
      <p
        className={`pt-0.5 text-center text-primary font-normal text-base ${commonClass}`}
      >
        {text}
      </p>
    </>
  );
};

export const Description = ({ text }) => {
  return (
    <>
      <p
        className={`pt-0.5 text-center text-secondary font-normal text-base ${commonClass}`}
      >
        {text}
      </p>
    </>
  );
};

export const BookPrice = ({ text }) => {
  return (
    <>
      <p
        className={`pt-0.5 text-center text-errorText font-medium text-base ${commonClass}`}
      >
        ₹ {text}
      </p>
    </>
  );
};

export const AddToCartButton = ({ isSelected, onClick }) => {
  return (
    <>
      <button
        className={`py-1 mt-1 text-center w-full ${
          isSelected ? "bg-special" : "bg-successDarker"
        }  rounded-lg border border-special text-white text-ellipsis overflow-hidden whitespace-nowrap`}
        onClick={onClick}
      >
        {isSelected ? "Remove" : "Add to cart"}
      </button>
    </>
  );
};

export const BookDetailsContainer = ({ children }) => {
  return (
    <>
      <div className="px-4 py-2 ">{children}</div>
    </>
  );
};

BookCard.Cover = BookCover;
BookCard.Title = BookTitle;
BookCard.Author = Author;
BookCard.Price = BookPrice;
BookCard.AddToCart = AddToCartButton;
BookCard.BookDetailsContainer = BookDetailsContainer;
BookCard.Description = Description;

const commonClass = `text-base cursor-pointer text-ellipsis overflow-hidden whitespace-nowrap`;
