type TweetProps = {
  text: string; /* Opcional text?: string; */
}

export function Tweet(props: TweetProps){
  
  return (
    <p>{props.text}</p>
  );
}