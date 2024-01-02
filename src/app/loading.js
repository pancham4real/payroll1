import Image from "next/image";
import LoadingGif from "../assets/img/loading.gif";
function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <Image
        src={LoadingGif}
        className="loader-image justify-center"
        width={200}
        height={200}
        alt="Loading.."
      />
    </div>
  );
}

export default Loading;
