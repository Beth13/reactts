interface ErrorMessageProps {
  error: string;
}

function Message({ error }: ErrorMessageProps) {
  return <p className="text-center text-red-600">{error}</p>;
}

export default Message;
