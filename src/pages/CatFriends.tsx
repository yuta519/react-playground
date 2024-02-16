import { useRef } from 'react';

export default function CatFriends() {
  const firstCatRef = useRef<HTMLImageElement | null>(null);
  const secondCatRef = useRef<HTMLImageElement | null>(null);
  const thirdCatRef = useRef<HTMLImageElement | null>(null);

  function handleScrollToFirstCat() {
    firstCatRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <>
      <nav>
        <button onClick={handleScrollToFirstCat}>
          Tom
        </button>
        <button onClick={handleScrollToSecondCat}>
          Maru
        </button>
        <button onClick={handleScrollToThirdCat}>
          Jellylorum
        </button>
      </nav>
      <div>
        <ul style={{ listStyle: "none", whiteSpace: "nowrap" }}>
          <li style={ { display: "inline", padding: "0.5rem" }}>
            <img
              src="https://placekitten.com/g/200/200"
              alt="Tom"
              ref={firstCatRef}
            />
          </li>
          <li style={ { display: "inline", padding: "0.5rem" }}>
            <img
              src="https://placekitten.com/g/300/200"
              alt="Maru"
              ref={secondCatRef}
            />
          </li>
          <li style={ { display: "inline", padding: "0.5rem" }}>
            <img
              src="https://placekitten.com/g/250/200"
              alt="Jellylorum"
              ref={thirdCatRef}
            />
          </li>
        </ul>
      </div>
    </>
  );
}
